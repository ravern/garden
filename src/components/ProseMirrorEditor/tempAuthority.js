import schema from "./schema";

class Authority {
  constructor(doc) {
    this.doc = doc;
    this.steps = [];
    this.stepClientIDs = [];
    this.onNewSteps = [];
  }

  receiveSteps(version, steps, clientID) {
    if (version != this.steps.length) return;

    steps.forEach((step) => {
      this.doc = step.apply(this.doc).doc;
      this.steps.push(step);
      this.stepClientIDs.push(clientID);
    });

    this.onNewSteps.forEach((f) => {
      f();
    });

    console.log(this.steps);
    console.log(this.stepClientIDs);
  }

  addStepsListener(callback) {
    this.onNewSteps.push(callback);
  }

  stepsSince(version) {
    return {
      steps: this.steps.slice(version),
      clientIDs: this.stepClientIDs.slice(version),
    };
  }
}

export default new Authority(
  schema.node("doc", null, [
    schema.node("heading", null, [schema.text("One.")]),
    schema.node("paragraph", null, [schema.text("Two!")]),
  ])
);
