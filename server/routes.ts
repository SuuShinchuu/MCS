import type { Express } from "express";
import { createServer, type Server } from "http";

export function registerRoutes(app: Express): Server {
  app.post("/api/subscribe", async (req, res) => {
    const { email } = req.body;

    if (!email || !email.includes("@")) {
      return res.status(400).json({ message: "Email inválido" });
    }

    try {
      // Log the request for debugging
      console.log('Attempting to save email:', email);
      console.log('Using Airtable base:', process.env.AIRTABLE_BASE_ID);

      const payload = {
        records: [{
          fields: {
            Email: email  // Changed from "email" to "Email" to match Airtable's column name
          }
        }]
      };

      console.log('Sending payload to Airtable:', JSON.stringify(payload));

      const response = await fetch(`https://api.airtable.com/v0/${process.env.AIRTABLE_BASE_ID}/Emails`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${process.env.AIRTABLE_API_KEY}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error('Airtable API error:', errorData);
        throw new Error(errorData.error?.message || 'Error al guardar el email');
      }

      const data = await response.json();
      console.log('Airtable response:', data);

      return res.json({ message: "¡Gracias por suscribirte!" });
    } catch (error) {
      console.error('Airtable error:', error);
      return res.status(500).json({ message: "Error al procesar la solicitud" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}