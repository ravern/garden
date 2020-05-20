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

export const schema = new Schema({
  nodes,
  marks,
});

class Instance {
  constructor(doc) {
    this.doc = doc;
    this.steps = [];
    this.stepClientIDs = [];
  }

  get version() {
    return this.steps.length;
  }

  receiveSteps(version, steps, clientID) {
    if (version != this.steps.length) return;

    steps.forEach((step) => {
      this.doc = step.apply(this.doc).doc;
      this.steps.push(step);
      this.stepClientIDs.push(clientID);
    });
  }

  stepsSince(version) {
    return {
      steps: this.steps.slice(version),
      stepClientIDs: this.stepClientIDs.slice(version),
    };
  }
}

export default new Instance(
  schema.node("doc", null, [
    schema.node("heading", null, [schema.text("One.")]),
    schema.node("paragraph", null, [schema.text("Two!")]),
  ])
);
