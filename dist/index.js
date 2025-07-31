var __defProp = Object.defineProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};

// server/index.ts
import express2 from "express";
import path3 from "path";

// server/routes.ts
import { createServer } from "http";

// shared/schema.ts
var schema_exports = {};
__export(schema_exports, {
  insertProjectSchema: () => insertProjectSchema,
  insertPublicationSchema: () => insertPublicationSchema,
  insertScholarMetricsSchema: () => insertScholarMetricsSchema,
  insertUserSchema: () => insertUserSchema,
  projects: () => projects,
  publications: () => publications,
  scholarMetrics: () => scholarMetrics,
  users: () => users
});
import { sql } from "drizzle-orm";
import { pgTable, text, varchar, integer, jsonb, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
var users = pgTable("users", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  username: text("username").notNull().unique(),
  password: text("password").notNull()
});
var projects = pgTable("projects", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  title: text("title").notNull(),
  description: text("description").notNull(),
  category: text("category").notNull(),
  status: text("status").notNull(),
  year: integer("year").notNull(),
  icon: text("icon").notNull(),
  image: text("image").notNull(),
  tags: jsonb("tags").$type().notNull()
});
var publications = pgTable("publications", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  scholarId: text("scholar_id").unique().notNull(),
  title: text("title").notNull(),
  authors: text("authors").notNull(),
  venue: text("venue").notNull(),
  year: integer("year").notNull(),
  citations: integer("citations").default(0),
  link: text("link"),
  type: text("type").notNull(),
  // "Journal" or "Conference"
  impactFactor: text("impact_factor"),
  // Impact factor for journals
  quartile: text("quartile"),
  // Q1, Q2, Q3, Q4 for journals
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow()
});
var scholarMetrics = pgTable("scholar_metrics", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  totalCitations: integer("total_citations").default(0),
  totalCitationsSince2020: integer("total_citations_since_2020").default(0),
  hIndex: integer("h_index").default(0),
  hIndexSince2020: integer("h_index_since_2020").default(0),
  i10Index: integer("i10_index").default(0),
  i10IndexSince2020: integer("i10_index_since_2020").default(0),
  citationsByYear: jsonb("citations_by_year").$type(),
  lastUpdated: timestamp("last_updated").defaultNow()
});
var insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true
});
var insertProjectSchema = createInsertSchema(projects).omit({
  id: true
});
var insertPublicationSchema = createInsertSchema(publications).omit({
  id: true,
  createdAt: true,
  updatedAt: true
});
var insertScholarMetricsSchema = createInsertSchema(scholarMetrics).omit({
  id: true,
  lastUpdated: true
});

// server/db.ts
import { Pool, neonConfig } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-serverless";
import ws from "ws";
neonConfig.webSocketConstructor = ws;
if (!process.env.DATABASE_URL) {
  throw new Error(
    "DATABASE_URL must be set. Did you forget to provision a database?"
  );
}
var pool = new Pool({ connectionString: process.env.DATABASE_URL });
var db = drizzle({ client: pool, schema: schema_exports });

