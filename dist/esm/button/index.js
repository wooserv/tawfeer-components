import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _asyncToGenerator from "@babel/runtime/helpers/asyncToGenerator";
import _slicedToArray from "@babel/runtime/helpers/slicedToArray";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
var _excluded = ["href", "onClick"];
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
import _regeneratorRuntime from "@babel/runtime/regenerator";
/**
 * Button
 */

/**
 * WordPress dependencies.
 */
import { Button as BaseComponent } from '@wordpress/components';
import { useState } from '@wordpress/element';

/**
 * Internal dependencies
 */
import Router from '../proxied-imports/router';
import './style.scss';
import { jsx as _jsx } from "react/jsx-runtime";
var useHistory = Router.useHistory;
var Button = function Button(_ref) {
  var href = _ref.href,
    onClick = _ref.onClick,
    otherProps = _objectWithoutProperties(_ref, _excluded);
  var history = useHistory();
  var _useState = useState(false),
    _useState2 = _slicedToArray(_useState, 2),
    isAwaitingOnClick = _useState2[0],
    setIsAwaitingOnClick = _useState2[1];

  // If both onClick and href are present, await the onClick action an then redirect.
  if (href && onClick) {
    otherProps.onClick = /*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regeneratorRuntime.mark(function _callee() {
      return _regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            setIsAwaitingOnClick(true);
            _context.next = 3;
            return onClick();
          case 3:
            setIsAwaitingOnClick(false);
            history.push((href || '').replace('#', ''));
          case 5:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
  } else {
    otherProps.href = href;
    otherProps.onClick = onClick;
  }
  if (isAwaitingOnClick) {
    otherProps.disabled = true;
  }
  // @ts-ignore - @wordpress/components' Button can only have either href or onClick, not both.
  return /*#__PURE__*/_jsx(BaseComponent, _objectSpread({}, otherProps));
};
export default Button;