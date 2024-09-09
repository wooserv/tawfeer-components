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
 * Action Card
 */

/**
 * WordPress dependencies
 */
import { ExternalLink, ToggleControl } from '@wordpress/components';
import { Component } from '@wordpress/element';
import { Icon, check, chevronDown, chevronUp } from '@wordpress/icons';

/**
 * Internal dependencies
 */
import { Button, Card, Grid, Handoff, Notice, Waiting } from '../';
import './style.scss';

/**
 * External dependencies
 */
import classnames from 'classnames';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
var ActionCard = /*#__PURE__*/function (_Component) {
  function ActionCard() {
    var _this;
    _classCallCheck(this, ActionCard);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _callSuper(this, ActionCard, [].concat(args));
    _defineProperty(_this, "state", {
      expanded: false
    });
    return _this;
  }
  _inherits(ActionCard, _Component);
  return _createClass(ActionCard, [{
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
      var classes = classnames('tawfeer-action-card', simple && 'tawfeer-card--is-clickable', hasGreyHeader && 'tawfeer-card--has-grey-header', hasWhiteHeader && 'tawfeer-card--has-white-header', hasChildren && 'tawfeer-card--has-children', indent && 'tawfeer-card--indent', isSmall && 'is-small', isMedium && 'is-medium', checkbox && 'has-checkbox', expandable && 'is-expandable', actionContent && 'has-action-content', className);
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
      return /*#__PURE__*/_jsxs(Card, {
        className: classes,
        onClick: simple && onClick,
        children: [/*#__PURE__*/_jsxs("div", {
          className: "tawfeer-action-card__region tawfeer-action-card__region-top",
          children: [toggleOnChange && /*#__PURE__*/_jsx(ToggleControl, {
            checked: toggleChecked,
            onChange: toggleOnChange,
            disabled: disabled
          }), image && !toggleOnChange && /*#__PURE__*/_jsx("div", {
            className: "tawfeer-action-card__region tawfeer-action-card__region-left",
            children: /*#__PURE__*/_jsx("a", {
              href: imageLink,
              children: /*#__PURE__*/_jsx("div", {
                className: "tawfeer-action-card__image",
                style: backgroundImageStyles(image)
              })
            })
          }), checkbox && !toggleOnChange && /*#__PURE__*/_jsx("div", {
            className: "tawfeer-action-card__region tawfeer-action-card__region-left",
            children: /*#__PURE__*/_jsx("span", {
              className: classnames('tawfeer-checkbox-icon', 'is-primary', 'checked' === checkbox && 'tawfeer-checkbox-icon--checked', isPending && 'tawfeer-checkbox-icon--pending'),
              children: 'checked' === checkbox && /*#__PURE__*/_jsx(Icon, {
                icon: check
              })
            })
          }), /*#__PURE__*/_jsx("div", {
            className: "tawfeer-action-card__region tawfeer-action-card__region-center",
            children: /*#__PURE__*/_jsxs(Grid, {
              columns: 1,
              gutter: 8,
              noMargin: true,
              children: [/*#__PURE__*/_jsxs("h2", {
                children: [/*#__PURE__*/_jsxs("span", _objectSpread(_objectSpread({
                  className: "tawfeer-action-card__title"
                }, titleProps), {}, {
                  children: [titleLink && /*#__PURE__*/_jsx("a", {
                    href: titleLink,
                    children: title
                  }), !titleLink && expandable && /*#__PURE__*/_jsx(Button, {
                    isLink: true,
                    onClick: function onClick() {
                      return _this2.setState({
                        expanded: !expanded
                      });
                    },
                    children: title
                  }), !titleLink && !expandable && title]
                })), (badges === null || badges === void 0 ? void 0 : badges.length) && badges.map(function (badgeText, i) {
                  return /*#__PURE__*/_jsx("span", {
                    className: "tawfeer-action-card__badge",
                    children: badgeText
                  }, "badge-".concat(i));
                })]
              }), description && /*#__PURE__*/_jsxs("p", {
                children: [typeof description === 'string' && description, typeof description === 'function' && description()]
              })]
            })
          }), !expandable && (actionText || isDisplayingSecondaryAction || actionContent) && /*#__PURE__*/_jsxs("div", {
            className: "tawfeer-action-card__region tawfeer-action-card__region-right",
            children: [actionContent && actionContent, actionText && (handoff ? /*#__PURE__*/_jsx(Handoff, {
              plugin: handoff,
              editLink: editLink,
              compact: true,
              isLink: true,
              children: actionText
            }) : onClick || hasInternalLink ? /*#__PURE__*/_jsx(Button, {
              disabled: disabled,
              isLink: true,
              href: href,
              onClick: onClick,
              className: "tawfeer-action-card__primary_button",
              children: actionText
            }) : href ? /*#__PURE__*/_jsx(ExternalLink, {
              href: href,
              className: "tawfeer-action-card__primary_button",
              children: actionText
            }) : /*#__PURE__*/_jsxs("div", {
              className: "tawfeer-action-card__container",
              children: [actionText, isWaiting && /*#__PURE__*/_jsx(Waiting, {
                isRight: true
              })]
            })), isDisplayingSecondaryAction && /*#__PURE__*/_jsx(Button, {
              isLink: true,
              onClick: onSecondaryActionClick,
              className: "tawfeer-action-card__secondary_button",
              isDestructive: secondaryDestructive,
              children: secondaryActionText
            })]
          }), expandable && /*#__PURE__*/_jsx(Button, {
            onClick: function onClick() {
              return _this2.setState({
                expanded: !expanded
              });
            },
            children: /*#__PURE__*/_jsx(Icon, {
              icon: expanded ? chevronUp : chevronDown,
              height: 24,
              width: 24
            })
          })]
        }), notification && /*#__PURE__*/_jsxs("div", {
          className: "tawfeer-action-card__notification tawfeer-action-card__region-children",
          children: ['error' === notificationLevel && /*#__PURE__*/_jsx(Notice, {
            noticeText: notification,
            isError: true,
            rawHTML: notificationHTML
          }), 'info' === notificationLevel && /*#__PURE__*/_jsx(Notice, {
            noticeText: notification,
            rawHTML: notificationHTML
          }), 'success' === notificationLevel && /*#__PURE__*/_jsx(Notice, {
            noticeText: notification,
            isSuccess: true,
            rawHTML: notificationHTML
          }), 'warning' === notificationLevel && /*#__PURE__*/_jsx(Notice, {
            noticeText: notification,
            isWarning: true,
            rawHTML: notificationHTML
          })]
        }), children && (expandable && expanded || !expandable) && /*#__PURE__*/_jsx("div", {
          className: "tawfeer-action-card__region-children",
          children: children
        })]
      });
    }
  }]);
}(Component);
ActionCard.defaultProps = {
  toggleChecked: false
};
export default ActionCard;