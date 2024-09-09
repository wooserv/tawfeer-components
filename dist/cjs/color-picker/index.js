"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _components = require("@wordpress/components");
var _element = require("@wordpress/element");
var _classnames = _interopRequireDefault(require("classnames"));
var _colord = require("colord");
var _a11y = _interopRequireDefault(require("colord/plugins/a11y"));
var _hooks = _interopRequireDefault(require("../hooks"));
var _utils = _interopRequireDefault(require("../utils"));
require("./style.scss");
var _jsxRuntime = require("react/jsx-runtime");
/**
 * WordPress dependencies.
 */

/**
 * External dependencies.
 */

/**
 * Internal dependencies.
 */

(0, _colord.extend)([_a11y["default"]]);
var InteractiveDiv = _utils["default"].InteractiveDiv;
var ColorPicker = function ColorPicker(_ref) {
  var label = _ref.label,
    _ref$color = _ref.color,
    color = _ref$color === void 0 ? '#fff' : _ref$color,
    _onChange = _ref.onChange,
    className = _ref.className;
  var _useState = (0, _element.useState)(false),
    _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
    isExpanded = _useState2[0],
    setIsExpanded = _useState2[1];
  var ref = (0, _element.useRef)();
  var colordColor = (0, _colord.colord)(color);
  _hooks["default"].useOnClickOutside(ref, function () {
    return setIsExpanded(false);
  });
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    className: (0, _classnames["default"])('tawfeer-color-picker', className),
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: "tawfeer-color-picker__label",
      children: label
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(InteractiveDiv, {
      className: 'tawfeer-color-picker__expander',
      onClick: function onClick() {
        return setIsExpanded(!isExpanded);
      },
      style: {
        backgroundColor: color,
        color: colordColor.contrast() > colordColor.contrast('#000') ? '#fff' : '#000'
      },
      children: color
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: "tawfeer-color-picker__main",
      ref: ref,
      children: isExpanded && /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.ColorPicker, {
        color: color,
        onChange: function onChange(hex) {
          return _onChange(hex);
        },
        enableAlpha: false
      })
    })]
  });
};
var _default = exports["default"] = ColorPicker;