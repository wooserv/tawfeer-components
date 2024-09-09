"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));
var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));
var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));
var _element = require("@wordpress/element");
var _icons = require("@wordpress/icons");
var _ = require("../");
require("./style.scss");
var _classnames = _interopRequireDefault(require("classnames"));
var _jsxRuntime = require("react/jsx-runtime");
var _excluded = ["chevron", "className", "desc", "grouped", "icon", "isDestructive", "isPressed", "isSmall", "title"];
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0, _defineProperty2["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2["default"])(o), (0, _possibleConstructorReturn2["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); } /**
 * Button Card
 */ /**
 * WordPress dependencies
 */ /**
 * Internal dependencies
 */ /**
 * External dependencies
 */
var ButtonCard = /*#__PURE__*/function (_Component) {
  function ButtonCard() {
    (0, _classCallCheck2["default"])(this, ButtonCard);
    return _callSuper(this, ButtonCard, arguments);
  }
  (0, _inherits2["default"])(ButtonCard, _Component);
  return (0, _createClass2["default"])(ButtonCard, [{
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
        otherProps = (0, _objectWithoutProperties2["default"])(_this$props, _excluded);
      var classes = (0, _classnames["default"])('tawfeer-button-card', className, chevron && 'has-chevron', grouped && 'grouped', icon && 'has-icon', isDestructive && 'is-destructive', isPressed && 'is-pressed', isSmall && 'is-small');
      return /*#__PURE__*/(0, _jsxRuntime.jsxs)("a", _objectSpread(_objectSpread({
        className: classes
      }, otherProps), {}, {
        children: [icon && /*#__PURE__*/(0, _jsxRuntime.jsx)(_icons.Icon, {
          icon: icon,
          height: 48,
          width: 48
        }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_.Grid, {
          noMargin: true,
          columns: 1,
          gutter: 8,
          children: [title && /*#__PURE__*/(0, _jsxRuntime.jsx)("h3", {
            children: title
          }), desc && /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
            children: desc
          })]
        }), chevron && /*#__PURE__*/(0, _jsxRuntime.jsx)(_icons.Icon, {
          icon: _icons.chevronRight,
          height: 24,
          width: 24
        })]
      }));
    }
  }]);
}(_element.Component);
var _default = exports["default"] = ButtonCard;