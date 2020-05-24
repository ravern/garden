import { v4 as uuid } from "uuid";

export default class Instance {
  constructor(version, doc) {
    this.oldestVersion = version;
    this.doc = doc;
    this.steps = [];
    this.stepClientIDs = [];
    this.eventsListeners = [];
    this.lastUpdated = new Date().getTime();
  }

  getVersion() {
    return this.oldestVersion + this.steps.length;
  }

  addEventsListener(callback) {
    const id = uuid();
    this.eventsListeners.push({ id, callback });
    return id;
  }

  removeEventsListener(id) {
    this.eventsListeners = this.eventsListeners.filter(
      ({ otherID }) => otherID !== id
    );
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
    const valid = version === this.steps.length + this.oldestVersion;

    // Only apply the steps if the client had a valid version of the document.
    if (valid) {
      for (const step of steps) {
        this.doc = step.apply(this.doc).doc;
        this.steps.push(step);
        this.stepClientIDs.push(clientID);
      }
      this.lastUpdated = new Date().getTime();
    }

    // Trigger the events listeners anyway, to force them to refresh.
    for (const { callback } of this.eventsListeners) {
      callback();
    }
    this.eventsListeners = [];

    return valid;
  }
}
