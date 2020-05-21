import {
  getVersion,
  receiveTransaction,
  sendableSteps,
} from "prosemirror-collab";
import { EditorView } from "prosemirror-view";

import { getEvents, sendEvents } from "../helpers/remote";
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
        sendEvents(sendable.version, sendable.clientID, sendable.steps);
      }
    },
  });

  const interval = setInterval(async () => {
    const { steps, stepClientIDs } = await getEvents(getVersion(view.state));
    if (!view.docView) {
      clearInterval(interval);
      return;
    }
    view.dispatch(receiveTransaction(view.state, steps, stepClientIDs));
  }, 1000);

  return view;
}
