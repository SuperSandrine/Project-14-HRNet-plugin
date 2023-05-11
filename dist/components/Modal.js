"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
require("./modal.styles.css");
var _closeIcon = _interopRequireDefault(require("./../closeIcon.svg"));
var _SpinnerModal = _interopRequireDefault(require("./SpinnerModal"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; } /**
                                                                       * Creation of a modal component with parameters to personalise some functions
                                                                       * @param {Object} props - component props
                                                                       * @param {(String|Number|Element)} props.children - add a descriptive paragraph in the modal.
                                                                       * @param {Function} props.onClose- function that permit the modal closure by switching false the showModal state.
                                                                       * @param {Boolean} props.showModal - Boolean that determines if the modal should be shown or not thanks to parent state
                                                                       * @param {String} props.title - Add title to modal
                                                                       * @param {Boolean} props.backDropClickAndClose - Boolean that determines if the modal should be closed when the backdrop is clicked
                                                                       * @param {Boolean} props.closeAllModalsBefore - Boolean that determines if all modals should be closed before this modal is shown (close only modals created with the same component, in the case of cascade modal)
                                                                       * @param {Boolean} props.fadeIn - Boolean that determines if the modal should fade in when shown
                                                                       * @param {Number} props.animationDuration - This value should be a number in a string type. The duration of the modal fade-in animation and fade-out in seconds
                                                                       * @param {Boolean} props.fadeOut - Boolean that determines if the modal should fade out when closed
                                                                       * @param {String} props.dataHref - The URL to fetch data from to render in the modal. URL is provided by the event which turn on the modal, if the event is a click on a tag <a>, then dataHref should be (event.currentTarget.href)
                                                                       * @param {string} props.closureButton - Text that appear in the closure button of modal. If it's absent, a default cross button will be displayed instead.
                                                                       * @param {String} props.ajaxData - The name of the data to fetch from the URL if the dataHref is an API. Note that it should began with "data.", as "data.name", or "data.phoneNumber".
                                                                       * @param {String} props.customButtonColor - The color of the close button and spinner in hexadecimal format, HSL and HSLA format, RGB  and RGBA format and name format
                                                                       * @returns The Modal component
                                                                       */
var Modal = function Modal(props) {
  var modalRef = (0, _react.useRef)(null);
  var _useState = (0, _react.useState)(null),
    _useState2 = _slicedToArray(_useState, 2),
    newDataHref = _useState2[0],
    setNewDataHref = _useState2[1];
  var children = props.children,
    onClose = props.onClose,
    showModal = props.showModal,
    title = props.title,
    backDropClickAndClose = props.backDropClickAndClose,
    closeAllModalsBefore = props.closeAllModalsBefore,
    fadeIn = props.fadeIn,
    animationDuration = props.animationDuration,
    fadeOut = props.fadeOut,
    dataHref = props.dataHref,
    closureButton = props.closureButton,
    ajaxData = props.ajaxData,
    customButtonColor = props.customButtonColor;
  console.log('props de modal', props);
  var notFocusable = document.querySelectorAll('#root, #formContainer, header, main, footer');
  (0, _react.useEffect)(function () {
    if (showModal) {
      setParams();
      setAccessibility();
      setBlocker();
    }
  }, [showModal]);
  //WARN au survol, qual es?

  var setParams = function setParams() {
    if (closeAllModalsBefore) {
      closeAllModals();
    }
    if (dataHref) {
      handleParentConditions();
    }
    if (fadeIn && animationDuration) {
      modalRef.current.parentElement.classList.add('tUv39-modal-fadeIn');
      modalRef.current.parentElement.style.setProperty('animation-duration', "".concat(animationDuration, "s"));
    } else if (fadeIn && !animationDuration) {
      modalRef.current.parentElement.classList.add('tUv39-modal-fadeIn');
      modalRef.current.parentElement.style.setProperty('animation-duration', "2s");
    }
    if (customButtonColor) {
      var modal = document.querySelector('#modal');
      modal.style.setProperty('--basicBlue', customButtonColor);
    }
  };
  var setBlocker = function setBlocker() {
    document.body.style.overflow = 'hidden';
    modalRef.current.setAttribute('overflow', '');
  };
  var setAccessibility = function setAccessibility() {
    notFocusable.forEach(function (element) {
      element.setAttribute('aria-hidden', true);
    });
    modalRef.current.setAttribute('aria-hidden', false);
    document.addEventListener('keydown', handleKeyboardNavigation(event, modalRef.current));
    modalRef.current.focus();
  };
  var handleModalClose = function handleModalClose() {
    document.body.style.overflow = 'auto';
    document.removeEventListener('keydown', handleKeyboardNavigation);
    notFocusable.forEach(function (element) {
      element.setAttribute('aria-hidden', false);
    });
    if (fadeOut && animationDuration) {
      modalRef.current.parentElement.classList.add('tUv39-modal-fadeOut');
      modalRef.current.parentElement.style.setProperty('animation-duration', "".concat(animationDuration, "s"));
      setTimeout(function () {
        onClose();
      }, animationDuration * 1000 - 100);
    } else if (fadeOut && !animationDuration) {
      modalRef.current.parentElement.classList.add('tUv39-modal-fadeOut');
      modalRef.current.parentElement.style.setProperty('animation-duration', "2s");
      setTimeout(function () {
        onClose();
      }, 1900);
    } else {
      onClose();
    }
  };
  var handleKeyboardNavigation = function handleKeyboardNavigation(event, parentElement) {
    event.preventDefault();
    event.stopPropagation();
    var tabbableElementsSelectors = '#dialogTitle, #dialogDesc, #dialogButton';
    var allTabbableElements = parentElement.querySelectorAll(tabbableElementsSelectors);
    var trapFocusInModal = function trapFocusInModal(event, parentElement) {
      var index = Array.from(allTabbableElements).findIndex(function (i) {
        return i === parentElement.querySelector(':focus');
      });
      if (event.shiftKey === true) {
        index--;
      } else {
        index++;
      }
      if (index >= allTabbableElements.length) {
        index = 0;
      }
      if (index < 0) {
        index = allTabbableElements.length - 1;
      }
      allTabbableElements[index].focus();
    };
    parentElement.addEventListener('keydown', function (event) {
      event.preventDefault();
      if (event.keyCode === 9) {
        trapFocusInModal(event, parentElement);
        //console.log('où est le focus', document.activeElement);
      } else if (event.keyCode !== 9) {
        event.preventDefault();
        //event.stopImmediatePropagation();
        if (event.keyCode === 27) {
          handleModalClose();
        } else if (document.activeElement.id === 'dialogCloseButton' && event.keyCode === 13) {
          handleModalClose();
        }
      }
    });
  };
  handleKeyboardNavigation.PropTypes = {
    event: _propTypes.default.object.isRequired,
    parentElement: _propTypes.default.object.isRequired
  };
  var handleParentConditions = function handleParentConditions() {
    if (dataHref.includes('#')) {
      var href = decodeURI(dataHref);
      var anchor = href.split('#')[1];
      setNewDataHref(anchor);
    }
    if (dataHref.includes('#') === false) {
      setNewDataHref( /*#__PURE__*/(0, _jsxRuntime.jsx)(_SpinnerModal.default, {}));
      if (!/^data\./.test(ajaxData) | !ajaxData) {
        console.error("No or invalid prop 'ajaxData' supplied to 'Modal'. Value must start with 'data.'");
      } else if (/^data\./.test(ajaxData)) {
        fetch(dataHref).then(function (response) {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        // eslint-disable-next-line no-unused-vars
        .then(function (data) {
          var func = eval("(".concat(ajaxData, ")"));
          setNewDataHref( /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
            children: func
          }));
        }).catch(function (error) {
          console.error('Il y a eu un problème avec la requête fetch:', error);
          setNewDataHref( /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
            children: "\"fetch return error\""
          }));
        });
      }
    }
  };

  //PARAM
  var handleBackDropClick = function handleBackDropClick() {
    backDropClickAndClose ? handleModalClose() : null;
  };
  //PARAM
  var closeAllModals = function closeAllModals() {
    var modals = document.querySelectorAll('.tUv78');
    for (var i = 0; i < modals.length - 1; i++) {
      var closeButton = modals[i].querySelector('button#dialogButton');
      closeButton.click();
    }
  };
  return showModal ? /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    id: "modalBlocker",
    className: "tUv39-modal-blocker-div tUv78",
    onClick: handleBackDropClick,
    children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      tabIndex: "-1",
      ref: modalRef,
      id: "modal",
      role: "dialog",
      "aria-labelledby": "dialogTitle",
      "aria-describedby": "dialogDesc",
      "aria-modal": "true",
      onClick: function onClick(e) {
        return e.stopPropagation();
      },
      className: "tUv39-modal-container",
      children: [title && /*#__PURE__*/(0, _jsxRuntime.jsx)("h3", {
        className: "tUv39-modalclose-h3",
        id: "dialogTitle",
        tabIndex: 1,
        children: title
      }), (children || newDataHref) && /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        role: "p",
        className: "tUv39-modalclose-p",
        id: "dialogDesc",
        tabIndex: 2,
        children: [children, /*#__PURE__*/(0, _jsxRuntime.jsx)("br", {}), newDataHref]
      }), closureButton ? /*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
        onClick: handleModalClose,
        id: "dialogCloseButton",
        className: "tUv39-modalclose-button",
        "aria-label": "close modal button",
        tabIndex: 3,
        children: closureButton
      }) : /*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
        onClick: handleModalClose,
        id: "dialogButton",
        className: "tUv39-modalclose-button-default",
        "aria-label": "close modal button",
        tabIndex: 3,
        style: {
          customButtonColor: customButtonColor
        },
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)("img", {
          src: _closeIcon.default,
          width: '20px'
        })
      })]
    })
  }) : null;
};
Modal.propTypes = {
  children: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number, _propTypes.default.element]),
  onClose: _propTypes.default.func.isRequired,
  showModal: _propTypes.default.bool.isRequired,
  title: _propTypes.default.string,
  backDropClickAndClose: _propTypes.default.bool,
  closeAllModalsBefore: _propTypes.default.bool,
  fadeIn: _propTypes.default.bool,
  animationDuration: _propTypes.default.string,
  fadeOut: _propTypes.default.bool,
  dataHref: _propTypes.default.string,
  closureButton: _propTypes.default.string,
  ajaxData: _propTypes.default.string,
  customButtonColor: _propTypes.default.string
};
Modal.defaultProps = {
  animationDuration: '2',
  backDropClickAndClose: false,
  closeAllModalsBefore: false,
  fadeIn: false,
  fadeOut: false,
  ajaxData: 'data.id'
};
var _default = Modal;
exports.default = _default;