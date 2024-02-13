class Customer {
  constructor(id, firstName, lastName) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
  }
}

class Report {
  constructor(
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
    this.id = id;
    this.category = category;
    this.customerId = customerId;
    this.description = description;
    this.labels = labels;
    this.owner = owner;
    this.assignedTo = assignedTo;
    this.createdAt = createdAt;
    this.editedAt = editedAt;
    this.closedAt = closedAt;
    this.state = state;
    this.priority = priority;
    this.comments = comments;
    this.closeReason = closeReason;
    this.references = references;
  }
}

let id = 0;

const customers = [];
const reports = [];

export function getCustomers() {
  return customers;
}

export function createCustomer(id, firstName, lastName) {
  customers.push(new Customer(id, firstName, lastName));
}

export function readCustomer(inputId) {
  return customers.find((obj) => obj.id === inputId);
}

export function deleteCustomer(id) {
  const index = customers.findIndex((obj) => obj.id === id);

  if (index >= 0) {
    customers.splice(index, 1);
  }
}

export function idValidation(id) {
  const pattern = /ETUR-CN-\w+/;
  const isValid = pattern.test(id);

  if (isValid) {
    const index = customers.findIndex((object) => object.id === id);
    return index !== -1;
  }
}

function createId() {
  const randomNumber = "ETUR-CN-" + id++;
  return randomNumber;
}

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

const customerSchema = {
  schema: {
    body: {
      type: "object",
      properties: {
        id: { type: "string" },
        // description: { type: "string", minLength: 1 },
        firstName: { type: "string" },
        lastName: { type: "string" },
      },
      required: ["firstName", "lastName"],
    },
  },
};

const opts = {
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

export async function routes(fastify, options) {
  fastify.get("/customers", opts, async (request, reply) => {
    return getCustomers();
  });
  fastify.get("/customers/:id", async (request, reply) => {
    return readCustomer(request.params.id);
  });
  fastify.post("/customers", customerSchema, async (request, reply) => {
    const { firstName, lastName } = request.body;
    return createCustomer(createId(), firstName, lastName);
  });
  fastify.delete("/customers/:id", async (request, reply) => {
    return deleteCustomer(request.params.id);
  });
  fastify.post("/reports");
}
