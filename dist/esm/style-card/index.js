import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/inherits";
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
/**
 * Style Card
 */

/**
 * WordPress dependencies.
 */
import { Button } from '@wordpress/components';
import { Component } from '@wordpress/element';
import { __ } from '@wordpress/i18n';

/**
 * Internal dependencies
 */
import { WebPreview } from '../';
import './style.scss';

/**
 * External dependencies
 */
import classnames from 'classnames';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
var StyleCard = /*#__PURE__*/function (_Component) {
  function StyleCard() {
    _classCallCheck(this, StyleCard);
    return _callSuper(this, StyleCard, arguments);
  }
  _inherits(StyleCard, _Component);
  return _createClass(StyleCard, [{
    key: "render",
    value:
    /**
     * Render.
     */
    function render() {
      var _this$props = this.props,
        ariaLabel = _this$props.ariaLabel,
        className = _this$props.className,
        cardTitle = _this$props.cardTitle,
        url = _this$props.url,
        image = _this$props.image,
        imageType = _this$props.imageType,
        isActive = _this$props.isActive,
        onClick = _this$props.onClick,
        id = _this$props.id;
      var classes = classnames('tawfeer-style-card', isActive && 'tawfeer-style-card__is-active', className);
      return /*#__PURE__*/_jsxs("div", {
        className: classes,
        id: id,
        children: [/*#__PURE__*/_jsxs("div", {
          className: "tawfeer-style-card__image",
          children: [imageType === 'html' ? /*#__PURE__*/_jsx("div", {
            dangerouslySetInnerHTML: image
          }) : /*#__PURE__*/_jsx("img", {
            src: image,
            alt: cardTitle + ' ' + __('Thumbnail', 'tawfeer-plugin')
          }), /*#__PURE__*/_jsxs("div", {
            className: "tawfeer-style-card__actions",
            children: [isActive ? /*#__PURE__*/_jsx("span", {
              className: "tawfeer-style-card__actions__badge",
              children: __('Selected', 'tawfeer-plugin')
            }) : /*#__PURE__*/_jsx(Button, {
              variant: "link",
              onClick: onClick,
              "aria-label": ariaLabel ? ariaLabel : __('Select', 'tawfeer-plugin') + ' ' + cardTitle,
              tabIndex: "0",
              children: __('Select', 'tawfeer-plugin')
            }), url && /*#__PURE__*/_jsx(WebPreview, {
              url: url,
              label: __('View Demo', 'tawfeer-plugin'),
              variant: "link"
            })]
          })]
        }), cardTitle && /*#__PURE__*/_jsx("div", {
          className: "tawfeer-style-card__title",
          children: cardTitle
        })]
      });
    }
  }]);
}(Component);
export default StyleCard;