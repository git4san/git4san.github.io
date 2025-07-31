import { sql } from "drizzle-orm";
import { pgTable, text, varchar, integer, jsonb, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const projects = pgTable("projects", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  title: text("title").notNull(),
  description: text("description").notNull(),
  category: text("category").notNull(),
  status: text("status").notNull(),
  year: integer("year").notNull(),
  icon: text("icon").notNull(),
  image: text("image").notNull(),
  tags: jsonb("tags").$type<string[]>().notNull(),
});

export const publications = pgTable("publications", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  scholarId: text("scholar_id").unique().notNull(),
  title: text("title").notNull(),
  authors: text("authors").notNull(),
  venue: text("venue").notNull(),
  year: integer("year").notNull(),
  citations: integer("citations").default(0),
  link: text("link"),
  type: text("type").notNull(), // "Journal" or "Conference"
  impactFactor: text("impact_factor"), // Impact factor for journals
  quartile: text("quartile"), // Q1, Q2, Q3, Q4 for journals
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

export const scholarMetrics = pgTable("scholar_metrics", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  totalCitations: integer("total_citations").default(0),
  totalCitationsSince2020: integer("total_citations_since_2020").default(0),
  hIndex: integer("h_index").default(0),
  hIndexSince2020: integer("h_index_since_2020").default(0),
  i10Index: integer("i10_index").default(0),
  i10IndexSince2020: integer("i10_index_since_2020").default(0),
  citationsByYear: jsonb("citations_by_year").$type<Record<string, number>>(),
  lastUpdated: timestamp("last_updated").defaultNow(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export const insertProjectSchema = createInsertSchema(projects).omit({
  id: true,
});

export const insertPublicationSchema = createInsertSchema(publications).omit({
  id: true,
  createdAt: true,
  updatedAt: true,
});

export const insertScholarMetricsSchema = createInsertSchema(scholarMetrics).omit({
  id: true,
  lastUpdated: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;
export type InsertProject = z.infer<typeof insertProjectSchema>;
export type Project = typeof projects.$inferSelect;
export type InsertPublication = z.infer<typeof insertPublicationSchema>;
export type Publication = typeof publications.$inferSelect;
export type InsertScholarMetrics = z.infer<typeof insertScholarMetricsSchema>;
export type ScholarMetrics = typeof scholarMetrics.$inferSelect;
