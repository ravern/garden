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
    },
  });

  setInterval(async () => {
    const sendable = sendableSteps(view.state);
    if (sendable) {
      try {
        await sendEvents(sendable.version, sendable.clientID, sendable.steps);
      } catch (error) {
        console.warn(error);
      }
    }
  }, 500);

  const receiveEvents = async () => {
    try {
      const { steps, stepClientIDs } = await getEvents(getVersion(view.state));
      if (view.docView) {
        view.dispatch(receiveTransaction(view.state, steps, stepClientIDs));
        setTimeout(() => {
          receiveEvents();
        }, 500);
      }
    } catch (error) {
      console.warn(error);
    }
  };

  receiveEvents();

  return view;
}
