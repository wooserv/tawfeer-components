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
var _element = require("@wordpress/element");
var _i18n = require("@wordpress/i18n");
var _ = require("../");
require("./style.scss");
var _classnames = _interopRequireDefault(require("classnames"));
var _jsxRuntime = require("react/jsx-runtime");
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0, _defineProperty2["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2["default"])(o), (0, _possibleConstructorReturn2["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); } /**
 * Image Upload
 */ /**
 * WordPress dependencies.
 */ /**
 * Internal dependencies.
 */ /**
 * External dependencies.
 */
var ImageUpload = /*#__PURE__*/function (_Component) {
  /**
   * Constructor.
   */
  function ImageUpload() {
    var _this;
    (0, _classCallCheck2["default"])(this, ImageUpload);
    _this = _callSuper(this, ImageUpload, arguments);
    /**
     * Open the WP media modal.
     */
    (0, _defineProperty2["default"])(_this, "openModal", function () {
      if (_this.state.frame) {
        _this.state.frame.open();
        return;
      }
      _this.setState({
        frame: wp.media({
          title: (0, _i18n.__)('Select or upload image'),
          button: {
            text: (0, _i18n.__)('Select')
          },
          library: {
            type: 'image'
          },
          multiple: false
        })
      }, function () {
        _this.state.frame.on('select', _this.handleImageSelect);
        _this.state.frame.open();
      });
    });
    /**
     * Update the state when an image is selected from the media modal.
     */
    (0, _defineProperty2["default"])(_this, "handleImageSelect", function () {
      var onChange = _this.props.onChange;
      var attachment = _this.state.frame.state().get('selection').first().toJSON();
      onChange(attachment);
    });
    /**
     * Render.
     */
    (0, _defineProperty2["default"])(_this, "render", function () {
      var _this$props = _this.props,
        buttonLabel = _this$props.buttonLabel,
        className = _this$props.className,
        disabled = _this$props.disabled,
        help = _this$props.help,
        image = _this$props.image,
        info = _this$props.info,
        isCovering = _this$props.isCovering,
        label = _this$props.label,
        onChange = _this$props.onChange,
        _this$props$style = _this$props.style,
        style = _this$props$style === void 0 ? {} : _this$props$style;
      var classes = (0, _classnames["default"])('tawfeer-image-upload__image', {
        'tawfeer-image-upload__image--has-image': image
      }, {
        'tawfeer-image-upload__image--covering': isCovering
      });
      return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        className: (0, _classnames["default"])('tawfeer-image-upload', className),
        children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          className: "tawfeer-image-upload__header",
          children: [label && /*#__PURE__*/(0, _jsxRuntime.jsx)("label", {
            className: "tawfeer-image-upload__label",
            children: label
          }), info && /*#__PURE__*/(0, _jsxRuntime.jsx)(_.InfoButton, {
            text: info
          })]
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: classes,
          style: _objectSpread({}, style),
          children: image !== null && image !== void 0 && image.url ? /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("img", {
              "data-testid": "image-upload",
              src: image.url,
              alt: (0, _i18n.__)('Image preview', 'tawfeer-plugin')
            }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
              className: "tawfeer-image-upload__controls",
              children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_.Button, {
                disabled: disabled,
                onClick: _this.openModal,
                isLink: true,
                children: (0, _i18n.__)('Replace', 'tawfeer-plugin')
              }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
                className: "sep"
              }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_.Button, {
                disabled: disabled,
                onClick: function onClick() {
                  return onChange(null);
                },
                isLink: true,
                isDestructive: true,
                children: (0, _i18n.__)('Remove', 'tawfeer-plugin')
              })]
            })]
          }) : /*#__PURE__*/(0, _jsxRuntime.jsx)(_.Button, {
            disabled: disabled,
            onClick: _this.openModal,
            isLink: true,
            children: buttonLabel ? buttonLabel : (0, _i18n.__)('Upload', 'tawfeer-plugin')
          })
        }), help && /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
          className: "tawfeer-image-upload__help",
          children: help
        })]
      });
    });
    _this.state = {
      frame: false
    };
    return _this;
  }
  (0, _inherits2["default"])(ImageUpload, _Component);
  return (0, _createClass2["default"])(ImageUpload);
}(_element.Component);
var _default = exports["default"] = ImageUpload;