import "dotenv/config";
import { env } from "./lib/env";
import { app } from "./app";
// import cors from "cors";
import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";

const port = env.PORT;

const graphQLServer = new ApolloServer({
  typeDefs: `
    type Query {
      hello: String
      }`,
  resolvers: {
    Query: {
      hello: () => "Hello world!",
    },
  },
});

const server = async () => {
  await graphQLServer.start();
  app.use("/graphql", expressMiddleware(graphQLServer));
  app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
  });
};

server();
