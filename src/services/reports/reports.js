import { Report } from "./report.class.js";

const reports = [];

/**
 * Gibt eine Liste von Reports zurück, optional gefiltert nach bestimmten Kriterien.
 * @param {Object} filters - Ein Objekt, das Filterkriterien enthält.
 * @returns {Report[]} - Eine Liste von gefilterten oder allen Reports.
 */
export function getReports(filters = {}) {
  // Wenn keine Filter angegeben sind, gib alle Reports zurück.
  if (Object.keys(filters).length === 0) {
    return reports;
  }

  // Filter die Reports basierend auf den übergebenen Kriterien.
  return reports.filter((report) => {
    // Prüfe für jedes Schlüssel-Wert-Paar im Filter-Objekt.
    for (let key in filters) {
      // Wenn der Report die Kriterien nicht erfüllt, schließe ihn aus.
      if (report[key] !== filters[key]) {
        return false;
      }
    }
    // Der Report erfüllt alle Kriterien.
    return true;
  });
}

/**
 * @create Report - Creates a new Report object
 */
export function createReport(
  id,
  category,
  customerId,
  description,
  labels,
  owner,
  assignedTo,
  createdAt,
  editedAt,
  closedAt,
  state,
  priority,
  comments,
  closeReason,
  references
) {
  reports.push(
    new Report(
      id,
      category,
      customerId,
      description,
      labels,
      owner,
      assignedTo,
      createdAt,
      editedAt,
      closedAt,
      state,
      priority,
      comments,
      closeReason,
      references
    )
  );
}

/**
 * @returns Report - Returns report by id
 */
export function readReport(inputId) {
  return reports.find((report) => report.id === inputId);
}

/**
 * @delete Report - Deletes report by id
 */
export function deleteReport(id) {
  const index = reports.findIndex((report) => report.id === id);

  if (index >= 0) {
    reports.splice(index, 1);
  }
}

export function updateReport(reportId, updatedData) {
  const index = reports.findIndex((report) => report.id === reportId);
  if (index !== -1) {
    reports[index] = { ...reports[index], ...updatedData };
    return reports[index];
  }
  return null;
}

export function assignReportToDeveloper(reportId, developerId) {
  const report = readReport(reportId);
  if (report) {
    report.assignedTo = developerId;
    return report;
  }
  return null;
}

export function addCommentToReport(reportId, author, message, createdAt, type) {
  const report = readReport(reportId);
  if (report) {
    const comment = { author, message, createdAt, type };
    report.comments.push(comment);
    return comment;
  }
  return null; // Report nicht gefunden
}

export function getCurrentDateTime() {
  const now = new Date();

  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, '0'); // Monate beginnen bei 0
  const day = String(now.getDate()).padStart(2, '0');

  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');

  return `${year}-${month}-${day}:${hours}:${minutes}:${seconds}`;
}

export function editReport(reportId, updates) {
  const report = readReport(reportId);
  if (report) {
    Object.keys(updates).forEach((key) => {
      report[key] = updates[key];
    });
    return report;
  }
  return null; // Report nicht gefunden
}
