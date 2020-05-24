import "dotenv/config";

import { ApolloServer } from "apollo-server-micro";
import express from "express";

import db from "~/api/db";
import web, { prepareWeb } from "~/api/handlers/web";
import getCollabServer from "~/api/helpers/getCollabServer";
import getUser from "~/api/helpers/getUser";
import resolvers from "~/api/resolvers";
import typeDefs from "~/api/typeDefs";

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: async (ctx) => {
    const currentUser = await getUser(ctx);
    const currentCollabServer = await getCollabServer(ctx);
    return { db, currentUser, currentCollabServer };
  },
});
const serverHandler = server.createHandler({ path: "/api" });

async function main() {
  // NextJS needs to do its compilation steps etc.
  await prepareWeb();

  const app = express();

  app.get("/api", serverHandler);
  app.post("/api", serverHandler);

  // Serve the frontend if nothing else matches.
  app.use(web);

  const port = process.env.PORT;
  app.listen(port, () => {
    console.log(`listening on port ${port}...`);
  });
}

main().catch(console.error);
