import {
  getVersion,
  receiveTransaction,
  sendableSteps,
} from "prosemirror-collab";
import { EditorView } from "prosemirror-view";

import { buildState } from "../state";
import tempAuthority from "../tempAuthority";

export function buildView(rootElement, value, onChange) {
  const state = buildState(value);

  const view = new EditorView(rootElement, {
    state,
    dispatchTransaction: buildDispatchTransaction(() => view, onChange),
  });

  tempAuthority.addStepsListener(() => {
    let newData = tempAuthority.stepsSince(getVersion(view.state));
    view.dispatch(
      receiveTransaction(view.state, newData.steps, newData.clientIDs)
    );
  });

  return view;
}

// We intentionally use `getView` here instead of just `view`, since `view`
// will be `undefined` at first until it is created. #javascriptsemantics
function buildDispatchTransaction(getView, onChange) {
  return (transaction) => {
    const { state, transactions } = getView().state.applyTransaction(
      transaction
    );

    getView().updateState(state);

    const sendable = sendableSteps(state);
    if (sendable) {
      console.log("sending steps from", sendable.clientID);
      tempAuthority.receiveSteps(
        sendable.version,
        sendable.steps,
        sendable.clientID
      );
    }

    if (transactions.some((tr) => tr.docChanged)) {
      onChange(state.doc);
    }
  };
}
