import "dotenv/config";

import { schema } from "@ravern/garden-models";
import { wrap } from "async-middleware";
import bodyParser from "body-parser";
import cors from "cors";
import express from "express";
import { Step } from "prosemirror-transform";

import { pageCreate } from "./api";
import instance from "./instance";

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.get(
  "/test",
  wrap(async (req, res) => {
    try {
      const data = await pageCreate(
        "2783fd68-7e23-45d0-bc9e-398db0474a02",
        "Testing 1 2 3"
      );
      res.json(data);
    } catch (error) {
      console.log(JSON.stringify(error, null, 4));
      res.json({ ok: false });
    }
  })
);

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
