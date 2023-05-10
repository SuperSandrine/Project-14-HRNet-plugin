"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
require("./spinnerModal.styles.css");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/**
 * Component displays a spinner in a modal window.
 * @returns {JSX.Element} The SpinnerModal component.
 */
var SpinnerModal = function SpinnerModal() {
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "tUv39-modal-spinner-container"
  }, /*#__PURE__*/_react.default.createElement("span", {
    className: "tUv39-modal-spinner"
  }));
};
var _default = SpinnerModal;
exports.default = _default;