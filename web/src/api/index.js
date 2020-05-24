import "dotenv/config";

import { wrap } from "async-middleware";
import bodyParser from "body-parser";
import express from "express";

import getPage from "~/api/handlers/collab/getPage";
import getPageEvents from "~/api/handlers/collab/getPageEvents";
import postPageEvents from "~/api/handlers/collab/postPageEvents";
import graphql from "~/api/handlers/graphql";
import web, { prepareWeb } from "~/api/handlers/web";

async function main() {
  // NextJS needs to do its compilation steps etc.
  await prepareWeb();

  const app = express();

  app.use(bodyParser.json());

  // Load up the main GraphQL API.
  app.get("/api/graphql", graphql);
  app.post("/api/graphql", graphql);

  // Load up the routes for collaborative editing.
  app.get("/api/collab/:pageID", wrap(getPage));
  app.get("/api/collab/:pageID/events", wrap(getPageEvents));
  app.post("/api/collab/:pageID/events", wrap(postPageEvents));

  // Serve the frontend if nothing else matches.
  app.use(web);

  const port = process.env.PORT;
  app.listen(port, () => {
    console.log(`listening on port ${port}...`);
  });
}

main().catch(console.error);
