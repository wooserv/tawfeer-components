import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/inherits";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
/**
 * WordPress dependencies.
 */
import { Button, ButtonGroup } from '@wordpress/components';
import { Component, createPortal, createRef, Fragment } from '@wordpress/element';
import { __ } from '@wordpress/i18n';
import { closeSmall, desktop, mobile, tablet } from '@wordpress/icons';

/**
 * Internal dependencies.
 */
import { Waiting } from '../';
import './style.scss';

/**
 * External dependencies.
 */
import classnames from 'classnames';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
var PORTAL_PARENT_ID = 'tawfeer-components-web-preview-wrapper';

/**
 * Web Preview. A component to preview a website in an iframe, with device sizing options.
 */
var WebPreview = /*#__PURE__*/function (_Component) {
  function WebPreview(props) {
    var _this;
    _classCallCheck(this, WebPreview);
    _this = _callSuper(this, WebPreview, [props]);
    _defineProperty(_this, "state", {
      device: 'desktop',
      loaded: false,
      isPreviewVisible: false
    });
    /**
     * Create JSX for the modal
     */
    _defineProperty(_this, "getWebPreviewModal", function () {
      var _this$props = _this.props,
        _this$props$beforeLoa = _this$props.beforeLoad,
        beforeLoad = _this$props$beforeLoa === void 0 ? function () {} : _this$props$beforeLoa,
        _this$props$onClose = _this$props.onClose,
        onClose = _this$props$onClose === void 0 ? function () {} : _this$props$onClose,
        url = _this$props.url;
      var _this$state = _this.state,
        device = _this$state.device,
        loaded = _this$state.loaded,
        isPreviewVisible = _this$state.isPreviewVisible;
      if (!_this.modalDOMElement || !isPreviewVisible) {
        return null;
      }
      var classes = classnames('tawfeer-web-preview', device, loaded && 'is-loaded');
      beforeLoad();
      return createPortal(/*#__PURE__*/_jsx("div", {
        className: classes,
        children: /*#__PURE__*/_jsxs("div", {
          className: "tawfeer-web-preview__interior",
          children: [/*#__PURE__*/_jsxs("div", {
            className: "tawfeer-web-preview__toolbar",
            children: [/*#__PURE__*/_jsx("div", {
              className: "tawfeer-web-preview__toolbar-left",
              children: /*#__PURE__*/_jsxs(ButtonGroup, {
                children: [/*#__PURE__*/_jsx(Button, {
                  onClick: function onClick() {
                    return _this.setState({
                      device: 'desktop'
                    });
                  },
                  variant: 'desktop' === device && 'primary',
                  icon: desktop,
                  label: __('Preview Desktop Size', 'tawfeer-plugin')
                }), /*#__PURE__*/_jsx(Button, {
                  onClick: function onClick() {
                    return _this.setState({
                      device: 'tablet'
                    });
                  },
                  variant: 'tablet' === device && 'primary',
                  icon: tablet,
                  label: __('Preview Tablet Size', 'tawfeer-plugin')
                }), /*#__PURE__*/_jsx(Button, {
                  onClick: function onClick() {
                    return _this.setState({
                      device: 'phone'
                    });
                  },
                  variant: 'phone' === device && 'primary',
                  icon: mobile,
                  label: __('Preview Phone Size', 'tawfeer-plugin')
                })]
              })
            }), /*#__PURE__*/_jsx("div", {
              className: "tawfeer-web-preview__toolbar-right",
              children: /*#__PURE__*/_jsx(Button, {
                onClick: function onClick() {
                  onClose();
                  _this.setState({
                    isPreviewVisible: false,
                    loaded: false
                  });
                },
                icon: closeSmall,
                label: __('Close Preview', 'tawfeer-plugin')
              })
            })]
          }), /*#__PURE__*/_jsxs("div", {
            className: "tawfeer-web-preview__content",
            children: [!loaded && /*#__PURE__*/_jsxs("div", {
              className: "tawfeer-web-preview__is-waiting",
              children: [/*#__PURE__*/_jsx(Waiting, {
                isLeft: true
              }), __('Loading…', 'tawfeer-plugin')]
            }), /*#__PURE__*/_jsx("iframe", {
              ref: _this.iframeRef,
              title: "web-preview",
              src: url,
              onLoad: function onLoad() {
                _this.setState({
                  loaded: true
                });
                _this.props.onLoad(_this.iframeRef.current);
              }
            })]
          })]
        })
      }), _this.modalDOMElement);
    });
    _defineProperty(_this, "showPreview", function () {
      _this.setState({
        isPreviewVisible: true
      });
    });
    _this.iframeRef = createRef();
    return _this;
  }

  /**
   * If a div with id PORTAL_PARENT_ID exists, assign it to class field.
   * If not, create it and append to the body.
   */
  _inherits(WebPreview, _Component);
  return _createClass(WebPreview, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var existingDOMElement = document.getElementById(PORTAL_PARENT_ID);
      this.modalDOMElement = existingDOMElement || document.createElement('div');
      if (!existingDOMElement) {
        this.modalDOMElement.id = PORTAL_PARENT_ID;
        document.body.appendChild(this.modalDOMElement);
      }
    }

    /**
     * Add or remove applicable body classes
     */
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      if (this.state.isPreviewVisible === true) {
        document.body.classList.add('tawfeer-web-preview--open');
      } else {
        document.body.classList.remove('tawfeer-web-preview--open');
      }
    }
  }, {
    key: "render",
    value:
    /**
     * Render.
     */
    function render() {
      var _this$props2 = this.props,
        label = _this$props2.label,
        variant = _this$props2.variant,
        renderButton = _this$props2.renderButton;
      return /*#__PURE__*/_jsxs(Fragment, {
        children: [renderButton ? renderButton({
          showPreview: this.showPreview
        }) : /*#__PURE__*/_jsx(Button, {
          variant: variant,
          onClick: this.showPreview,
          tabIndex: "0",
          children: label
        }), this.getWebPreviewModal()]
      });
    }
  }]);
}(Component);
WebPreview.defaultProps = {
  url: '//tawfeer.me',
  label: __('Preview', 'tawfeer-plugin'),
  onLoad: function onLoad() {}
};
export default WebPreview;