import {
  createReport,
  getReports,
  readReport,
  deleteReport,
  lockReport,
} from "./reports.js";
// Angenommen, es gibt Funktionen für die Bearbeitung und das Schließen von Reports,
// das Hinzufügen von Kommentaren und das Zuweisen von Reports an Entwickler.

export const routes = async (fastify, options) => {
  // Einen neuen Report anlegen
  fastify.post("/reports", async (request, reply) => {
    const { body } = request;
    await verifyCustomerId(request, reply);
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

  // Reports filtern und suchen (für Produkt Manager)
  fastify.get("/reports", async (request, reply) => {
    const { query } = request;
    // Logik zum Filtern basierend auf der Query
  });

  // Einen Report löschen
  fastify.delete("/reports/:reportId", async (request, reply) => {
    const { reportId } = request.params;
    deleteReport(reportId);
    return { message: "Report deleted successfully" };
  });
};
