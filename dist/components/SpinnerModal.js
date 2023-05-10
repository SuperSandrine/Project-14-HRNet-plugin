"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
require("./spinnerModal.styles.css");
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/**
 * Component displays a spinner in a modal window.
 * @returns {JSX.Element} The SpinnerModal component.
 */var SpinnerModal = function SpinnerModal() {
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    className: "tUv39-modal-spinner-container",
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
      className: "tUv39-modal-spinner"
    })
  });
};
var _default = SpinnerModal;
exports.default = _default;