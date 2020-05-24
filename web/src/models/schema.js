import { Schema } from "prosemirror-model";
import { marks as basicMarks } from "prosemirror-schema-basic";

const doc = {
  content: "title block+",
};

const title = {
  defining: true,
  content: "text*",
  toDOM() {
    return ["h1", 0];
  },
};

const heading = {
  defining: true,
  content: "inline*",
  group: "block",
  attrs: {
    level: { default: 1 },
  },
  parseDOM: [
    { tag: "h2", attrs: { level: 1 } },
    { tag: "h3", attrs: { level: 2 } },
    { tag: "h4", attrs: { level: 3 } },
    { tag: "h5", attrs: { level: 4 } },
    { tag: "h6", attrs: { level: 5 } },
  ],
  toDOM(node) {
    return ["h" + (node.attrs.level + 1), 0];
  },
};

const paragraph = {
  content: "inline*",
  group: "block",
  parseDOM: [{ tag: "p" }],
  toDOM() {
    return ["p", 0];
  },
};

const text = {
  group: "inline",
};

const nodes = {
  doc,
  title,
  paragraph,
  heading,
  text,
};

const marks = {
  strong: basicMarks.strong,
  em: basicMarks.em,
  code: basicMarks.code,
  link: basicMarks.link,
};

const schema = new Schema({
  nodes,
  marks,
});

export default schema;
