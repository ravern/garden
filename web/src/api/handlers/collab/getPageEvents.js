import store from "~/api/store";

function sendResponse(res, events) {
  const { steps, stepClientIDs } = events;
  res.json({
    steps: steps.map((step) => step.toJSON()),
    stepClientIDs,
  });
}

export default async function getPageEvents(req, res) {
  const { pageID } = req.params;
  const { version: versionString } = req.query;

  let version;
  try {
    version = parseInt(versionString);
  } catch {
    res.status(400).json({ message: "Invalid version provided." });
    return;
  }

  const instance = store.getInstance(pageID);
  if (!instance) {
    res.status(404).json({ message: "Could not find page." });
    return;
  }

  const events = instance.getEvents(version);
  if (!events) {
    res.status(400).json({ message: "Version is too old." });
    return;
  }

  // If there are no steps to return, we add a listener to wait for new steps
  // before sending the response. Otherwise, send the response immediately.
  if (events.steps.length === 0) {
    const id = instance.addEventsListener(() => {
      const events = instance.getEvents(version);
      sendResponse(res, events);
    });
    req.connection.on("close", () => {
      console.log("connection closed!");
      instance.removeEventsListener(id);
      console.log(instance.eventsListeners);
    });
  } else {
    sendResponse(res, events);
  }
}
