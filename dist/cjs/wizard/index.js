"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _classnames = _interopRequireDefault(require("classnames"));
var _data = require("@wordpress/data");
var _element = require("@wordpress/element");
var _i18n = require("@wordpress/i18n");
var _icons = require("@wordpress/icons");
var _ = require("../");
var _router = _interopRequireDefault(require("../proxied-imports/router"));
var _WizardError = _interopRequireDefault(require("./components/WizardError"));
var _store = _interopRequireWildcard(require("./store"));
var _utils = require("./store/utils");
var _jsxRuntime = require("react/jsx-runtime");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
/**
 * External dependencies.
 */

/**
 * WordPress dependencies.
 */

/**
 * Internal dependencies
 */

(0, _store["default"])();
var HashRouter = _router["default"].HashRouter,
  Redirect = _router["default"].Redirect,
  Route = _router["default"].Route,
  Switch = _router["default"].Switch;
var Wizard = function Wizard(_ref) {
  var _ref$sections = _ref.sections,
    sections = _ref$sections === void 0 ? [] : _ref$sections,
    apiSlug = _ref.apiSlug,
    headerText = _ref.headerText,
    subHeaderText = _ref.subHeaderText,
    hasSimpleFooter = _ref.hasSimpleFooter,
    className = _ref.className,
    renderAboveSections = _ref.renderAboveSections,
    _ref$requiredPlugins = _ref.requiredPlugins,
    requiredPlugins = _ref$requiredPlugins === void 0 ? [] : _ref$requiredPlugins;
  var isLoading = (0, _data.useSelect)(function (select) {
    return select(_store.WIZARD_STORE_NAMESPACE).isLoading();
  });
  var isQuietLoading = (0, _data.useSelect)(function (select) {
    return select(_store.WIZARD_STORE_NAMESPACE).isQuietLoading();
  });

  // Trigger initial data fetch. Some sections might not use the wizard data,
  // but for consistency, fetching is triggered regardless of the section.
  (0, _data.useSelect)(function (select) {
    return select(_store.WIZARD_STORE_NAMESPACE).getWizardAPIData(apiSlug);
  });
  var displayedSections = sections.filter(function (section) {
    return !section.isHidden;
  });
  var _useState = (0, _element.useState)(requiredPlugins.length === 0),
    _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
    pluginRequirementsSatisfied = _useState2[0],
    setPluginRequirementsSatisfied = _useState2[1];
  if (!pluginRequirementsSatisfied) {
    headerText = requiredPlugins.length > 1 ? (0, _i18n.__)('Required plugins', 'tawfeer-plugin') : (0, _i18n.__)('Required plugin', 'tawfeer-plugin');
    displayedSections = [{
      path: '/',
      render: function render() {
        return /*#__PURE__*/(0, _jsxRuntime.jsx)(_.PluginInstaller, {
          plugins: requiredPlugins,
          onStatus: function onStatus(_ref2) {
            var complete = _ref2.complete;
            return setPluginRequirementsSatisfied(complete);
          }
        });
      }
    }];
  }
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: (0, _classnames["default"])(isLoading ? 'tawfeer-wizard__is-loading' : 'tawfeer-wizard__is-loaded', {
        'tawfeer-wizard__is-loading-quiet': isQuietLoading
      }),
      children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(HashRouter, {
        hashType: "slash",
        children: [tawfeer_aux_data.is_debug_mode && /*#__PURE__*/(0, _jsxRuntime.jsx)(_.Notice, {
          debugMode: true
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: "bg-white",
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
            className: "tawfeer-wizard__header__inner",
            children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
              className: "tawfeer-wizard__title",
              children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_.Button, {
                isLink: true,
                href: tawfeer_urls.dashboard,
                label: (0, _i18n.__)('Return to Dashboard', 'tawfeer-plugin'),
                showTooltip: true,
                icon: _icons.category,
                iconSize: 36,
                children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_.TawfeerIcon, {
                  size: 36
                })
              }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
                children: [headerText && /*#__PURE__*/(0, _jsxRuntime.jsx)("h2", {
                  children: headerText
                }), subHeaderText && /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
                  children: subHeaderText
                })]
              })]
            })
          })
        }), displayedSections.length > 1 && /*#__PURE__*/(0, _jsxRuntime.jsx)(_.TabbedNavigation, {
          items: displayedSections,
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_WizardError["default"], {})
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_.HandoffMessage, {}), /*#__PURE__*/(0, _jsxRuntime.jsxs)(Switch, {
          children: [displayedSections.map(function (section, index) {
            var SectionComponent = section.render;
            return /*#__PURE__*/(0, _jsxRuntime.jsx)(Route, {
              path: section.path,
              children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
                className: (0, _classnames["default"])('tawfeer-wizard tawfeer-wizard__content', className),
                children: ['function' === typeof renderAboveSections ? renderAboveSections() : null, /*#__PURE__*/(0, _jsxRuntime.jsx)(SectionComponent, {})]
              })
            }, index);
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)(Redirect, {
            to: displayedSections[0].path
          })]
        })]
      })
    }), !isLoading && /*#__PURE__*/(0, _jsxRuntime.jsx)(_.Footer, {
      simple: hasSimpleFooter
    })]
  });
};
Wizard.useWizardData = _utils.useWizardData;
Wizard.STORE_NAMESPACE = _store.WIZARD_STORE_NAMESPACE;
var _default = exports["default"] = Wizard;