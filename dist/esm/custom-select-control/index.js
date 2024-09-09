import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/inherits";
var _excluded = ["className"];
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
/**
 * Custom Select Control
 */

/**
 * WordPress dependencies
 */
import { CustomSelectControl as BaseComponent } from '@wordpress/components';
import { Component } from '@wordpress/element';

/**
 * External dependencies
 */
import classnames from 'classnames';

/**
 * Internal dependencies
 */
import './style.scss';
import { jsx as _jsx } from "react/jsx-runtime";
var CustomSelectControl = /*#__PURE__*/function (_Component) {
  function CustomSelectControl() {
    _classCallCheck(this, CustomSelectControl);
    return _callSuper(this, CustomSelectControl, arguments);
  }
  _inherits(CustomSelectControl, _Component);
  return _createClass(CustomSelectControl, [{
    key: "render",
    value:
    /**
     * Render.
     */
    function render() {
      var _this$props = this.props,
        className = _this$props.className,
        otherProps = _objectWithoutProperties(_this$props, _excluded);
      var classes = classnames('tawfeer-custom-select-control', className);
      return /*#__PURE__*/_jsx(BaseComponent, _objectSpread({
        className: classes
      }, otherProps));
    }
  }]);
}(Component);
export default CustomSelectControl;