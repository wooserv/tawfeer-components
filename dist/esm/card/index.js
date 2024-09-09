import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/inherits";
var _excluded = ["buttonsCard", "className", "headerActions", "isNarrow", "isMedium", "isSmall", "isWhite", "noBorder"];
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
/**
 * Card
 */

/**
 * WordPress dependencies
 */
import { Component } from '@wordpress/element';

/**
 * Internal dependencies
 */
import './style.scss';

/**
 * External dependencies
 */
import classNames from 'classnames';
import { jsx as _jsx } from "react/jsx-runtime";
var Card = /*#__PURE__*/function (_Component) {
  function Card() {
    _classCallCheck(this, Card);
    return _callSuper(this, Card, arguments);
  }
  _inherits(Card, _Component);
  return _createClass(Card, [{
    key: "render",
    value:
    /**
     * Render
     */
    function render() {
      var _this$props = this.props,
        buttonsCard = _this$props.buttonsCard,
        className = _this$props.className,
        headerActions = _this$props.headerActions,
        isNarrow = _this$props.isNarrow,
        isMedium = _this$props.isMedium,
        isSmall = _this$props.isSmall,
        isWhite = _this$props.isWhite,
        noBorder = _this$props.noBorder,
        otherProps = _objectWithoutProperties(_this$props, _excluded);
      var classes = classNames('tawfeer-card', className, buttonsCard && 'tawfeer-card__buttons-card', headerActions && 'tawfeer-card__header-actions', isMedium && 'tawfeer-card__is-medium', isNarrow && 'tawfeer-card__is-narrow', isSmall && 'tawfeer-card__is-small', isWhite && 'tawfeer-card__is-white', noBorder && 'tawfeer-card__no-border');
      return /*#__PURE__*/_jsx("div", _objectSpread({
        className: classes
      }, otherProps));
    }
  }]);
}(Component);
export default Card;