import type { Express } from "express";
import { createServer, type Server } from "http";

export function registerRoutes(app: Express): Server {
  app.post("/api/subscribe", async (req, res) => {
    const { email } = req.body;
    
    if (!email || !email.includes("@")) {
      return res.status(400).json({ message: "Email inválido" });
    }

    try {
      const response = await fetch(`https://api.airtable.com/v0/${process.env.AIRTABLE_BASE_ID}/Subscribers`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${process.env.AIRTABLE_API_KEY}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          records: [{
            fields: {
              Email: email,
              Date: new Date().toISOString()
            }
          }]
        })
      });

      if (!response.ok) {
        throw new Error('Error al guardar el email');
      }

      return res.json({ message: "¡Gracias por suscribirte!" });
    } catch (error) {
      console.error('Airtable error:', error);
      return res.status(500).json({ message: "Error al procesar la solicitud" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
