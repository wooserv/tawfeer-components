"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));
var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));
var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _apiFetch = _interopRequireDefault(require("@wordpress/api-fetch"));
var _element = require("@wordpress/element");
var _i18n = require("@wordpress/i18n");
var _ = require("../");
var _classnames = _interopRequireDefault(require("classnames"));
var _assign = _interopRequireDefault(require("lodash/assign"));
var _jsxRuntime = require("react/jsx-runtime");
var _excluded = ["className", "children", "compact", "useModal", "modalTitle", "modalBody", "onReady", "editLink"];
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0, _defineProperty2["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2["default"])(o), (0, _possibleConstructorReturn2["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); } /**
 * Handoff
 */ /**
 * WordPress dependencies.
 */ /**
 * Internal dependencies.
 */ /**
 * External dependencies.
 */
var Handoff = /*#__PURE__*/function (_Component) {
  function Handoff() {
    var _this;
    (0, _classCallCheck2["default"])(this, Handoff);
    _this = _callSuper(this, Handoff, arguments);
    (0, _defineProperty2["default"])(_this, "componentDidMount", function () {
      _this._isMounted = true;
      var plugin = _this.props.plugin;
      _this.retrievePluginInfo(plugin);
    });
    (0, _defineProperty2["default"])(_this, "componentWillUnmount", function () {
      _this._isMounted = false;
    });
    (0, _defineProperty2["default"])(_this, "retrievePluginInfo", function (plugin) {
      var onReady = _this.props.onReady;
      (0, _apiFetch["default"])({
        path: '/tawfeer/v1/plugins/' + plugin
      }).then(function (pluginInfo) {
        if (_this._isMounted) {
          onReady(pluginInfo);
          _this.setState({
            pluginInfo: pluginInfo
          });
        }
      });
    });
    (0, _defineProperty2["default"])(_this, "textForPlugin", function (pluginInfo) {
      var defaults = {
        modalBody: null,
        modalTitle: pluginInfo.Name && "".concat((0, _i18n.__)('Manage', 'tawfeer-plugin'), " ").concat(pluginInfo.Name),
        primaryButton: pluginInfo.Name && "".concat((0, _i18n.__)('Manage', 'tawfeer-plugin'), " ").concat(pluginInfo.Name),
        primaryModalButton: (0, _i18n.__)('Manage', 'tawfeer-plugin'),
        dismissModalButton: (0, _i18n.__)('Dismiss', 'tawfeer-plugin')
      };
      return (0, _assign["default"])(defaults, _this.props);
    });
    (0, _defineProperty2["default"])(_this, "goToPlugin", function (plugin) {
      var _this$props = _this.props,
        editLink = _this$props.editLink,
        showOnBlockEditor = _this$props.showOnBlockEditor;
      (0, _apiFetch["default"])({
        path: '/tawfeer/v1/plugins/' + plugin + '/handoff',
        method: 'POST',
        data: {
          editLink: editLink,
          handoffReturnUrl: window && window.location.href,
          showOnBlockEditor: showOnBlockEditor ? true : false
        }
      }).then(function (response) {
        window.location.href = response.HandoffLink;
      });
    });
    _this.state = {
      pluginInfo: [],
      showModal: false
    };
    return _this;
  }
  (0, _inherits2["default"])(Handoff, _Component);
  return (0, _createClass2["default"])(Handoff, [{
    key: "render",
    value:
    /**
     * Render.
     */
    function render() {
      var _this2 = this;
      var _this$props2 = this.props,
        className = _this$props2.className,
        children = _this$props2.children,
        compact = _this$props2.compact,
        useModal = _this$props2.useModal,
        _modalTitle = _this$props2.modalTitle,
        _modalBody = _this$props2.modalBody,
        onReady = _this$props2.onReady,
        editLink = _this$props2.editLink,
        otherProps = (0, _objectWithoutProperties2["default"])(_this$props2, _excluded);
      var _this$state = this.state,
        pluginInfo = _this$state.pluginInfo,
        showModal = _this$state.showModal;
      var _this$textForPlugin = this.textForPlugin(pluginInfo),
        modalBody = _this$textForPlugin.modalBody,
        modalTitle = _this$textForPlugin.modalTitle,
        primaryButton = _this$textForPlugin.primaryButton,
        primaryModalButton = _this$textForPlugin.primaryModalButton,
        dismissModalButton = _this$textForPlugin.dismissModalButton;
      var Configured = pluginInfo.Configured,
        Name = pluginInfo.Name,
        Slug = pluginInfo.Slug,
        Status = pluginInfo.Status;
      var classes = (0, _classnames["default"])(Configured && 'is-configured', className);
      return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_element.Fragment, {
        children: [Name && 'active' === Status && /*#__PURE__*/(0, _jsxRuntime.jsx)(_.Button, _objectSpread(_objectSpread({
          className: classes,
          isSecondary: !otherProps.isPrimary && !otherProps.isTertiary && !otherProps.isLink
        }, otherProps), {}, {
          onClick: function onClick() {
            return useModal ? _this2.setState({
              showModal: true
            }) : _this2.goToPlugin(Slug);
          },
          children: children ? children : primaryButton
        })), Name && 'active' !== Status && /*#__PURE__*/(0, _jsxRuntime.jsx)(_.Button, _objectSpread(_objectSpread({
          className: classes,
          variant: "secondary",
          disabled: true
        }, otherProps), {}, {
          children: Name + (0, _i18n.__)(' not installed', 'tawfeer-plugin')
        })), !Name && /*#__PURE__*/(0, _jsxRuntime.jsx)(_.Button, _objectSpread(_objectSpread({
          className: classes,
          isSecondary: !otherProps.isPrimary && !otherProps.isTertiary && !otherProps.isLink
        }, otherProps), {}, {
          children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_element.Fragment, {
            children: [!compact && /*#__PURE__*/(0, _jsxRuntime.jsx)(_.Waiting, {
              isLeft: true
            }), (0, _i18n.__)('Retrieving Plugin Info', 'tawfeer-plugin')]
          })
        })), showModal && /*#__PURE__*/(0, _jsxRuntime.jsxs)(_.Modal, {
          title: modalTitle,
          onRequestClose: function onRequestClose() {
            return _this2.setState({
              showModal: false
            });
          },
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
            children: modalBody
          }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_.Card, {
            buttonsCard: true,
            noBorder: true,
            className: "justify-end",
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_.Button, {
              variant: "secondary",
              onClick: function onClick() {
                return _this2.setState({
                  showModal: false
                });
              },
              children: dismissModalButton
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_.Button, {
              variant: "primary",
              onClick: function onClick() {
                return _this2.goToPlugin(Slug);
              },
              children: primaryModalButton
            })]
          })]
        })]
      });
    }
  }]);
}(_element.Component);
Handoff.defaultProps = {
  onReady: function onReady() {}
};
var _default = exports["default"] = Handoff;