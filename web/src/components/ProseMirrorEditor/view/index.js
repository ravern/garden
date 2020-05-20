import fetch from "isomorphic-unfetch";
import {
  getVersion,
  receiveTransaction,
  sendableSteps,
} from "prosemirror-collab";
import { Step } from "prosemirror-transform";
import { EditorView } from "prosemirror-view";

import schema from "../schema";
import { buildState } from "../state";

export function buildView(rootElement, options) {
  const state = buildState(options);

  const view = new EditorView(rootElement, {
    state,
    dispatchTransaction: (transaction) => {
      const { state } = view.state.applyTransaction(transaction);

      view.updateState(state);

      const sendable = sendableSteps(state);
      if (sendable) {
        fetch(`http://localhost:3001/events`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            version: sendable.version,
            steps: sendable.steps.map((step) => step.toJSON()),
            clientID: sendable.clientID,
          }),
        });
      }
    },
  });

  const interval = setInterval(() => {
    fetch(`http://localhost:3001/events?version=${getVersion(view.state)}`)
      .then((res) => res.json())
      .then(({ steps, stepClientIDs }) => {
        if (!view.docView) {
          clearInterval(interval);
          return;
        }
        view.dispatch(
          receiveTransaction(
            view.state,
            steps.map((step) => Step.fromJSON(schema, step)),
            stepClientIDs
          )
        );
      });
  }, 500);

  return view;
}
