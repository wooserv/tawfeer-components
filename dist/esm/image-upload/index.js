import _createClass from "@babel/runtime/helpers/createClass";
import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/inherits";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
/**
 * Image Upload
 */

/**
 * WordPress dependencies.
 */
import { Component } from '@wordpress/element';
import { __ } from '@wordpress/i18n';

/**
 * Internal dependencies.
 */
import { Button, InfoButton } from '../';
import './style.scss';

/**
 * External dependencies.
 */
import classnames from 'classnames';
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
var ImageUpload = /*#__PURE__*/function (_Component) {
  /**
   * Constructor.
   */
  function ImageUpload() {
    var _this;
    _classCallCheck(this, ImageUpload);
    _this = _callSuper(this, ImageUpload, arguments);
    /**
     * Open the WP media modal.
     */
    _defineProperty(_this, "openModal", function () {
      if (_this.state.frame) {
        _this.state.frame.open();
        return;
      }
      _this.setState({
        frame: wp.media({
          title: __('Select or upload image'),
          button: {
            text: __('Select')
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
    _defineProperty(_this, "handleImageSelect", function () {
      var onChange = _this.props.onChange;
      var attachment = _this.state.frame.state().get('selection').first().toJSON();
      onChange(attachment);
    });
    /**
     * Render.
     */
    _defineProperty(_this, "render", function () {
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
      var classes = classnames('tawfeer-image-upload__image', {
        'tawfeer-image-upload__image--has-image': image
      }, {
        'tawfeer-image-upload__image--covering': isCovering
      });
      return /*#__PURE__*/_jsxs("div", {
        className: classnames('tawfeer-image-upload', className),
        children: [/*#__PURE__*/_jsxs("div", {
          className: "tawfeer-image-upload__header",
          children: [label && /*#__PURE__*/_jsx("label", {
            className: "tawfeer-image-upload__label",
            children: label
          }), info && /*#__PURE__*/_jsx(InfoButton, {
            text: info
          })]
        }), /*#__PURE__*/_jsx("div", {
          className: classes,
          style: _objectSpread({}, style),
          children: image !== null && image !== void 0 && image.url ? /*#__PURE__*/_jsxs(_Fragment, {
            children: [/*#__PURE__*/_jsx("img", {
              "data-testid": "image-upload",
              src: image.url,
              alt: __('Image preview', 'tawfeer-plugin')
            }), /*#__PURE__*/_jsxs("div", {
              className: "tawfeer-image-upload__controls",
              children: [/*#__PURE__*/_jsx(Button, {
                disabled: disabled,
                onClick: _this.openModal,
                isLink: true,
                children: __('Replace', 'tawfeer-plugin')
              }), /*#__PURE__*/_jsx("span", {
                className: "sep"
              }), /*#__PURE__*/_jsx(Button, {
                disabled: disabled,
                onClick: function onClick() {
                  return onChange(null);
                },
                isLink: true,
                isDestructive: true,
                children: __('Remove', 'tawfeer-plugin')
              })]
            })]
          }) : /*#__PURE__*/_jsx(Button, {
            disabled: disabled,
            onClick: _this.openModal,
            isLink: true,
            children: buttonLabel ? buttonLabel : __('Upload', 'tawfeer-plugin')
          })
        }), help && /*#__PURE__*/_jsx("p", {
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
  _inherits(ImageUpload, _Component);
  return _createClass(ImageUpload);
}(Component);
export default ImageUpload;