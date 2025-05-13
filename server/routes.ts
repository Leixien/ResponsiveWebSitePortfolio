import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSchema } from "@shared/schema";
import { ZodError } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      // Validate request body
      const contactData = insertContactSchema.parse(req.body);
      
      // Store contact message
      const message = await storage.createContactMessage(contactData);
      
      // Return success response
      res.status(201).json({
        message: "Messaggio inviato con successo",
        data: message
      });
    } catch (error) {
      if (error instanceof ZodError) {
        res.status(400).json({
          message: "Dati non validi",
          errors: error.errors
        });
      } else {
        console.error("Error saving contact message:", error);
        res.status(500).json({
          message: "Si è verificato un errore durante l'invio del messaggio"
        });
      }
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
