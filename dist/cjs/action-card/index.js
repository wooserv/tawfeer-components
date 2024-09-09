"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));
var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));
var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _components = require("@wordpress/components");
var _element = require("@wordpress/element");
var _icons = require("@wordpress/icons");
var _ = require("../");
require("./style.scss");
var _classnames = _interopRequireDefault(require("classnames"));
var _jsxRuntime = require("react/jsx-runtime");
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0, _defineProperty2["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2["default"])(o), (0, _possibleConstructorReturn2["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); } /**
 * Action Card
 */ /**
 * WordPress dependencies
 */ /**
 * Internal dependencies
 */ /**
 * External dependencies
 */
var ActionCard = /*#__PURE__*/function (_Component) {
  function ActionCard() {
    var _this;
    (0, _classCallCheck2["default"])(this, ActionCard);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _callSuper(this, ActionCard, [].concat(args));
    (0, _defineProperty2["default"])(_this, "state", {
      expanded: false
    });
    return _this;
  }
  (0, _inherits2["default"])(ActionCard, _Component);
  return (0, _createClass2["default"])(ActionCard, [{
    key: "componentDidUpdate",
    value:
    /**
     * When the collapse prop is updated to true, collapse the card if already expanded.
     */
    function componentDidUpdate(prevProps) {
      if (!prevProps.collapse && this.props.collapse && this.state.expanded) {
        this.setState({
          expanded: false
        });
      }
    }

    /**
     * Render.
     */
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;
      var _this$props = this.props,
        badge = _this$props.badge,
        className = _this$props.className,
        checkbox = _this$props.checkbox,
        children = _this$props.children,
        disabled = _this$props.disabled,
        title = _this$props.title,
        description = _this$props.description,
        handoff = _this$props.handoff,
        editLink = _this$props.editLink,
        href = _this$props.href,
        notification = _this$props.notification,
        notificationLevel = _this$props.notificationLevel,
        notificationHTML = _this$props.notificationHTML,
        actionContent = _this$props.actionContent,
        actionText = _this$props.actionText,
        secondaryActionText = _this$props.secondaryActionText,
        secondaryDestructive = _this$props.secondaryDestructive,
        image = _this$props.image,
        imageLink = _this$props.imageLink,
        indent = _this$props.indent,
        isSmall = _this$props.isSmall,
        isMedium = _this$props.isMedium,
        simple = _this$props.simple,
        onClick = _this$props.onClick,
        onSecondaryActionClick = _this$props.onSecondaryActionClick,
        isWaiting = _this$props.isWaiting,
        titleLink = _this$props.titleLink,
        toggleChecked = _this$props.toggleChecked,
        toggleOnChange = _this$props.toggleOnChange,
        hasGreyHeader = _this$props.hasGreyHeader,
        hasWhiteHeader = _this$props.hasWhiteHeader,
        isPending = _this$props.isPending,
        _this$props$expandabl = _this$props.expandable,
        expandable = _this$props$expandabl === void 0 ? false : _this$props$expandabl;
      var expanded = this.state.expanded;
      var hasChildren = notification || children;
      var classes = (0, _classnames["default"])('tawfeer-action-card', simple && 'tawfeer-card--is-clickable', hasGreyHeader && 'tawfeer-card--has-grey-header', hasWhiteHeader && 'tawfeer-card--has-white-header', hasChildren && 'tawfeer-card--has-children', indent && 'tawfeer-card--indent', isSmall && 'is-small', isMedium && 'is-medium', checkbox && 'has-checkbox', expandable && 'is-expandable', actionContent && 'has-action-content', className);
      var backgroundImageStyles = function backgroundImageStyles(url) {
        return url ? {
          backgroundImage: "url(".concat(url, ")")
        } : {};
      };
      var titleProps = toggleOnChange && !titleLink && !disabled ? {
        onClick: function onClick() {
          return toggleOnChange(!toggleChecked);
        },
        tabIndex: '0'
      } : {};
      var hasInternalLink = href && href.indexOf('http') !== 0;
      var isDisplayingSecondaryAction = secondaryActionText && onSecondaryActionClick;
      var badges = !Array.isArray(badge) && badge ? [badge] : badge;
      return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_.Card, {
        className: classes,
        onClick: simple && onClick,
        children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          className: "tawfeer-action-card__region tawfeer-action-card__region-top",
          children: [toggleOnChange && /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.ToggleControl, {
            checked: toggleChecked,
            onChange: toggleOnChange,
            disabled: disabled
          }), image && !toggleOnChange && /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
            className: "tawfeer-action-card__region tawfeer-action-card__region-left",
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)("a", {
              href: imageLink,
              children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
                className: "tawfeer-action-card__image",
                style: backgroundImageStyles(image)
              })
            })
          }), checkbox && !toggleOnChange && /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
            className: "tawfeer-action-card__region tawfeer-action-card__region-left",
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
              className: (0, _classnames["default"])('tawfeer-checkbox-icon', 'is-primary', 'checked' === checkbox && 'tawfeer-checkbox-icon--checked', isPending && 'tawfeer-checkbox-icon--pending'),
              children: 'checked' === checkbox && /*#__PURE__*/(0, _jsxRuntime.jsx)(_icons.Icon, {
                icon: _icons.check
              })
            })
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
            className: "tawfeer-action-card__region tawfeer-action-card__region-center",
            children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_.Grid, {
              columns: 1,
              gutter: 8,
              noMargin: true,
              children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("h2", {
                children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("span", _objectSpread(_objectSpread({
                  className: "tawfeer-action-card__title"
                }, titleProps), {}, {
                  children: [titleLink && /*#__PURE__*/(0, _jsxRuntime.jsx)("a", {
                    href: titleLink,
                    children: title
                  }), !titleLink && expandable && /*#__PURE__*/(0, _jsxRuntime.jsx)(_.Button, {
                    isLink: true,
                    onClick: function onClick() {
                      return _this2.setState({
                        expanded: !expanded
                      });
                    },
                    children: title
                  }), !titleLink && !expandable && title]
                })), (badges === null || badges === void 0 ? void 0 : badges.length) && badges.map(function (badgeText, i) {
                  return /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
                    className: "tawfeer-action-card__badge",
                    children: badgeText
                  }, "badge-".concat(i));
                })]
              }), description && /*#__PURE__*/(0, _jsxRuntime.jsxs)("p", {
                children: [typeof description === 'string' && description, typeof description === 'function' && description()]
              })]
            })
          }), !expandable && (actionText || isDisplayingSecondaryAction || actionContent) && /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
            className: "tawfeer-action-card__region tawfeer-action-card__region-right",
            children: [actionContent && actionContent, actionText && (handoff ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_.Handoff, {
              plugin: handoff,
              editLink: editLink,
              compact: true,
              isLink: true,
              children: actionText
            }) : onClick || hasInternalLink ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_.Button, {
              disabled: disabled,
              isLink: true,
              href: href,
              onClick: onClick,
              className: "tawfeer-action-card__primary_button",
              children: actionText
            }) : href ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.ExternalLink, {
              href: href,
              className: "tawfeer-action-card__primary_button",
              children: actionText
            }) : /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
              className: "tawfeer-action-card__container",
              children: [actionText, isWaiting && /*#__PURE__*/(0, _jsxRuntime.jsx)(_.Waiting, {
                isRight: true
              })]
            })), isDisplayingSecondaryAction && /*#__PURE__*/(0, _jsxRuntime.jsx)(_.Button, {
              isLink: true,
              onClick: onSecondaryActionClick,
              className: "tawfeer-action-card__secondary_button",
              isDestructive: secondaryDestructive,
              children: secondaryActionText
            })]
          }), expandable && /*#__PURE__*/(0, _jsxRuntime.jsx)(_.Button, {
            onClick: function onClick() {
              return _this2.setState({
                expanded: !expanded
              });
            },
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_icons.Icon, {
              icon: expanded ? _icons.chevronUp : _icons.chevronDown,
              height: 24,
              width: 24
            })
          })]
        }), notification && /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          className: "tawfeer-action-card__notification tawfeer-action-card__region-children",
          children: ['error' === notificationLevel && /*#__PURE__*/(0, _jsxRuntime.jsx)(_.Notice, {
            noticeText: notification,
            isError: true,
            rawHTML: notificationHTML
          }), 'info' === notificationLevel && /*#__PURE__*/(0, _jsxRuntime.jsx)(_.Notice, {
            noticeText: notification,
            rawHTML: notificationHTML
          }), 'success' === notificationLevel && /*#__PURE__*/(0, _jsxRuntime.jsx)(_.Notice, {
            noticeText: notification,
            isSuccess: true,
            rawHTML: notificationHTML
          }), 'warning' === notificationLevel && /*#__PURE__*/(0, _jsxRuntime.jsx)(_.Notice, {
            noticeText: notification,
            isWarning: true,
            rawHTML: notificationHTML
          })]
        }), children && (expandable && expanded || !expandable) && /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: "tawfeer-action-card__region-children",
          children: children
        })]
      });
    }
  }]);
}(_element.Component);
ActionCard.defaultProps = {
  toggleChecked: false
};
var _default = exports["default"] = ActionCard;