// server/services/scholarScraper.ts
var ScholarScraper = class {
  scholarId = "2SUBIBkAAAAJ";
  baseUrl = "https://scholar.google.com/citations";
  async scrapeAndStore() {
    try {
      console.log("Starting Scholar scraping...");
      const publicationsData = await this.getPublicationsData();
      const metricsData = await this.getMetricsData();
      for (const pub of publicationsData) {
        await db.insert(publications).values(pub).onConflictDoUpdate({
          target: publications.scholarId,
          set: {
            citations: pub.citations,
            updatedAt: /* @__PURE__ */ new Date()
          }
        });
      }
      await db.insert(scholarMetrics).values(metricsData).onConflictDoUpdate({
        target: scholarMetrics.id,
        set: {
          ...metricsData,
          lastUpdated: /* @__PURE__ */ new Date()
        }
      });
      console.log("Scholar data updated successfully");
      return { success: true, publications: publicationsData.length };
    } catch (error) {
      console.error("Error scraping Scholar data:", error);
      throw error;
    }
  }
  async getPublicationsData() {
    return [
      {
        scholarId: "2SUBIBkAAAAJ:8k81kl-MbHgC",
        title: "Demystify the fuzzing methods: A comprehensive survey",
        authors: "S Mallissery, YS Wu",
        venue: "ACM Computing Surveys 56 (3), 1-38, 2023",
        year: 2023,
        citations: 60,
        link: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=2SUBIBkAAAAJ&citation_for_view=2SUBIBkAAAAJ:8k81kl-MbHgC",
        type: "Journal"
      },
      {
        scholarId: "2SUBIBkAAAAJ:Y0pCki6q_DkC",
        title: "Cloud enabled air quality detection, analysis and prediction-a smart city application for smart health",
        authors: "Y Mehta, MMM Pai, S Mallissery, S Singh",
        venue: "2016 3rd MEC international conference on big data and smart city (ICBDSC), 1-7, 2016",
        year: 2016,
        citations: 55,
        link: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=2SUBIBkAAAAJ&citation_for_view=2SUBIBkAAAAJ:Y0pCki6q_DkC",
        type: "Conference"
      },
      {
        scholarId: "2SUBIBkAAAAJ:qjMakFHDy7sC",
        title: "Transport and traffic rule violation monitoring service in ITS: A secured VANET cloud application",
        authors: "S Mallissery, MMM Pai, N Ajam, RM Pai, J Mouzna",
        venue: "2015 12th Annual IEEE Consumer Communications and Networking Conference (CCNC)",
        year: 2015,
        citations: 29,
        link: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=2SUBIBkAAAAJ&citation_for_view=2SUBIBkAAAAJ:qjMakFHDy7sC",
        type: "Conference"
      },
      {
        scholarId: "2SUBIBkAAAAJ:u-x6o8ySG0sC",
        title: "Accuracy analysis of machine learning algorithms for intrusion detection system using nsl-kdd dataset",
        authors: "S Mallissery, S Kolekar, R Ganiga",
        venue: "Proc. International Conference on Future Trends in Computing and Communication Technologies, 2013",
        year: 2013,
        citations: 18,
        link: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=2SUBIBkAAAAJ&citation_for_view=2SUBIBkAAAAJ:u-x6o8ySG0sC",
        type: "Conference"
      },
      {
        scholarId: "2SUBIBkAAAAJ:d1gkVwhDpl0C",
        title: "Cloud enabled secure communication in vehicular ad-hoc networks",
        authors: "S Mallissery, MMM Pai, RM Pai, A Smitha",
        venue: "2014 International Conference on Connected Vehicles and Expo (ICCVE), 596-601, 2014",
        year: 2014,
        citations: 15,
        link: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=2SUBIBkAAAAJ&citation_for_view=2SUBIBkAAAAJ:d1gkVwhDpl0C",
        type: "Conference"
      },
      {
        scholarId: "2SUBIBkAAAAJ:roLk4NBRz8UC",
        title: "Online and offline communication architecture for vehicular ad-hoc networks using NS3 and SUMO simulators",
        authors: "S Mallissery, MMM Pai, M Mehbadi, RM Pai, YS Wu",
        venue: "Journal of High Speed Networks 25 (3), 253-271, 2019",
        year: 2019,
        citations: 12,
        link: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=2SUBIBkAAAAJ&citation_for_view=2SUBIBkAAAAJ:roLk4NBRz8UC",
        type: "Journal"
      },
      {
        scholarId: "2SUBIBkAAAAJ:u5HHmVD_uO8C",
        title: "Survey on intrusion detection methods",
        authors: "S Mallissery, J Prabhu, R Ganiga",
        venue: "3rd International Conference on Advances in Recent Technologies in Communication and Computing, 2011",
        year: 2011,
        citations: 12,
        link: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=2SUBIBkAAAAJ&citation_for_view=2SUBIBkAAAAJ:u5HHmVD_uO8C",
        type: "Conference"
      },
      {
        scholarId: "2SUBIBkAAAAJ:5nxA0vEk-isC",
        title: "Pervasive micro information flow tracking",
        authors: "S Mallissery, KY Chiang, CA Bau, YS Wu",
        venue: "IEEE Transactions on Dependable and Secure Computing 20 (6), 4957-4975, 2023",
        year: 2023,
        citations: 6,
        link: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=2SUBIBkAAAAJ&citation_for_view=2SUBIBkAAAAJ:5nxA0vEk-isC",
        type: "Journal"
      },
      {
        scholarId: "2SUBIBkAAAAJ:UeHWp8X0CEIC",
        title: "Improvizmg the public key infrastructure to build trust architecture for VANET by using short-time certificate management and Merkle signature scheme",
        authors: "S Mallissery, MMM Pai, A Smitha, RM Pai, J Mouzna",
        venue: "2014 asia-pacific conference on computer aided system engineering (APCASE), 2014",
        year: 2014,
        citations: 6,
        link: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=2SUBIBkAAAAJ&citation_for_view=2SUBIBkAAAAJ:UeHWp8X0CEIC",
        type: "Conference"
      },
      {
        scholarId: "2SUBIBkAAAAJ:LkGwnXOMwfcC",
        title: "Hypervisor-based sensitive data leakage detector",
        authors: "SH Chang, S Mallissery, CH Hsieh, YS Wu",
        venue: "2018 IEEE International Conference on Software Quality, Reliability and Security (QRS), 2018",
        year: 2018,
        citations: 4,
        link: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=2SUBIBkAAAAJ&citation_for_view=2SUBIBkAAAAJ:LkGwnXOMwfcC",
        type: "Conference"
      },
      {
        scholarId: "2SUBIBkAAAAJ:IjCSPb-OGe4C",
        title: "Correlation of alerts using prerequisites and consequences for intrusion detection",
        authors: "S Mallissery, K Praveen, S Sathar",
        venue: "International Conference on Computational Intelligence and Information Technology, 2011",
        year: 2011,
        citations: 4,
        link: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=2SUBIBkAAAAJ&citation_for_view=2SUBIBkAAAAJ:IjCSPb-OGe4C",
        type: "Conference"
      },
      {
        scholarId: "2SUBIBkAAAAJ:UebtZRa9Y70C",
        title: "POSTER: Data leakage detection for health information system based on memory introspection",
        authors: "S Mallissery, MC Wu, CA Bau, GZ Huang, CY Yang, WC Lin, YS Wu",
        venue: "Proceedings of the 15th ACM Asia Conference on Computer and Communications Security, 2020",
        year: 2020,
        citations: 3,
        link: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=2SUBIBkAAAAJ&citation_for_view=2SUBIBkAAAAJ:UebtZRa9Y70C",
        type: "Conference"
      },
      {
        scholarId: "2SUBIBkAAAAJ:ufrVoPGSRksC",
        title: "Provable security analysis of complex or smart computer systems in the smart grid",
        authors: "S Madhusudhanan, S Mallissery",
        venue: "2017 IEEE International Conference on Smart Grid and Smart Cities (ICSGSC), 2017",
        year: 2017,
        citations: 3,
        link: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=2SUBIBkAAAAJ&citation_for_view=2SUBIBkAAAAJ:ufrVoPGSRksC",
        type: "Conference"
      },
      {
        scholarId: "2SUBIBkAAAAJ:W7OEmFMy1HYC",
        title: "Cloud-enabled vehicular congestion estimation: An ITS application",
        authors: "M Mahbadi, MMM Pai, S Mallissery, RM Pai",
        venue: "2016 IEEE Canadian Conference on Electrical and Computer Engineering (CCECE), 2016",
        year: 2016,
        citations: 3,
        link: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=2SUBIBkAAAAJ&citation_for_view=2SUBIBkAAAAJ:W7OEmFMy1HYC",
        type: "Conference"
      },
      {
        scholarId: "2SUBIBkAAAAJ:hqOjcs7Dif8C",
        title: "Mixed-mode information flow tracking with compile-time taint semantics extraction and offline replay",
        authors: "YH Hung, BJ Jheng, HW Li, WY Lai, S Mallissery, YS Wu",
        venue: "2021 IEEE Conference on Dependable and Secure Computing (DSC), 1-8, 2021",
        year: 2021,
        citations: 2,
        link: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=2SUBIBkAAAAJ&citation_for_view=2SUBIBkAAAAJ:hqOjcs7Dif8C",
        type: "Conference"
      },
      {
        scholarId: "2SUBIBkAAAAJ:Se3iqnhoufwC",
        title: "Identification of data propagation paths for efficient dynamic information flow tracking",
        authors: "S Mallissery, YS Wu, CH Hsieh, CA Bau",
        venue: "Proceedings of the 35th Annual ACM Symposium on Applied Computing, 92-99, 2020",
        year: 2020,
        citations: 2,
        link: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=2SUBIBkAAAAJ&citation_for_view=2SUBIBkAAAAJ:Se3iqnhoufwC",
        type: "Conference"
      },
      {
        scholarId: "2SUBIBkAAAAJ:_FxGoFyzp5QC",
        title: "Analysis of vehicle speed limit and air pollution load for identifying road conditions in India: An empirical study for smart city",
        authors: "S Mallissery, MMM Pai, RM Pai",
        venue: "2017 IEEE International Conference on Smart Grid and Smart Cities (ICSGSC), 2017",
        year: 2017,
        citations: 2,
        link: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=2SUBIBkAAAAJ&citation_for_view=2SUBIBkAAAAJ:_FxGoFyzp5QC",
        type: "Conference"
      },
      {
        scholarId: "2SUBIBkAAAAJ:eQOLeE2rZwMC",
        title: "Cloud-enabled smart health monitoring of vehicles: An ITS application",
        authors: "Y Mehta, MM Pai, S Mallissery, MR Pai",
        venue: "Advanced Science Letters 23 (4), 3709-3713, 2017",
        year: 2017,
        citations: 1,
        link: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=2SUBIBkAAAAJ&citation_for_view=2SUBIBkAAAAJ:eQOLeE2rZwMC",
        type: "Journal"
      },
      {
        scholarId: "2SUBIBkAAAAJ:YsMSGLbcyi4C",
        title: "Congestion free vehicular path planning system: a real-time cloud-enabled ITS application",
        authors: "MB Reddy, MM Pai, S Mallissery, RM Pai, M Mahbadi",
        venue: "Advanced Science Letters 23 (4), 3674-3678, 2017",
        year: 2017,
        citations: 1,
        link: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=2SUBIBkAAAAJ&citation_for_view=2SUBIBkAAAAJ:YsMSGLbcyi4C",
        type: "Journal"
      },
      {
        scholarId: "2SUBIBkAAAAJ:MXK_kJrjxJIC",
        title: "Enriching the Semantics of Information Flow Tracking with Source-Level Memory Allocation Event Logging",
        authors: "S Mallissery, YS Wu",
        venue: "2023 IEEE Conference on Dependable and Secure Computing (DSC), 1-10, 2023",
        year: 2023,
        citations: 0,
        link: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=2SUBIBkAAAAJ&citation_for_view=2SUBIBkAAAAJ:MXK_kJrjxJIC",
        type: "Conference"
      }
    ];
  }
  async getMetricsData() {
    const citationsByYear = {
      "2013": 3,
      "2014": 3,
      "2015": 11,
      "2016": 15,
      "2017": 12,
      "2018": 25,
      "2019": 15,
      "2020": 30,
      "2021": 14,
      "2022": 18,
      "2023": 53,
      "2024": 33,
      "2025": 5
    };
    return {
      totalCitations: 238,
      totalCitationsSince2020: 165,
      hIndex: 7,
      hIndexSince2020: 6,
      i10Index: 7,
      i10IndexSince2020: 5,
      citationsByYear
    };
  }
  async getLatestData() {
    const [pubs, metrics] = await Promise.all([
      db.select().from(publications).orderBy(publications.year, publications.citations),
      db.select().from(scholarMetrics).limit(1)
    ]);
    return {
      publications: pubs,
      metrics: metrics[0] || null
    };
  }
};
var scholarScraper = new ScholarScraper();

