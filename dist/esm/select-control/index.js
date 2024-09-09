import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/inherits";
var _excluded = ["className", "optgroups", "buttonOptions", "buttonSmall"];
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
/**
 * Select Control
 */

/**
 * WordPress dependencies
 */
import { SelectControl as BaseComponent } from '@wordpress/components';
import { Component } from '@wordpress/element';

/**
 * External dependencies
 */
import classNames from 'classnames';

/**
 * Internal dependencies
 */
import ButtonGroupControl from './ButtonGroupControl';
import GroupedSelectControl from './GroupedSelectControl';
import './style.scss';
import { jsx as _jsx } from "react/jsx-runtime";
var SelectControl = /*#__PURE__*/function (_Component) {
  function SelectControl() {
    _classCallCheck(this, SelectControl);
    return _callSuper(this, SelectControl, arguments);
  }
  _inherits(SelectControl, _Component);
  return _createClass(SelectControl, [{
    key: "render",
    value:
    /**
     * Render.
     */
    function render() {
      var _this$props = this.props,
        className = _this$props.className,
        optgroups = _this$props.optgroups,
        buttonOptions = _this$props.buttonOptions,
        buttonSmall = _this$props.buttonSmall,
        otherProps = _objectWithoutProperties(_this$props, _excluded);
      var classes = classNames('tawfeer-select-control', optgroups && 'tawfeer-grouped-select-control', buttonOptions && 'tawfeer-buttons-select-control', className);
      return /*#__PURE__*/_jsx("div", {
        className: classes,
        children: optgroups ? /*#__PURE__*/_jsx(GroupedSelectControl, _objectSpread({
          optgroups: optgroups
        }, otherProps)) : buttonOptions ? /*#__PURE__*/_jsx(ButtonGroupControl, _objectSpread({
          buttonOptions: buttonOptions,
          buttonSmall: buttonSmall
        }, otherProps)) : /*#__PURE__*/_jsx(BaseComponent, _objectSpread({}, otherProps))
      });
    }
  }]);
}(Component);
export default SelectControl;