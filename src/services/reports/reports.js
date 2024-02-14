import { Report } from "./report.class.js";

const reports = [];
const lockedReports = [];
let reportCountId = 0;

export function lockReport(report) {
  lockedReports.push(report);
}

// function deleteEditedReport(EditedReportId) {
//   const lockedReportsIndex = lockedReports.findIndex(
//     (lockedReport) => lockedReport.id === EditedReportId
//   );

//   if (lockedReportsIndex >= 0) {
//     lockedReports.splice(index, 1);
//   }
// }

// export function isReportLocked(editedReport) {
//   lockedReports.includes((report) => {
//     if (lockReport.id === report.id) {
//       reports.push(report);
//     }
//   });
// }

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
