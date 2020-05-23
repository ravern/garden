import { pageUpdate } from "./api";
import Instance from "./models/instance";

const INSTANCE_TICK_INTERVAL = 5 * 1000;
const INSTANCE_STALE_TIME = 5 * 60 * 1000;

// The store is in charge of handling all of the live instances and
// periodically persisting them by updating them on the backend.
class Store {
  constructor() {
    this.instances = {};
    this.instanceInfos = {};
  }

  createInstance(pageID, version, doc) {
    const instance = new Instance(version, doc);

    this.instances[pageID] = instance;
    this.instanceInfos[pageID] = {
      lastVersion: instance.getVersion(),
    };

    const interval = setInterval(
      () => this.tickInstance(pageID),
      INSTANCE_TICK_INTERVAL
    );
    this.instanceInfos[pageID].interval = interval;
  }

  getInstance(pageID) {
    return this.instances[pageID];
  }

  async tickInstance(pageID) {
    const instance = this.instances[pageID];
    const instanceInfo = this.instanceInfos[pageID];

    // If there have been changes made, update the page in the backend.
    const version = instance.getVersion();
    if (version > instanceInfo.lastVersion) {
      await pageUpdate(pageID, version, instance.doc.toJSON());
      instanceInfo.lastVersion = version;
    }

    // If the instance is stale, remove it.
    if (new Date().getTime() - instance.lastUpdated > INSTANCE_STALE_TIME) {
      clearInterval(instanceInfo.interval);
      delete this.instances[pageID];
      delete this.instanceInfos[pageID];
    }
  }
}

export default new Store();
