import "dotenv/config";

import { schema } from "@ravern/garden-models";
import { wrap } from "async-middleware";
import bodyParser from "body-parser";
import cors from "cors";
import express from "express";
import { Step } from "prosemirror-transform";

import getPage from "./handlers/getPage";
import getPageEvents from "./handlers/getPageEvents";
import postPageEvents from "./handlers/postPageEvents";
import instance from "./instance";

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.get("/pages/:pageID", wrap(getPage));
app.get("/pages/:pageID/events", wrap(getPageEvents));
app.post("/pages/:pageID/events", wrap(postPageEvents));

app.get("/", (req, res) => {
  res.status(200).json({
    version: instance.version,
    doc: instance.doc.toJSON(),
  });
});

app.post("/events", (req, res) => {
  const { version, steps, clientID } = req.body;
  instance.receiveSteps(
    version,
    steps.map((step) => Step.fromJSON(schema, step)),
    clientID
  );

  res.status(200).json({ ok: true });
});

app.get("/events", (req, res) => {
  const version = parseInt(req.query.version);
  if (version === instance.version) {
    instance.onNewSteps.push(() => {
      const { steps, stepClientIDs } = instance.stepsSince(version);
      res.status(200).json({
        steps: steps.map((step) => step.toJSON()),
        stepClientIDs: stepClientIDs,
      });
    });
    return;
  }
  const { steps, stepClientIDs } = instance.stepsSince(version);
  res.status(200).json({
    steps: steps.map((step) => step.toJSON()),
    stepClientIDs: stepClientIDs,
  });
});

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`listening on port ${port}...`);
});
