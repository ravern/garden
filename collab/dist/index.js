"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _cors = _interopRequireDefault(require("cors"));

var _express = _interopRequireDefault(require("express"));

var _prosemirrorTransform = require("prosemirror-transform");

var _instance = _interopRequireWildcard(require("./instance"));

var app = (0, _express["default"])();
app.use(_bodyParser["default"].json());
app.use((0, _cors["default"])());
app.get("/", function (req, res) {
  res.status(200).json({
    version: _instance["default"].version,
    doc: _instance["default"].doc.toJSON()
  });
});
app.post("/events", function (req, res) {
  var _req$body = req.body,
      version = _req$body.version,
      steps = _req$body.steps,
      clientID = _req$body.clientID;

  _instance["default"].receiveSteps(version, steps.map(function (step) {
    return _prosemirrorTransform.Step.fromJSON(_instance.schema, step);
  }), clientID);

  res.status(200).json({
    ok: true
  });
});
app.get("/events", function (req, res) {
  var version = parseInt(req.query.version);

  if (version === _instance["default"].version) {
    _instance["default"].onNewSteps.push(function () {
      var _instance$stepsSince = _instance["default"].stepsSince(version),
          steps = _instance$stepsSince.steps,
          stepClientIDs = _instance$stepsSince.stepClientIDs;

      res.status(200).json({
        steps: steps.map(function (step) {
          return step.toJSON();
        }),
        stepClientIDs: stepClientIDs
      });
    });

    return;
  }

  var _instance$stepsSince2 = _instance["default"].stepsSince(version),
      steps = _instance$stepsSince2.steps,
      stepClientIDs = _instance$stepsSince2.stepClientIDs;

  res.status(200).json({
    steps: steps.map(function (step) {
      return step.toJSON();
    }),
    stepClientIDs: stepClientIDs
  });
});
var port = process.env.PORT || 3001;
app.listen(port, function () {
  console.log("listening on port ".concat(port, "..."));
});