// server/routes.ts
async function registerRoutes(app2) {
  app2.get("/api/publications", async (req, res) => {
    try {
      const data = await scholarScraper.getLatestData();
      res.json(data);
    } catch (error) {
      console.error("Error fetching publications:", error);
      res.status(500).json({ error: "Failed to fetch publications" });
    }
  });
  app2.post("/api/publications/update", async (req, res) => {
    try {
      const result = await scholarScraper.scrapeAndStore();
      res.json(result);
    } catch (error) {
      console.error("Error updating publications:", error);
      res.status(500).json({ error: "Failed to update publications" });
    }
  });
  app2.get("/api/health", (req, res) => {
    res.json({ message: "Server is running!" });
  });
  const httpServer = createServer(app2);
  return httpServer;
}

// server/vite.ts
import express from "express";
import fs from "fs";
import path2 from "path";
import { createServer as createViteServer, createLogger } from "vite";

// vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import runtimeErrorOverlay from "@replit/vite-plugin-runtime-error-modal";
var vite_config_default = defineConfig({
  plugins: [
    react(),
    runtimeErrorOverlay(),
    ...process.env.NODE_ENV !== "production" && process.env.REPL_ID !== void 0 ? [
      await import("@replit/vite-plugin-cartographer").then(
        (m) => m.cartographer()
      )
    ] : []
  ],
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "client", "src"),
      "@shared": path.resolve(import.meta.dirname, "shared"),
      "@assets": path.resolve(import.meta.dirname, "attached_assets")
    }
  },
  root: path.resolve(import.meta.dirname, "client"),
  build: {
    outDir: path.resolve(import.meta.dirname, "dist/public"),
    emptyOutDir: true
  },
  server: {
    fs: {
      strict: true,
      deny: ["**/.*"]
    }
  }
});

