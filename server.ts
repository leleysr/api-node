import fastify from "fastify";
import crypto from "node:crypto";

const server = fastify({
  logger: {
    transport: {
      target: "pino-pretty",
      options: {
        translateTime: "HH:MM:ss Z",
        ignore: "pid,hostname",
      },
    },
  },
});

server.get("/", function (request, reply) {
  reply.send({ hello: "world" });
});

server.listen({ port: 3333 }).then(() => {
  console.log("Server is running at: http://localhost:3333");
  console.log(">>>OLA", crypto.randomUUID());
});
