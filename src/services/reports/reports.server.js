import { routes } from "./reports.routes.js";
import Fastify from "fastify";
import cors from "@fastify/cors";

const fastify = Fastify({
  logger: true,
});

fastify.register(cors, {
  origin: "*",
});
fastify.register(routes);

try {
  await fastify.listen({ port: 80 });
} catch (err) {
  fastify.log.error(err);
  process.exit(1);
}
