import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { scholarScraper } from "./services/scholarScraper";

export async function registerRoutes(app: Express): Promise<Server> {
  // Publications endpoints
  app.get("/api/publications", async (req, res) => {
    try {
      const data = await scholarScraper.getLatestData();
      res.json(data);
    } catch (error) {
      console.error("Error fetching publications:", error);
      res.status(500).json({ error: "Failed to fetch publications" });
    }
  });

  app.post("/api/publications/update", async (req, res) => {
    try {
      const result = await scholarScraper.scrapeAndStore();
      res.json(result);
    } catch (error) {
      console.error("Error updating publications:", error);
      res.status(500).json({ error: "Failed to update publications" });
    }
  });

  // Health check endpoint
  app.get("/api/health", (req, res) => {
    res.json({ message: "Server is running!" });
  });

  const httpServer = createServer(app);

  return httpServer;
}
