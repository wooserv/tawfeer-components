/**
 * Footer
 */

/**
 * WordPress dependencies.
 */
import { ExternalLink } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

/**
 * Internal dependencies.
 */
import { PatronsLogo } from '../';
import './style.scss';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
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
    label: __('About', 'tawfeer-plugin'),
    url: 'https://tawfeer.me/',
    external: true
  }, {
    label: __('Documentation', 'tawfeer-plugin'),
    url: support,
    external: true
  }];
  if (componentsDemo) {
    footerElements.push({
      label: __('Components Demo', 'tawfeer-plugin'),
      url: componentsDemo
    });
  }
  if (setupWizard) {
    footerElements.push({
      label: __('Setup Wizard', 'tawfeer-plugin'),
      url: setupWizard
    });
  }
  if (resetUrl) {
    footerElements.push({
      label: __('Reset Tawfeer', 'tawfeer-plugin'),
      url: resetUrl
    });
  }
  if (removeStarterContent) {
    footerElements.push({
      label: __('Remove Starter Content', 'tawfeer-plugin'),
      url: removeStarterContent
    });
  }
  if (supportEmail) {
    footerElements.push({
      label: __('Contact Support', 'tawfeer-plugin'),
      url: "mailto:".concat(supportEmail)
    });
  }
  return /*#__PURE__*/_jsxs("div", {
    className: "tawfeer-footer",
    children: [!simple && /*#__PURE__*/_jsx("div", {
      className: "tawfeer-footer__inner",
      children: /*#__PURE__*/_jsx("ul", {
        children: footerElements.map(function (_ref3, index) {
          var url = _ref3.url,
            label = _ref3.label,
            external = _ref3.external;
          return /*#__PURE__*/_jsx("li", {
            children: external ? /*#__PURE__*/_jsx(ExternalLink, {
              href: url,
              children: label
            }) : /*#__PURE__*/_jsx("a", {
              href: url,
              children: label
            })
          }, index);
        })
      })
    }), /*#__PURE__*/_jsx("div", {
      className: "tawfeer-footer__logo",
      children: /*#__PURE__*/_jsx(PatronsLogo, {})
    })]
  });
};
export default Footer;