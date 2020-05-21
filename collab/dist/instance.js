"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.schema = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _prosemirrorModel = require("prosemirror-model");

var _prosemirrorSchemaBasic = require("prosemirror-schema-basic");

var nodes = {
  doc: _prosemirrorSchemaBasic.nodes.doc,
  paragraph: _prosemirrorSchemaBasic.nodes.paragraph,
  heading: _prosemirrorSchemaBasic.nodes.heading,
  text: _prosemirrorSchemaBasic.nodes.text
};
var marks = {
  strong: _prosemirrorSchemaBasic.marks.strong,
  em: _prosemirrorSchemaBasic.marks.em,
  code: _prosemirrorSchemaBasic.marks.code,
  link: _prosemirrorSchemaBasic.marks.link
};
var schema = new _prosemirrorModel.Schema({
  nodes: nodes,
  marks: marks
});
exports.schema = schema;

var Instance = /*#__PURE__*/function () {
  function Instance(doc) {
    (0, _classCallCheck2["default"])(this, Instance);
    this.doc = doc;
    this.steps = [];
    this.stepClientIDs = [];
    this.onNewSteps = [];
  }

  (0, _createClass2["default"])(Instance, [{
    key: "receiveSteps",
    value: function receiveSteps(version, steps, clientID) {
      var _this = this;

      if (version != this.steps.length) return;
      steps.forEach(function (step) {
        _this.doc = step.apply(_this.doc).doc;

        _this.steps.push(step);

        _this.stepClientIDs.push(clientID);
      });
      this.onNewSteps.forEach(function (callback) {
        callback();
      });
      this.onNewSteps = [];
    }
  }, {
    key: "stepsSince",
    value: function stepsSince(version) {
      return {
        steps: this.steps.slice(version),
        stepClientIDs: this.stepClientIDs.slice(version)
      };
    }
  }, {
    key: "version",
    get: function get() {
      return this.steps.length;
    }
  }]);
  return Instance;
}();

var _default = new Instance(schema.node("doc", null, [schema.node("heading", null, [schema.text("One.")]), schema.node("paragraph", null, [schema.text("Two!")])]));

exports["default"] = _default;