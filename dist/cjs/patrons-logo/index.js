"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));
var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));
var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _components = require("@wordpress/components");
var _element = require("@wordpress/element");
var _i18n = require("@wordpress/i18n");
var _jsxRuntime = require("react/jsx-runtime");
function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2["default"])(o), (0, _possibleConstructorReturn2["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); } /**
 * WordPress.com and Google News Initiative Logos.
 */ /**
 * WordPress dependencies
 */
var PatronsLogo = /*#__PURE__*/function (_Component) {
  function PatronsLogo() {
    var _this;
    (0, _classCallCheck2["default"])(this, PatronsLogo);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _callSuper(this, PatronsLogo, [].concat(args));
    /**
     * Render.
     */
    (0, _defineProperty2["default"])(_this, "render", function () {
      return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_components.SVG, {
        xmlns: "http://www.w3.org/2000/svg",
        width: "219",
        height: "16",
        viewBox: "0 0 438 32",
        className: "patrons-logo",
        "aria-label": (0, _i18n.__)('A project of WordPress.com and the Google News Initiative', 'tawfeer-plugin'),
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_components.Path, {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M0 16C0 7.179 7.146 0 15.93 0c8.784 0 15.93 7.178 15.93 16 0 8.823-7.146 16-15.93 16C7.145 32 0 24.823 0 16zm27.506-.271L23.13 28.435a14.349 14.349 0 005.214-5.263 14.424 14.424 0 001.906-7.171 14.36 14.36 0 00-1.754-6.902c.062.458.097.95.097 1.477 0 1.461-.271 3.102-1.088 5.153zM18.96 9.177c-.291.027-.665.057-1.056.077l5.177 15.463 1.427-4.792c.728-1.87 1.09-3.42 1.09-4.653 0-1.775-.635-3.007-1.179-3.964l-.154-.25-.014-.022c-.66-1.071-1.239-2.008-1.239-3.105 0-1.32.997-2.55 2.404-2.55.052 0 .1.004.148.008l.037.003a14.226 14.226 0 00-9.672-3.777 14.26 14.26 0 00-6.797 1.723 14.334 14.334 0 00-5.167 4.76c.337.01.654.019.922.019 1.497 0 3.817-.185 3.817-.185.772-.046.863 1.095.093 1.186 0 0-.234.028-.589.06-.291.026-.663.056-1.053.076l5.214 15.582 3.135-9.44-2.23-6.14a26.784 26.784 0 01-1.502-.138c-.772-.047-.681-1.23.091-1.186 0 0 2.364.185 3.771.185 1.498 0 3.818-.185 3.818-.185.772-.046.863 1.095.09 1.186 0 0-.23.027-.582.06zm-7.076 20.624a14.282 14.282 0 008.803-.23 1.188 1.188 0 01-.103-.199l-4.402-12.115-4.298 12.544zM2.846 10.145a14.434 14.434 0 00.945 13.493 14.345 14.345 0 005.888 5.308l-6.833-18.8z"
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.Path, {
          d: "M56.125 8.758l-3.172 12.258-3.178-12.258h-3.209l.747 2.626-2.797 10.047L41.48 8.758h-3.087l4.334 16.01h3.362l2.596-8.56 2.431 8.56h3.361l4.549-16.01h-2.9zM151.302 24.767h-2.818v-2.915h2.818v2.915z"
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.Path, {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M64.38 13.13c-3.878 0-5.71 2.509-5.71 5.973 0 3.465 1.832 5.95 5.71 5.95 3.854 0 5.71-2.485 5.71-5.95 0-3.464-1.856-5.973-5.71-5.973zm0 9.654c-1.833 0-2.807-1.194-2.807-3.681 0-2.461.974-3.68 2.807-3.68 1.83 0 2.783 1.196 2.783 3.68 0 2.462-.953 3.68-2.783 3.68zM86.344 13.13c.69 0 1.285.096 2.117.262V8.756h2.807v16.01h-2.663v-1.052c-.906.767-2.404 1.34-3.64 1.34-2.5 0-4.616-1.745-4.616-5.52 0-3.798 2.117-6.404 5.995-6.404zm-.548 9.654c.904 0 1.76-.455 2.665-1.29v-5.758a5.2 5.2 0 00-1.83-.36c-2.144 0-3.38 1.362-3.38 3.968 0 2.411 1 3.44 2.545 3.44zM99.941 8.758h-5.199v16.01h2.998v-5.57h2.201c3.403 0 5.879-1.84 5.879-5.28 0-3.466-2.476-5.16-5.879-5.16zm.024 8.1H97.74v-5.734h2.225c1.809 0 2.713 1.003 2.713 2.795 0 1.768-.834 2.938-2.713 2.938zM115.57 19.032c0-3.083 1.879-5.902 5.496-5.902 3.593 0 4.854 2.509 4.854 4.9 0 .767-.046 1.195-.092 1.636l-.004.035h-7.232c.072 2.487 1.47 3.059 3.564 3.059 1.141 0 2.204-.262 3.383-.697v2.344c-1.463.453-2.718.646-4.169.646-3.588 0-5.8-1.79-5.8-6.02zm5.472-3.775c-1.403 0-2.26 1.002-2.426 2.581h4.377c0-1.387-.453-2.582-1.951-2.582z"
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.Path, {
          d: "M130.798 16.595c0-.861.926-1.196 1.925-1.196 1.613 0 3.14.504 3.14.504v-2.344c-1.047-.31-2.117-.43-3.353-.43-2.712 0-4.615 1.29-4.615 3.394 0 2.408 1.95 3.032 3.551 3.544 1.116.357 2.063.66 2.063 1.474 0 .98-.88 1.241-2.164 1.241-.906 0-2.357-.352-3.402-.717v2.316c.871.345 2.093.672 3.306.672 2.641 0 5.161-.787 5.161-3.63 0-2.325-1.95-2.922-3.552-3.412-1.114-.342-2.06-.631-2.06-1.416z"
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.Path, {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M164.046 19.103c0-3.464 1.833-5.971 5.711-5.971 3.853 0 5.71 2.507 5.71 5.97 0 3.466-1.857 5.951-5.71 5.951-3.878 0-5.711-2.485-5.711-5.95zm2.904 0c0 2.487.974 3.679 2.807 3.679 1.832 0 2.783-1.217 2.783-3.68 0-2.483-.951-3.678-2.783-3.678-1.833 0-2.807 1.218-2.807 3.679z"
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.Path, {
          d: "M191.528 13.132c-1.213 0-2.592.667-3.855 1.504l-.333.215c-.594-1.268-1.784-1.721-3.092-1.721-1.213 0-2.592.62-3.854 1.458v-1.172h-2.664v11.351h2.831V16.62c1.047-.692 2.165-1.123 2.973-1.123.927 0 1.498.5 1.498 2.102v7.17h2.807v-8.126c1.049-.693 2.167-1.146 2.975-1.146.927 0 1.498.5 1.498 2.102v7.17h2.809V16.93c0-2.2-1.309-3.798-3.593-3.798zM110.191 15.28h.095c.786-1.41 1.832-2.005 3.354-2.005.357 0 .762.046.762.046v2.461h-.285c-1.784 0-2.855.552-3.735 2.223v6.762h-2.807V13.416h2.616v1.865zM75.066 15.28h-.095v-1.864h-2.618v11.351h2.809v-6.762c.88-1.671 1.95-2.223 3.733-2.223h.287v-2.46s-.405-.047-.762-.047c-1.522 0-2.568.596-3.354 2.006zM158.983 15.424c-1.712 0-3.164.908-3.164 3.562 0 2.912 1.452 3.774 3.308 3.774.881 0 1.867-.192 3.151-.693v2.34c-1.14.383-2.176.648-3.507.648-4.213 0-5.877-2.416-5.877-5.928 0-3.703 2.306-5.997 6.043-5.997 1.403 0 2.248.24 3.2.55v2.388c-.81-.31-2.011-.644-3.154-.644zM141.016 16.595c0-.861.926-1.196 1.926-1.196 1.611 0 3.14.504 3.14.504v-2.344c-1.046-.31-2.117-.43-3.356-.43-2.711 0-4.615 1.29-4.615 3.394 0 2.408 1.95 3.032 3.552 3.544 1.116.357 2.063.66 2.063 1.474 0 .98-.88 1.241-2.165 1.241-.904 0-2.354-.352-3.401-.717v2.316c.87.345 2.094.672 3.307.672 2.642 0 5.161-.787 5.161-3.63 0-2.325-1.951-2.922-3.552-3.412-1.115-.342-2.06-.631-2.06-1.416zM300.756 24.617V8.443h2.523l7.837 12.582h.092l-.092-3.117V8.443h2.069v16.174h-2.162l-8.198-13.194h-.088l.088 3.118v10.076h-2.069z"
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.Path, {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M318.835 24.585c.704.288 1.461.42 2.22.39v-.016a5.175 5.175 0 003.041-.866 5 5 0 001.776-2.158l-1.845-.768c-.527 1.262-1.532 1.899-3.02 1.899a3.36 3.36 0 01-2.396-.98 3.775 3.775 0 01-1.118-2.642h8.73l.024-.381a6.096 6.096 0 00-1.463-4.292 5.095 5.095 0 00-3.953-1.586 4.923 4.923 0 00-3.904 1.742 6.116 6.116 0 00-1.517 4.155 5.926 5.926 0 001.566 4.223 5.302 5.302 0 001.859 1.28zm4.324-8.66c.49.485.797 1.125.868 1.811l-6.397.015a3.654 3.654 0 011.161-1.958 2.925 2.925 0 011.991-.724 3.098 3.098 0 012.377.857z"
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.Path, {
          d: "M339.793 24.617h-2.117l-2.748-8.496-2.722 8.496h-2.099l-3.557-11.07h2.162l2.454 8.359h.025l2.722-8.359h2.143l2.722 8.359h.025l2.43-8.359h2.118l-3.558 11.07zM345.498 24.069c.889.63 1.961.949 3.049.905v-.024a4.768 4.768 0 003.128-.979 3.073 3.073 0 001.22-2.481 2.987 2.987 0 00-.746-1.987 4.102 4.102 0 00-2.299-1.243l-2.181-.519c-.976-.23-1.464-.655-1.464-1.287a1.18 1.18 0 01.63-1.042 2.92 2.92 0 011.551-.382c1.276 0 2.117.49 2.523 1.468l1.806-.749a3.774 3.774 0 00-1.645-1.908 5.16 5.16 0 00-2.615-.666 5.214 5.214 0 00-3.074.916 2.787 2.787 0 00-1.294 2.383 2.49 2.49 0 00.947 2.045 5.298 5.298 0 002.006 1.028l2.225.543c1.008.261 1.512.75 1.512 1.468a1.312 1.312 0 01-.619 1.13 2.717 2.717 0 01-1.591.431 3.039 3.039 0 01-2.991-2.08l-1.85.769a5.333 5.333 0 001.772 2.26zM362.084 8.443h-2.074v16.17h2.074V8.442zM366.895 15.084v-1.537h-1.991v11.07h2.069v-6.122a3.726 3.726 0 01.815-2.383 2.55 2.55 0 012.093-1.028c1.815 0 2.723 1.024 2.723 3.073v6.46h2.084v-6.778a5.026 5.026 0 00-1.084-3.386 3.9 3.9 0 00-3.127-1.268 4.127 4.127 0 00-2.074.553 3.713 3.713 0 00-1.42 1.346h-.088zM379.094 10.768a1.414 1.414 0 01-1.039.43 1.396 1.396 0 01-1.035-.43 1.47 1.47 0 011.598-2.397 1.47 1.47 0 01.476 2.397zM379.094 24.617h-2.074v-11.07h2.074v11.07zM384.709 24.642c.457.157.942.209 1.421.151a4.17 4.17 0 001.664-.293l-.717-1.782c-.299.128-.622.19-.947.181-.992 0-1.488-.602-1.488-1.806v-5.647h2.703v-1.899h-2.703v-3.386h-2.074v3.386h-1.952v1.9h1.952v5.803a3.22 3.22 0 00.927 2.635c.343.34.758.6 1.214.757zM391.278 10.768a1.465 1.465 0 01-2.076.007 1.474 1.474 0 01.468-2.401 1.458 1.458 0 011.596.316 1.475 1.475 0 01.003 2.078h.009zM391.269 24.617h-2.074v-11.07h2.074v11.07z"
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.Path, {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M394.24 23.961a4.356 4.356 0 002.928 1.018l.025.01a4.055 4.055 0 003.625-1.899h.088v1.522h1.952v-6.68a4.459 4.459 0 00-1.362-3.509 5.1 5.1 0 00-3.513-1.243 4.837 4.837 0 00-2.976.847 4.306 4.306 0 00-1.508 1.84l1.893.817c.18-.5.536-.917 1-1.174a3.152 3.152 0 011.635-.43 2.993 2.993 0 012.05.733c.276.243.494.545.637.884.144.339.21.706.192 1.074v.318a5.84 5.84 0 00-3.006-.68 5.645 5.645 0 00-3.445 1.027 3.323 3.323 0 00-1.4 2.834 3.385 3.385 0 001.185 2.692zm5.583-1.85a3.383 3.383 0 01-2.333.98 2.776 2.776 0 01-1.586-.49 1.467 1.467 0 01-.673-1.282 1.966 1.966 0 01.771-1.537 3.409 3.409 0 012.274-.656 4.045 4.045 0 012.63.724 2.99 2.99 0 01-1.083 2.261z"
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.Path, {
          d: "M409.533 24.793a3.19 3.19 0 01-2.631-.91 3.207 3.207 0 01-.926-2.633v-5.804h-1.952v-1.899h1.952v-3.386h2.069v3.386h2.703v1.9h-2.703v5.646c0 1.204.496 1.806 1.488 1.806.325.008.648-.053.947-.18l.717 1.78a4.17 4.17 0 01-1.664.294zM414.072 11.135a1.47 1.47 0 00-.43-2.873 1.462 1.462 0 00-1.454 1.327 1.468 1.468 0 001.884 1.546zM412.617 24.617h2.064l.01-11.07h-2.074v11.07zM420.459 24.617l-4.455-11.07h2.249l3.245 8.584h.044l3.289-8.584h2.205l-4.503 11.07h-2.074z"
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.Path, {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M430.621 24.58a5.31 5.31 0 002.213.394v-.015a5.173 5.173 0 003.04-.866 4.972 4.972 0 001.781-2.158l-1.845-.768c-.527 1.262-1.532 1.899-3.02 1.899a3.353 3.353 0 01-2.396-.98 3.742 3.742 0 01-1.118-2.642h8.691l.024-.381a6.076 6.076 0 00-1.464-4.292 5.063 5.063 0 00-3.903-1.586 4.926 4.926 0 00-3.904 1.742 6.097 6.097 0 00-1.513 4.155 5.934 5.934 0 001.562 4.223c.52.553 1.151.987 1.852 1.275zm4.321-8.654c.49.484.797 1.124.868 1.81l-6.397.015a3.676 3.676 0 011.156-1.957 2.968 2.968 0 011.996-.725 3.12 3.12 0 012.377.857zM276.919 23.82V13.21l-2.454-.005v.979h-.088a4.086 4.086 0 00-3.104-1.317c-2.947 0-5.645 2.594-5.645 5.931a5.882 5.882 0 001.64 4.08 5.847 5.847 0 004.005 1.793 4 4 0 003.104-1.346h.088v.847c0 2.26-1.196 3.47-3.148 3.47a3.262 3.262 0 01-2.967-2.104l-2.254.944a5.634 5.634 0 002.079 2.546 5.61 5.61 0 003.142.948c3.035 0 5.602-1.791 5.602-6.157zm-5.421-8.643c1.761 0 3.147 1.522 3.147 3.607 0 2.055-1.361 3.557-3.147 3.557-1.786 0-3.279-1.473-3.279-3.557 0-2.085 1.517-3.607 3.279-3.607z"
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.Path, {
          d: "M226.063 24.034a9.134 9.134 0 003.568.637c2.737 0 4.747-.905 6.397-2.57 1.649-1.663 2.166-3.993 2.166-5.872a7.91 7.91 0 00-.136-1.566h-8.427v2.506h5.982a5.262 5.262 0 01-1.361 3.156 6.128 6.128 0 01-4.621 1.835 6.64 6.64 0 01-4.703-1.953 6.677 6.677 0 01-1.948-4.717c0-1.769.7-3.465 1.948-4.716a6.64 6.64 0 014.703-1.954 6.368 6.368 0 014.523 1.791l1.747-1.766a8.686 8.686 0 00-6.27-2.53 9.132 9.132 0 00-6.61 2.611 9.2 9.2 0 000 13.133 9.158 9.158 0 003.042 1.975z"
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.Path, {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M250.189 21.972a5.832 5.832 0 001.019-3.213 5.801 5.801 0 00-1.661-4.182 5.76 5.76 0 00-4.146-1.724c-1.145 0-2.264.34-3.217.976a5.833 5.833 0 00-.917 8.936 5.792 5.792 0 008.922-.793zm-4.788-6.795c1.752 0 3.265 1.458 3.265 3.582 0 2.114-1.508 3.582-3.265 3.582-1.756 0-3.264-1.468-3.264-3.582s1.513-3.582 3.264-3.582zM293.646 22.048l-2.01-1.341a3.374 3.374 0 01-2.899 1.634 2.995 2.995 0 01-2.859-1.79l7.881-3.27-.269-.67c-.493-1.312-2.01-3.759-5.045-3.759s-5.475 2.394-5.475 5.907c0 3.313 2.415 5.912 5.767 5.912a5.843 5.843 0 004.909-2.623zm-2.923-5.662l-5.27 2.197a3.258 3.258 0 01.817-2.374 3.228 3.228 0 012.263-1.076 2.285 2.285 0 012.19 1.253zM264.227 18.76a5.839 5.839 0 01-1.018 3.212 5.813 5.813 0 01-2.623 2.108 5.792 5.792 0 01-6.3-1.315 5.841 5.841 0 01-1.222-6.336 5.82 5.82 0 012.139-2.6 5.796 5.796 0 013.217-.976 5.75 5.75 0 014.148 1.723 5.791 5.791 0 011.659 4.183zm-2.542 0c0-2.125-1.513-3.583-3.265-3.583-1.751 0-3.264 1.468-3.264 3.582s1.508 3.582 3.264 3.582c1.757 0 3.265-1.468 3.265-3.582z"
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.Path, {
          d: "M281.457 6.941h-2.591v17.373h2.591V6.94z"
        })]
      });
    });
    return _this;
  }
  (0, _inherits2["default"])(PatronsLogo, _Component);
  return (0, _createClass2["default"])(PatronsLogo);
}(_element.Component);
var _default = exports["default"] = PatronsLogo;