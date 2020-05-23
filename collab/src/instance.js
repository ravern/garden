import { schema } from "@ravern/garden-models";

class Instance {
  constructor(doc) {
    this.doc = doc;
    this.steps = [];
    this.stepClientIDs = [];
    this.onNewSteps = [];
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

    this.onNewSteps.forEach((callback) => {
      callback();
    });
    this.onNewSteps = [];
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
