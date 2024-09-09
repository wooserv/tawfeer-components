"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _components = require("@wordpress/components");
var _i18n = require("@wordpress/i18n");
var _ = require("../");
require("./style.scss");
var _jsxRuntime = require("react/jsx-runtime");
/**
 * Footer
 */

/**
 * WordPress dependencies.
 */

/**
 * Internal dependencies.
 */

var Footer = function Footer(_ref) {
  var simple = _ref.simple;
  var _ref2 = window.tawfeer_urls || {},
    _ref2$components_demo = _ref2.components_demo,
    componentsDemo = _ref2$components_demo === void 0 ? false : _ref2$components_demo,
    _ref2$support = _ref2.support,
    support = _ref2$support === void 0 ? false : _ref2$support,
    _ref2$setup_wizard = _ref2.setup_wizard,
    setupWizard = _ref2$setup_wizard === void 0 ? false : _ref2$setup_wizard,
    _ref2$reset_url = _ref2.reset_url,
    resetUrl = _ref2$reset_url === void 0 ? false : _ref2$reset_url,
    _ref2$plugin_version = _ref2.plugin_version,
    pluginVersion = _ref2$plugin_version === void 0 ? {
      label: 'Tawfeer'
    } : _ref2$plugin_version,
    _ref2$remove_starter_ = _ref2.remove_starter_content,
    removeStarterContent = _ref2$remove_starter_ === void 0 ? false : _ref2$remove_starter_,
    supportEmail = _ref2.support_email;
  var footerElements = [{
    label: pluginVersion.label,
    url: 'https://tawfeer.me/category/release-notes/',
    external: true
  }, {
    label: (0, _i18n.__)('About', 'tawfeer-plugin'),
    url: 'https://tawfeer.me/',
    external: true
  }, {
    label: (0, _i18n.__)('Documentation', 'tawfeer-plugin'),
    url: support,
    external: true
  }];
  if (componentsDemo) {
    footerElements.push({
      label: (0, _i18n.__)('Components Demo', 'tawfeer-plugin'),
      url: componentsDemo
    });
  }
  if (setupWizard) {
    footerElements.push({
      label: (0, _i18n.__)('Setup Wizard', 'tawfeer-plugin'),
      url: setupWizard
    });
  }
  if (resetUrl) {
    footerElements.push({
      label: (0, _i18n.__)('Reset Tawfeer', 'tawfeer-plugin'),
      url: resetUrl
    });
  }
  if (removeStarterContent) {
    footerElements.push({
      label: (0, _i18n.__)('Remove Starter Content', 'tawfeer-plugin'),
      url: removeStarterContent
    });
  }
  if (supportEmail) {
    footerElements.push({
      label: (0, _i18n.__)('Contact Support', 'tawfeer-plugin'),
      url: "mailto:".concat(supportEmail)
    });
  }
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    className: "tawfeer-footer",
    children: [!simple && /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: "tawfeer-footer__inner",
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)("ul", {
        children: footerElements.map(function (_ref3, index) {
          var url = _ref3.url,
            label = _ref3.label,
            external = _ref3.external;
          return /*#__PURE__*/(0, _jsxRuntime.jsx)("li", {
            children: external ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.ExternalLink, {
              href: url,
              children: label
            }) : /*#__PURE__*/(0, _jsxRuntime.jsx)("a", {
              href: url,
              children: label
            })
          }, index);
        })
      })
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: "tawfeer-footer__logo",
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_.PatronsLogo, {})
    })]
  });
};
var _default = exports["default"] = Footer;