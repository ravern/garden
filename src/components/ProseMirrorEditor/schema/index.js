import { Schema } from "prosemirror-model";
import {
  marks as basicMarks,
  nodes as basicNodes,
} from "prosemirror-schema-basic";

const nodes = {
  doc: basicNodes.doc,
  paragraph: basicNodes.paragraph,
  heading: basicNodes.heading,
  text: basicNodes.text,
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
