/**
 * @provides Single customer schema
 */
export const customerSchema = {
  schema: {
    body: {
      type: "object",
      properties: {
        id: { type: "string" },
        firstName: { type: "string" },
        lastName: { type: "string" },
      },
      required: ["firstName", "lastName"],
    },
  },
};

/**
 * @provides Multiple Customer schema
 */
export const customersSchema = {
  schema: {
    response: {
      200: {
        type: "array",
        items: {
          type: "object",
          properties: {
            id: { type: "string" },
            firstName: { type: "string" },
            lastName: { type: "string" },
          },
        },
      },
    },
  },
};
