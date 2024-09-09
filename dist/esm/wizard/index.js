import _slicedToArray from "@babel/runtime/helpers/slicedToArray";
/**
 * External dependencies.
 */
import classnames from 'classnames';

/**
 * WordPress dependencies.
 */
import { useSelect } from '@wordpress/data';
import { useState } from '@wordpress/element';
import { __ } from '@wordpress/i18n';
import { category } from '@wordpress/icons';

/**
 * Internal dependencies
 */
import { Button, Footer, HandoffMessage, Notice, PluginInstaller, TabbedNavigation, TawfeerIcon } from '../';
import Router from '../proxied-imports/router';
import WizardError from './components/WizardError';
import registerStore, { WIZARD_STORE_NAMESPACE } from './store';
import { useWizardData } from './store/utils';
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
registerStore();
var HashRouter = Router.HashRouter,
  Redirect = Router.Redirect,
  Route = Router.Route,
  Switch = Router.Switch;
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
  var isLoading = useSelect(function (select) {
    return select(WIZARD_STORE_NAMESPACE).isLoading();
  });
  var isQuietLoading = useSelect(function (select) {
    return select(WIZARD_STORE_NAMESPACE).isQuietLoading();
  });

  // Trigger initial data fetch. Some sections might not use the wizard data,
  // but for consistency, fetching is triggered regardless of the section.
  useSelect(function (select) {
    return select(WIZARD_STORE_NAMESPACE).getWizardAPIData(apiSlug);
  });
  var displayedSections = sections.filter(function (section) {
    return !section.isHidden;
  });
  var _useState = useState(requiredPlugins.length === 0),
    _useState2 = _slicedToArray(_useState, 2),
    pluginRequirementsSatisfied = _useState2[0],
    setPluginRequirementsSatisfied = _useState2[1];
  if (!pluginRequirementsSatisfied) {
    headerText = requiredPlugins.length > 1 ? __('Required plugins', 'tawfeer-plugin') : __('Required plugin', 'tawfeer-plugin');
    displayedSections = [{
      path: '/',
      render: function render() {
        return /*#__PURE__*/_jsx(PluginInstaller, {
          plugins: requiredPlugins,
          onStatus: function onStatus(_ref2) {
            var complete = _ref2.complete;
            return setPluginRequirementsSatisfied(complete);
          }
        });
      }
    }];
  }
  return /*#__PURE__*/_jsxs(_Fragment, {
    children: [/*#__PURE__*/_jsx("div", {
      className: classnames(isLoading ? 'tawfeer-wizard__is-loading' : 'tawfeer-wizard__is-loaded', {
        'tawfeer-wizard__is-loading-quiet': isQuietLoading
      }),
      children: /*#__PURE__*/_jsxs(HashRouter, {
        hashType: "slash",
        children: [tawfeer_aux_data.is_debug_mode && /*#__PURE__*/_jsx(Notice, {
          debugMode: true
        }), /*#__PURE__*/_jsx("div", {
          className: "bg-white",
          children: /*#__PURE__*/_jsx("div", {
            className: "tawfeer-wizard__header__inner",
            children: /*#__PURE__*/_jsxs("div", {
              className: "tawfeer-wizard__title",
              children: [/*#__PURE__*/_jsx(Button, {
                isLink: true,
                href: tawfeer_urls.dashboard,
                label: __('Return to Dashboard', 'tawfeer-plugin'),
                showTooltip: true,
                icon: category,
                iconSize: 36,
                children: /*#__PURE__*/_jsx(TawfeerIcon, {
                  size: 36
                })
              }), /*#__PURE__*/_jsxs("div", {
                children: [headerText && /*#__PURE__*/_jsx("h2", {
                  children: headerText
                }), subHeaderText && /*#__PURE__*/_jsx("span", {
                  children: subHeaderText
                })]
              })]
            })
          })
        }), displayedSections.length > 1 && /*#__PURE__*/_jsx(TabbedNavigation, {
          items: displayedSections,
          children: /*#__PURE__*/_jsx(WizardError, {})
        }), /*#__PURE__*/_jsx(HandoffMessage, {}), /*#__PURE__*/_jsxs(Switch, {
          children: [displayedSections.map(function (section, index) {
            var SectionComponent = section.render;
            return /*#__PURE__*/_jsx(Route, {
              path: section.path,
              children: /*#__PURE__*/_jsxs("div", {
                className: classnames('tawfeer-wizard tawfeer-wizard__content', className),
                children: ['function' === typeof renderAboveSections ? renderAboveSections() : null, /*#__PURE__*/_jsx(SectionComponent, {})]
              })
            }, index);
          }), /*#__PURE__*/_jsx(Redirect, {
            to: displayedSections[0].path
          })]
        })]
      })
    }), !isLoading && /*#__PURE__*/_jsx(Footer, {
      simple: hasSimpleFooter
    })]
  });
};
Wizard.useWizardData = useWizardData;
Wizard.STORE_NAMESPACE = WIZARD_STORE_NAMESPACE;
export default Wizard;