import {
  createReport,
  getReports,
  readReport,
  deleteReport,
} from "./reports.js";
import { reportSchema } from "./report.schema.js";
// Angenommen, es gibt Funktionen für die Bearbeitung und das Schließen von Reports,
// das Hinzufügen von Kommentaren und das Zuweisen von Reports an Entwickler.

export const routes = async (fastify, options) => {
  // Einen neuen Report anlegen
  fastify.post("/reports", reportSchema, async (request, reply) => {
    const { body } = request;
    return createReport(...Object.values(body));
  });

  // Alle Reports eines Kunden einsehen
  fastify.get("/reports/customer/:customerId", async (request, reply) => {
    const { customerId } = request.params;
    return getReports().filter((report) => report.customerId === customerId);
  });

  // Einen Report nach ID einsehen
  fastify.get("/reports/:reportId", async (request, reply) => {
    const { reportId } = request.params;
    return readReport(reportId);
  });

  // Einen Report als "fertig" markieren
  fastify.patch("/reports/:reportId/close", async (request, reply) => {
    const { reportId } = request.params;
    const { closeReason } = request.body;
    // Logik zum Schließen des Reports
  });

  // Einen Report bearbeiten (für Produkt Manager)
  fastify.patch("/reports/:reportId", async (request, reply) => {
    const { reportId } = request.params;
    const updateData = request.body;
    // Logik zum Bearbeiten des Reports
  });

  // Einen Kommentar zu einem Report hinzufügen
  fastify.post("/reports/:reportId/comments", async (request, reply) => {
    const { reportId } = request.params;
    const { author, message } = request.body;
    // Logik zum Hinzufügen des Kommentars
  });

  fastify.get("/reports", async (request, reply) => {
    // Extrahiere Query-Parameter aus der Request
    const filters = request.query;

    try {
      // Verwende die getReports Funktion mit den extrahierten Filtern
      const filteredReports = getReports(filters);

      // Antwort mit den gefilterten Reports
      return reply.code(200).send(filteredReports);
    } catch (error) {
      // Im Fehlerfall sende eine entsprechende Fehlermeldung
      return reply
        .code(500)
        .send({
          error: "Ein Fehler ist beim Abrufen der Reports aufgetreten.",
        });
    }
  });

  // Einen Report löschen
  fastify.delete("/reports/:reportId", async (request, reply) => {
    const { reportId } = request.params;
    deleteReport(reportId);
    return { message: "Report deleted successfully" };
  });
};
