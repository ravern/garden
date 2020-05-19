import { EditorView } from "prosemirror-view";

import { buildState } from "../state";

export function buildView(rootElement, value, onChange) {
  const state = buildState(value);

  const view = new EditorView(rootElement, {
    state,
    dispatchTransaction: buildDispatchTransaction(() => view, onChange),
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

    if (transactions.some((tr) => tr.docChanged)) {
      onChange(state.doc);
    }
  };
}
