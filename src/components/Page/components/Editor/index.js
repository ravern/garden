import isHotkey from "is-hotkey";
import PropTypes from "prop-types";
import { useCallback, useMemo } from "react";
import { createEditor } from "slate";
import { withHistory } from "slate-history";
import { Editable, Slate, withReact } from "slate-react";

import Element from "./components/Element";
import Leaf from "./components/Leaf";
import { KEYBOARD_SHORTCUTS } from "./constants";
import { toggleMark } from "./helpers/editor";
import withShortcuts from "./plugins/withShortcuts";

function Editor(props) {
  const { value, onChange } = props;

  const editor = useMemo(
    () => withHistory(withShortcuts(withReact(createEditor()))),
    []
  );

  const renderLeaf = useCallback((props) => <Leaf {...props} />, []);
  const renderElement = useCallback((props) => <Element {...props} />, []);

  const handleKeyDown = useCallback((e) => {
    for (const shortcut in KEYBOARD_SHORTCUTS) {
      if (isHotkey(shortcut, e)) {
        e.preventDefault();
        const mark = KEYBOARD_SHORTCUTS[shortcut];
        toggleMark(editor, mark);
        break;
      }
    }
  }, []);

  return (
    <Slate editor={editor} value={value} onChange={onChange}>
      <Editable
        autoFocus
        placeholder="Type your note here..."
        renderLeaf={renderLeaf}
        renderElement={renderElement}
        onKeyDown={handleKeyDown}
      />
    </Slate>
  );
}

Editor.propTypes = {
  value: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Editor;
