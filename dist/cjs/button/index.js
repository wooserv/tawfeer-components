"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _components = require("@wordpress/components");
var _element = require("@wordpress/element");
var _router = _interopRequireDefault(require("../proxied-imports/router"));
require("./style.scss");
var _jsxRuntime = require("react/jsx-runtime");
var _excluded = ["href", "onClick"];
/**
 * Button
 */
/**
 * WordPress dependencies.
 */
/**
 * Internal dependencies
 */
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0, _defineProperty2["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var useHistory = _router["default"].useHistory;
var Button = function Button(_ref) {
  var href = _ref.href,
    onClick = _ref.onClick,
    otherProps = (0, _objectWithoutProperties2["default"])(_ref, _excluded);
  var history = useHistory();
  var _useState = (0, _element.useState)(false),
    _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
    isAwaitingOnClick = _useState2[0],
    setIsAwaitingOnClick = _useState2[1];

  // If both onClick and href are present, await the onClick action an then redirect.
  if (href && onClick) {
    otherProps.onClick = /*#__PURE__*/(0, _asyncToGenerator2["default"])(/*#__PURE__*/_regenerator["default"].mark(function _callee() {
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            setIsAwaitingOnClick(true);
            _context.next = 3;
            return onClick();
          case 3:
            setIsAwaitingOnClick(false);
            history.push((href || '').replace('#', ''));
          case 5:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
  } else {
    otherProps.href = href;
    otherProps.onClick = onClick;
  }
  if (isAwaitingOnClick) {
    otherProps.disabled = true;
  }
  // @ts-ignore - @wordpress/components' Button can only have either href or onClick, not both.
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.Button, _objectSpread({}, otherProps));
};
var _default = exports["default"] = Button;