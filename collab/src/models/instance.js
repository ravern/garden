import { schema } from "@ravern/garden-models";

export default class Instance {
  constructor(version, content) {
    this.oldestVersion = version;
    this.doc = schema.nodeFromJSON(content);
    this.steps = [];
    this.stepClientIDs = [];
    this.eventsListeners = [];
  }

  addEventsListener(callback) {
    this.eventsListeners.push({ callback });
  }

  getEvents(sinceVersion) {
    const index = sinceVersion - this.oldestVersion;
    if (index < 0) {
      return null;
    } else {
      return {
        steps: this.steps.slice(index),
        stepClientIDs: this.stepClientIDs.slice(index),
      };
    }
  }

  postEvents(version, steps, clientID) {
    if (version !== this.steps.length + this.oldestVersion) {
      return false;
    }

    for (const step of steps) {
      this.doc = step.apply(this.doc).doc;
      this.steps.push(step);
      this.stepClientIDs.push(clientID);
    }

    for (const { callback } of this.eventsListeners) {
      callback();
    }
    this.eventsListeners = [];

    return true;
  }
}
