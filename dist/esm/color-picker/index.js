import _slicedToArray from "@babel/runtime/helpers/slicedToArray";
/**
 * WordPress dependencies.
 */
import { ColorPicker as ColorPickerComponent } from '@wordpress/components';
import { useRef, useState } from '@wordpress/element';

/**
 * External dependencies.
 */
import classnames from 'classnames';
import { colord, extend } from 'colord';
import a11yPlugin from 'colord/plugins/a11y';

/**
 * Internal dependencies.
 */
import hooks from '../hooks';
import utils from '../utils';
import './style.scss';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
extend([a11yPlugin]);
var InteractiveDiv = utils.InteractiveDiv;
var ColorPicker = function ColorPicker(_ref) {
  var label = _ref.label,
    _ref$color = _ref.color,
    color = _ref$color === void 0 ? '#fff' : _ref$color,
    _onChange = _ref.onChange,
    className = _ref.className;
  var _useState = useState(false),
    _useState2 = _slicedToArray(_useState, 2),
    isExpanded = _useState2[0],
    setIsExpanded = _useState2[1];
  var ref = useRef();
  var colordColor = colord(color);
  hooks.useOnClickOutside(ref, function () {
    return setIsExpanded(false);
  });
  return /*#__PURE__*/_jsxs("div", {
    className: classnames('tawfeer-color-picker', className),
    children: [/*#__PURE__*/_jsx("div", {
      className: "tawfeer-color-picker__label",
      children: label
    }), /*#__PURE__*/_jsx(InteractiveDiv, {
      className: 'tawfeer-color-picker__expander',
      onClick: function onClick() {
        return setIsExpanded(!isExpanded);
      },
      style: {
        backgroundColor: color,
        color: colordColor.contrast() > colordColor.contrast('#000') ? '#fff' : '#000'
      },
      children: color
    }), /*#__PURE__*/_jsx("div", {
      className: "tawfeer-color-picker__main",
      ref: ref,
      children: isExpanded && /*#__PURE__*/_jsx(ColorPickerComponent, {
        color: color,
        onChange: function onChange(hex) {
          return _onChange(hex);
        },
        enableAlpha: false
      })
    })]
  });
};
export default ColorPicker;