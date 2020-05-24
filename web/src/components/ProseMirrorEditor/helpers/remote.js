import { schema } from "@ravern/garden-models";
import fetch from "isomorphic-unfetch";
import { Step } from "prosemirror-transform";

export async function sendEvents(version, clientID, steps) {
  const body = {
    version: version,
    clientID: clientID,
    steps: steps.map((step) => step.toJSON()),
  };
  const res = await fetch(
    "/api/collab/bdaa940f-0ac7-45c7-acb7-d40e580bde21/events",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    }
  );
  return res.json();
}

export async function getEvents(version) {
  const res = await fetch(
    `/api/collab/bdaa940f-0ac7-45c7-acb7-d40e580bde21/events?version=${version}`
  );
  const { steps, stepClientIDs } = await res.json();

  return {
    steps: steps.map((step) => Step.fromJSON(schema, step)),
    stepClientIDs,
  };
}