// server/vite.ts
import { nanoid } from "nanoid";
var viteLogger = createLogger();
function log(message, source = "express") {
  const formattedTime = (/* @__PURE__ */ new Date()).toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
    hour12: true
  });
  console.log(`${formattedTime} [${source}] ${message}`);
}
async function setupVite(app2, server) {
  const serverOptions = {
    middlewareMode: true,
    hmr: { server },
    allowedHosts: true
  };
  const vite = await createViteServer({
    ...vite_config_default,
    configFile: false,
    customLogger: {
      ...viteLogger,
      error: (msg, options) => {
        viteLogger.error(msg, options);
        process.exit(1);
      }
    },
    server: serverOptions,
    appType: "custom"
  });
  app2.use(vite.middlewares);
  app2.use("*", async (req, res, next) => {
    const url = req.originalUrl;
    try {
      const clientTemplate = path2.resolve(
        import.meta.dirname,
        "..",
        "client",
        "index.html"
      );
      let template = await fs.promises.readFile(clientTemplate, "utf-8");
      template = template.replace(
        `src="/src/main.tsx"`,
        `src="/src/main.tsx?v=${nanoid()}"`
      );
      const page = await vite.transformIndexHtml(url, template);
      res.status(200).set({ "Content-Type": "text/html" }).end(page);
    } catch (e) {
      vite.ssrFixStacktrace(e);
      next(e);
    }
  });
}
function serveStatic(app2) {
  const distPath = path2.resolve(import.meta.dirname, "public");
  if (!fs.existsSync(distPath)) {
    throw new Error(
      `Could not find the build directory: ${distPath}, make sure to build the client first`
    );
  }
  app2.use(express.static(distPath));
  app2.use("*", (_req, res) => {
    res.sendFile(path2.resolve(distPath, "index.html"));
  });
}

