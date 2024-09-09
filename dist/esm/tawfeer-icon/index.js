import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/inherits";
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
/**
 * Tawfeer Icon.
 */

/**
 * WordPress dependencies.
 */
import { Path, SVG } from '@wordpress/components';
import { Component } from '@wordpress/element';

/**
 * External dependencies.
 */
import classnames from 'classnames';

/**
 * Internal dependencies.
 */
import './style.scss';
import { jsx as _jsx } from "react/jsx-runtime";
var TawfeerIcon = /*#__PURE__*/function (_Component) {
  function TawfeerIcon() {
    _classCallCheck(this, TawfeerIcon);
    return _callSuper(this, TawfeerIcon, arguments);
  }
  _inherits(TawfeerIcon, _Component);
  return _createClass(TawfeerIcon, [{
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
      var classes = classnames('tawfeer-icon', simple && 'tawfeer-icon--simple', white && 'tawfeer-icon--white', className);
      return /*#__PURE__*/_jsx(SVG, {
        xmlns: "http://www.w3.org/2000/svg",
        height: size,
        width: size,
        viewBox: "0 0 32 32",
        className: classes,
        children: /*#__PURE__*/_jsx(Path, {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M32 16c0 8.836-7.164 16-16 16-8.837 0-16-7.164-16-16S7.164 0 16 0s16 7.164 16 16zm-10.732.622h1.72v-1.124h-2.823l1.103 1.124zm-3.249-3.31h4.97v-1.124h-6.072l1.102 1.124zm-3.248-3.31h8.217V8.877h-9.32l1.103 1.125zM9.01 8.877l13.977 14.246h-4.66l-5.866-5.98v5.98h-3.45V8.877z"
        })
      });
    }
  }]);
}(Component);
TawfeerIcon.defaultProps = {
  size: 32
};
export default TawfeerIcon;