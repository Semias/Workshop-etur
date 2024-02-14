import { Report } from "./report.class.js";

const reports = [];

/**
 * @returns Report[] - Returns an array of report objects
 */
export function getReports() {
  return reports;
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
