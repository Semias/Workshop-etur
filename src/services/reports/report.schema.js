// Comment Schema
export const commentSchema = {
  type: "object",
  properties: {
    author: { type: "string" },
    message: { type: "string" },
    createdAt: { type: "string", format: "date-time" },
    type: { type: "string", enum: ["developer", "user", "admin"] }, // Beispiel für Typen von Kommentaren
  },
  required: ["author", "message", "createdAt", "type"],
};

// Comments Schema
export const commentsSchema = {
  type: "array",
  items: commentSchema,
};

// References Schema
export const referenceSchema = {
  type: "object",
  properties: {
    type: { type: "string" },
    url: { type: "string" },
    issueNumber: { type: "number" },
  },
  required: ["type", "url", "issueNumber"],
};

// Report Schema
export const reportSchema = {
  schema: {
    body: {
      type: "object",
      properties: {
        id: { type: "string" },
        category: { type: "string" },
        customerId: { type: "string" },
        description: { type: "string" },
        labels: { type: "array", items: { type: "string" } },
        owner: { type: "string" },
        assignedTo: { type: "string" },
        createdAt: { type: "string", format: "date-time" },
        editedAt: { type: "string", format: "date-time" },
        closedAt: { type: "string", format: "date-time" },
        state: { type: "string" },
        priority: { type: "number" },
        comments: commentsSchema,
        closeReason: { type: "string" },
        references: {
          type: "array",
          items: referenceSchema,
        },
      },
      required: ["id"],
    },
  },
};
