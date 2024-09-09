import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/inherits";
var _excluded = ["chevron", "className", "desc", "grouped", "icon", "isDestructive", "isPressed", "isSmall", "title"];
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
/**
 * Button Card
 */

/**
 * WordPress dependencies
 */
import { Component } from '@wordpress/element';
import { Icon, chevronRight } from '@wordpress/icons';

/**
 * Internal dependencies
 */
import { Grid } from '../';
import './style.scss';

/**
 * External dependencies
 */
import classnames from 'classnames';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
var ButtonCard = /*#__PURE__*/function (_Component) {
  function ButtonCard() {
    _classCallCheck(this, ButtonCard);
    return _callSuper(this, ButtonCard, arguments);
  }
  _inherits(ButtonCard, _Component);
  return _createClass(ButtonCard, [{
    key: "render",
    value:
    /**
     * Render
     */
    function render() {
      var _this$props = this.props,
        chevron = _this$props.chevron,
        className = _this$props.className,
        desc = _this$props.desc,
        grouped = _this$props.grouped,
        icon = _this$props.icon,
        isDestructive = _this$props.isDestructive,
        isPressed = _this$props.isPressed,
        isSmall = _this$props.isSmall,
        title = _this$props.title,
        otherProps = _objectWithoutProperties(_this$props, _excluded);
      var classes = classnames('tawfeer-button-card', className, chevron && 'has-chevron', grouped && 'grouped', icon && 'has-icon', isDestructive && 'is-destructive', isPressed && 'is-pressed', isSmall && 'is-small');
      return /*#__PURE__*/_jsxs("a", _objectSpread(_objectSpread({
        className: classes
      }, otherProps), {}, {
        children: [icon && /*#__PURE__*/_jsx(Icon, {
          icon: icon,
          height: 48,
          width: 48
        }), /*#__PURE__*/_jsxs(Grid, {
          noMargin: true,
          columns: 1,
          gutter: 8,
          children: [title && /*#__PURE__*/_jsx("h3", {
            children: title
          }), desc && /*#__PURE__*/_jsx("p", {
            children: desc
          })]
        }), chevron && /*#__PURE__*/_jsx(Icon, {
          icon: chevronRight,
          height: 24,
          width: 24
        })]
      }));
    }
  }]);
}(Component);
export default ButtonCard;