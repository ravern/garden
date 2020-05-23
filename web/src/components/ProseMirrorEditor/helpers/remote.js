import { schema } from "@ravern/garden-models";
import fetch from "isomorphic-unfetch";
import { Step } from "prosemirror-transform";

function getURL(path) {
  return `${process.env.COLLAB_API_URL}${path}`;
}

export async function sendEvents(version, clientID, steps) {
  const body = {
    version: version,
    clientID: clientID,
    steps: steps.map((step) => step.toJSON()),
  };
  const res = await fetch(getURL("/events"), {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
  return res.json();
}

export async function getEvents(version) {
  const res = await fetch(getURL(`/events?version=${version}`));
  const { steps, stepClientIDs } = await res.json();

  return {
    steps: steps.map((step) => Step.fromJSON(schema, step)),
    stepClientIDs,
  };
}
