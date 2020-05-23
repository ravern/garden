import Instance from "./models/instance";

// The store is in charge of handling all of the live instances and
// periodically persisting them by updating them on the backend.
class Store {
  constructor() {
    this.instances = {};
  }

  createInstance(page) {
    const { id, version, content } = page;
    const instance = new Instance(version, content);
    this.instances[id] = instance;
  }

  getInstance(pageID) {
    return this.instances[pageID];
  }
}

export default new Store();
