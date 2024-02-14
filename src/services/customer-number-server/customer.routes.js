import {
  createCustomer,
  deleteCustomer,
  getCustomers,
  readCustomer,
  createId,
  //   idValidation,
} from "./customer.js";
import { customerSchema, customersSchema } from "./customer.schema.js";

/**
 * @routes Routes - generate routes for fastify
 */
export async function routes(fastify, options) {
  fastify.get("/customers", customersSchema, async (request, reply) => {
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
}
