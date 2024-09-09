import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/inherits";
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
/**
 * Tawfeer Logo.
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
var TawfeerLogo = /*#__PURE__*/function (_Component) {
  function TawfeerLogo() {
    _classCallCheck(this, TawfeerLogo);
    return _callSuper(this, TawfeerLogo, arguments);
  }
  _inherits(TawfeerLogo, _Component);
  return _createClass(TawfeerLogo, [{
    key: "render",
    value:
    /**
     * Render
     */
    function render() {
      var _this$props = this.props,
        centered = _this$props.centered,
        className = _this$props.className,
        height = _this$props.height;
      var classes = classnames('tawfeer-logo__svg', centered && 'is-centered', className);
      return /*#__PURE__*/_jsx(SVG, {
        xmlns: "http://www.w3.org/2000/svg",
        height: height,
        viewBox: "0 0 221 64",
        className: classes,
        children: /*#__PURE__*/_jsx(Path, {
          d: "M32 0c17.672 0 32 14.328 32 32S49.672 64 32 64C14.326 64 0 49.672 0 32S14.328 0 32 0zm130.57 27.247c3.611 0 6.475 2.521 6.475 7.974 0 5.417-3.134 8.995-8.314 8.995-1.262 0-2.248-.172-3.305-.376v8.551h-4.022V27.67h3.85v1.486c1.534-1.191 3.237-1.908 5.316-1.908zM18.023 17.755v28.49h6.902V34.287l11.733 11.958h9.319l-27.954-28.49zm178.552 9.495c2.009 0 3.219.34 4.581.784v3.407c-1.158-.444-2.878-.921-4.513-.921-2.453 0-4.532 1.294-4.532 5.076 0 4.156 2.077 5.383 4.736 5.387 1.262 0 2.676-.273 4.516-.99v3.34c-1.636.544-3.118.92-5.025.92-6.033 0-8.417-3.442-8.417-8.45 0-5.283 3.305-8.553 8.654-8.553zm-18.195-.003c3.919 0 6.44 1.567 6.435 6.235V43.84h-3.747v-1.771h-.103c-1.327 1.022-2.93 2.079-5.314 2.079-2.112 0-4.36-1.534-4.36-4.6 0-4.133 3.545-4.912 5.997-5.252l3.51-.477v-.47c0-2.181-.886-2.897-2.93-2.897-.989 0-3.338.305-5.28 1.09l-.341-3.237c1.738-.614 4.123-1.058 6.133-1.058zm-73.55-.12c5.145 0 6.951 3.579 6.951 6.987 0 .936-.047 1.518-.102 2.06l-.034.325h-10.358c.101 3.542 2.106 4.36 5.104 4.36 1.637 0 3.158-.372 4.845-.991v3.342c-2.093.644-3.89.921-5.968.921-5.141 0-8.308-2.556-8.308-8.586 0-4.398 2.69-8.417 7.87-8.417zm39.998 0c1.771 0 3.305.172 4.804.614v3.338s-2.188-.714-4.497-.714c-1.43 0-2.76.477-2.76 1.703 0 2.725 8.042 1.262 8.04 6.883 0 4.053-3.611 5.178-7.394 5.178-1.738 0-3.487-.467-4.736-.958v-3.305c1.5.52 3.578 1.026 4.873 1.026 1.84 0 3.1-.374 3.1-1.771 0-2.829-8.04-1.33-8.04-7.156 0-2.998 2.724-4.837 6.61-4.837zm64.01-6.114v13.63c.34-.376.615-.785 5.657-6.952h5.213l-6.543 7.666 7.156 8.485h-5.248l-6.235-7.665v7.665h-4.02v-22.83h4.02zm-127.634 0l8.633 15.263V21.013h4.022v22.83h-4.416L80.81 28.578v15.263h-4.021v-22.83h4.416zm36.758 6.678l2.476 11.469 2.801-11.469h3.572l2.438 11.469 2.75-11.469h4.038l-4.54 16.151h-4.83l-1.714-9.495-2.325 9.495h-4.814l-4.268-16.15h4.416zm62.836 8.616l-3.305.512c-.987.136-2.044.732-2.044 2.231 0 1.322.75 2.067 1.84 2.067 1.157 0 2.452-.716 3.509-1.466v-3.344zm-19.318-5.752c-1.193 0-2.657.545-4.054 1.771v8.415c.885.17 1.77.306 2.997.306 2.829 0 4.464-1.805 4.464-5.517 0-3.476-1.158-4.975-3.407-4.975zm-56.685-.394c-2.009 0-3.235 1.43-3.475 3.678h6.268c0-1.975-.646-3.678-2.793-3.678zm-58.818.836H40.33l2.205 2.248h3.442v-2.248zm0-6.621H33.833l2.205 2.248h9.939v-2.248zm0-6.621h-18.64l2.204 2.248h16.436v-2.248z"
        })
      });
    }
  }]);
}(Component);
TawfeerLogo.defaultProps = {
  height: 56
};
export default TawfeerLogo;