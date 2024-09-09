"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));
var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));
var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));
var _components = require("@wordpress/components");
var _element = require("@wordpress/element");
var _classnames = _interopRequireDefault(require("classnames"));
require("./style.scss");
var _jsxRuntime = require("react/jsx-runtime");
function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2["default"])(o), (0, _possibleConstructorReturn2["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); } /**
 * Tawfeer Icon.
 */ /**
 * WordPress dependencies.
 */ /**
 * External dependencies.
 */ /**
 * Internal dependencies.
 */
var TawfeerIcon = /*#__PURE__*/function (_Component) {
  function TawfeerIcon() {
    (0, _classCallCheck2["default"])(this, TawfeerIcon);
    return _callSuper(this, TawfeerIcon, arguments);
  }
  (0, _inherits2["default"])(TawfeerIcon, _Component);
  return (0, _createClass2["default"])(TawfeerIcon, [{
    key: "render",
    value:
    /**
     * Render
     */
    function render() {
      var _this$props = this.props,
        className = _this$props.className,
        simple = _this$props.simple,
        size = _this$props.size,
        white = _this$props.white;
      var classes = (0, _classnames["default"])('tawfeer-icon', simple && 'tawfeer-icon--simple', white && 'tawfeer-icon--white', className);
      return /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.SVG, {
        xmlns: "http://www.w3.org/2000/svg",
        height: size,
        width: size,
        viewBox: "0 0 32 32",
        className: classes,
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.Path, {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M32 16c0 8.836-7.164 16-16 16-8.837 0-16-7.164-16-16S7.164 0 16 0s16 7.164 16 16zm-10.732.622h1.72v-1.124h-2.823l1.103 1.124zm-3.249-3.31h4.97v-1.124h-6.072l1.102 1.124zm-3.248-3.31h8.217V8.877h-9.32l1.103 1.125zM9.01 8.877l13.977 14.246h-4.66l-5.866-5.98v5.98h-3.45V8.877z"
        })
      });
    }
  }]);
}(_element.Component);
TawfeerIcon.defaultProps = {
  size: 32
};
var _default = exports["default"] = TawfeerIcon;