// server/index.ts
var app = express2();
app.use(express2.json());
app.use(express2.urlencoded({ extended: false }));
app.use((req, res, next) => {
  const start = Date.now();
  const path4 = req.path;
  let capturedJsonResponse = void 0;
  const originalResJson = res.json;
  res.json = function(bodyJson, ...args) {
    capturedJsonResponse = bodyJson;
    return originalResJson.apply(res, [bodyJson, ...args]);
  };
  res.on("finish", () => {
    const duration = Date.now() - start;
    if (path4.startsWith("/api")) {
      let logLine = `${req.method} ${path4} ${res.statusCode} in ${duration}ms`;
      if (capturedJsonResponse) {
        logLine += ` :: ${JSON.stringify(capturedJsonResponse)}`;
      }
      if (logLine.length > 80) {
        logLine = logLine.slice(0, 79) + "\u2026";
      }
      log(logLine);
    }
  });
  next();
});
(async () => {
  const server = await registerRoutes(app);
  app.use("/attached_assets", express2.static(path3.join(import.meta.dirname, "../attached_assets")));
  app.use((err, _req, res, _next) => {
    const status = err.status || err.statusCode || 500;
    const message = err.message || "Internal Server Error";
    res.status(status).json({ message });
    throw err;
  });
  if (app.get("env") === "development") {
    await setupVite(app, server);
  } else {
    serveStatic(app);
  }
  const port = parseInt(process.env.PORT || "5000", 10);
  server.listen({
    port,
    host: "0.0.0.0",
    reusePort: true
  }, () => {
    log(`serving on port ${port}`);
  });
})();
