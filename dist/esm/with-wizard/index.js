import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/inherits";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
/**
 * WordPress dependencies.
 */
import apiFetch from '@wordpress/api-fetch';
import { Component, createRef, Fragment } from '@wordpress/element';
import { __ } from '@wordpress/i18n';
import { home } from '@wordpress/icons';

/**
 * Internal dependencies.
 */
import { Button, Card, Modal, Notice, PluginInstaller, TawfeerIcon } from '../';
import Footer from '../footer';
import Router from '../proxied-imports/router';
import './style.scss';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
var Redirect = Router.Redirect,
  Route = Router.Route;

/**
 * Higher-Order Component to provide plugin management and error handling to Tawfeer Wizards.
 */
export default function withWizard(WrappedComponent, requiredPlugins) {
  return /*#__PURE__*/function (_Component) {
    function WrappedWithWizard(props) {
      var _this;
      _classCallCheck(this, WrappedWithWizard);
      _this = _callSuper(this, WrappedWithWizard, [props]);
      _defineProperty(_this, "componentDidMount", function () {
        // If there are no requiredPlugins, fire onWizardReady as soon as component mounts.
        if (!requiredPlugins) {
          var instance = _this.wrappedComponentRef.current;
          // eslint-disable-next-line no-unused-expressions
          instance && instance.onWizardReady && instance.onWizardReady();
        }
      });
      /**
       * Set the error. Called by Wizards when an error occurs.
       *
       * @return {Promise} Resolved after state update
       */
      _defineProperty(_this, "setError", function (error) {
        return new Promise(function (resolve) {
          _this.setState({
            error: error || null
          }, function () {
            return resolve();
          });
        });
      });
      /**
       * Render any errors that need rendering.
       *
       * @return {Component} Error UI
       */
      _defineProperty(_this, "getError", function () {
        var error = _this.state.error;
        if (!error) {
          return null;
        }
        var parsedError = _this.parseError(error);
        var level = parsedError.level;
        if ('fatal' === level) {
          return _this.getFatalError(parsedError);
        }
        return _this.getErrorNotice(parsedError);
      });
      /**
       * Get a notice-level error.
       *
       * @param {Error} error object already parsed by parseError
       * @return {Component} Error notice
       */
      _defineProperty(_this, "getErrorNotice", function (error) {
        var message = error.message;
        return /*#__PURE__*/_jsx(Notice, {
          isError: true,
          className: "tawfeer-wizard__above-header",
          noticeText: message,
          rawHTML: true
        });
      });
      /**
       * Get a fatal-level error.
       *
       * @param {Error} error object already parsed by parseError
       * @return {Component} React object
       */
      _defineProperty(_this, "getFatalError", function (error) {
        var fallbackURL = _this.getFallbackURL();
        if (!fallbackURL) {
          return null;
        }
        var message = error.message;
        return /*#__PURE__*/_jsxs(Modal, {
          title: __('Unrecoverable error'),
          onRequestClose: function onRequestClose() {
            return window.location = fallbackURL;
          },
          children: [/*#__PURE__*/_jsx(Notice, {
            noticeText: message,
            isError: true,
            rawHTML: true
          }), /*#__PURE__*/_jsx(Card, {
            buttonsCard: true,
            noBorder: true,
            className: "justify-end",
            children: /*#__PURE__*/_jsx(Button, {
              isPrimary: true,
              href: fallbackURL,
              children: __('Return to Dashboard', 'tawfeer-plugin')
            })
          })]
        });
      });
      /**
       * Get all the relevant info out of a raw API error response.
       *
       * @param {Object} error error object
       * @return {Object} Error object with relevant fields and defaults
       */
      _defineProperty(_this, "parseError", function (error) {
        var data = error.data,
          message = error.message,
          code = error.code;
        var level = 'fatal';
        if (!!data && 'level' in data) {
          level = data.level;
        } else if ('rest_invalid_param' === code) {
          level = 'notice';
        }
        return {
          message: message,
          level: level
        };
      });
      /**
       * Called when plugin installation is complete. Updates state and calls onWizardReady on the wrapped component.
       */
      _defineProperty(_this, "pluginInstallationStatus", function (_ref) {
        var complete = _ref.complete;
        if (_this.state.loading) {
          _this.doneLoading();
        }
        var instance = _this.wrappedComponentRef.current;
        _this.setState({
          complete: complete
        }, function () {
          // eslint-disable-next-line no-unused-expressions
          complete && instance && instance.onWizardReady && instance.onWizardReady();
        });
      });
      /**
       * Begin loading.
       */
      _defineProperty(_this, "startLoading", function (quiet) {
        if (quiet) {
          _this.setState(function (state) {
            return {
              quietLoading: state.quietLoading + 1
            };
          });
        } else {
          _this.setState(function (state) {
            return {
              loading: state.loading + 1
            };
          });
        }
      });
      /**
       * End loading.
       */
      _defineProperty(_this, "doneLoading", function (quiet) {
        if (quiet) {
          _this.setState(function (state) {
            return {
              quietLoading: state.quietLoading - 1
            };
          });
        } else {
          _this.setState(function (state) {
            return {
              loading: state.loading - 1
            };
          });
        }
      });
      /**
       * Replacement for core apiFetch that automatically manages wizard loading UI.
       */
      _defineProperty(_this, "wizardApiFetch", function (args) {
        var quiet = args.quiet;
        _this.startLoading(quiet);
        return new Promise(function (resolve, reject) {
          apiFetch(args).then(function (response) {
            _this.doneLoading(quiet);
            resolve(response);
          })["catch"](function (error) {
            _this.doneLoading(quiet);
            reject(error);
          });
        });
      });
      /**
       * Render a Route that checks for plugin installation requirements, and redirects to '/' when all are done.
       *
       * @return {void}
       */
      _defineProperty(_this, "pluginRequirements", function () {
        var complete = _this.state.complete;
        /* After all plugins are loaded, redirect to / (this could be configurable) */
        if (complete) {
          return /*#__PURE__*/_jsx(Redirect, {
            from: "/plugin-requirements",
            to: "/"
          });
        }
        return /*#__PURE__*/_jsx(Route, {
          path: "/",
          render: function render() {
            return /*#__PURE__*/_jsxs(Fragment, {
              children: [complete !== null && /*#__PURE__*/_jsx("div", {
                className: "tawfeer-wizard__header",
                children: /*#__PURE__*/_jsx("div", {
                  className: "tawfeer-wizard__header__inner",
                  children: /*#__PURE__*/_jsxs("div", {
                    className: "tawfeer-wizard__title",
                    children: [/*#__PURE__*/_jsx(Button, {
                      isLink: true,
                      href: tawfeer_urls.dashboard,
                      label: __('Return to Dashboard', 'tawfeer-plugin'),
                      showTooltip: true,
                      icon: home,
                      iconSize: 36,
                      children: /*#__PURE__*/_jsx(TawfeerIcon, {
                        size: 36
                      })
                    }), /*#__PURE__*/_jsx("div", {
                      children: /*#__PURE__*/_jsx("h2", {
                        children: requiredPlugins.length > 1 ? __('Required plugins', 'tawfeer-plugin') : __('Required plugin', 'tawfeer-plugin')
                      })
                    })]
                  })
                })
              }), /*#__PURE__*/_jsx("div", {
                className: "tawfeer-wizard tawfeer-wizard__content",
                children: /*#__PURE__*/_jsx(PluginInstaller, {
                  plugins: requiredPlugins,
                  onStatus: function onStatus(status) {
                    return _this.pluginInstallationStatus(status);
                  }
                })
              })]
            });
          }
        });
      });
      _defineProperty(_this, "getFallbackURL", function () {
        if (typeof tawfeer_urls !== 'undefined') {
          return tawfeer_urls.dashboard;
        }
      });
      _this.state = {
        complete: null,
        error: null,
        loading: requiredPlugins && requiredPlugins.length > 0 ? 1 : 0,
        quietLoading: false
      };
      _this.wrappedComponentRef = createRef();
      return _this;
    }
    _inherits(WrappedWithWizard, _Component);
    return _createClass(WrappedWithWizard, [{
      key: "render",
      value:
      /**
       * Render.
       */
      function render() {
        var simpleFooter = this.props.simpleFooter;
        var _this$state = this.state,
          loading = _this$state.loading,
          quietLoading = _this$state.quietLoading,
          error = _this$state.error;
        var loadingClasses = [loading ? 'tawfeer-wizard__is-loading' : 'tawfeer-wizard__is-loaded'];
        if (quietLoading) {
          loadingClasses.push('tawfeer-wizard__is-loading-quiet');
        }
        return /*#__PURE__*/_jsxs(Fragment, {
          children: [this.getError(), /*#__PURE__*/_jsx("div", {
            className: loadingClasses.join(' '),
            children: /*#__PURE__*/_jsx(WrappedComponent, _objectSpread({
              pluginRequirements: requiredPlugins && this.pluginRequirements(),
              clearError: this.clearError,
              getError: this.getError,
              errorData: error,
              setError: this.setError,
              isLoading: loading,
              startLoading: this.startLoading,
              doneLoading: this.doneLoading,
              wizardApiFetch: this.wizardApiFetch,
              ref: this.wrappedComponentRef
            }, this.props))
          }), !loading && /*#__PURE__*/_jsx(Footer, {
            simple: simpleFooter
          })]
        });
      }
    }]);
  }(Component);
}