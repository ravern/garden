import bodyParser from "body-parser";
import cors from "cors";
import express from "express";
import { Step } from "prosemirror-transform";

import instance, { schema } from "./instance";

const app = express();

app.use(bodyParser.json());
app.use(cors());

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
  const { steps, stepClientIDs } = instance.stepsSince(req.query.version);
  res.status(200).json({
    steps: steps.map((step) => step.toJSON()),
    stepClientIDs: stepClientIDs,
  });
});

app.listen(3001, () => {
  console.log("listening on port 3001...");
});
