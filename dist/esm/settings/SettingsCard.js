import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
var _excluded = ["children", "className", "columns", "gutter", "noBorder", "rowGap"];
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
/**
 * External dependencies.
 */
import classnames from 'classnames';

/**
 * Internal dependencies.
 */
import { ActionCard, Grid } from '../';
import { jsx as _jsx } from "react/jsx-runtime";
var SettingsCard = function SettingsCard(_ref) {
  var children = _ref.children,
    className = _ref.className,
    columns = _ref.columns,
    gutter = _ref.gutter,
    noBorder = _ref.noBorder,
    rowGap = _ref.rowGap,
    props = _objectWithoutProperties(_ref, _excluded);
  var classes = classnames('tawfeer-settings__card', noBorder && 'tawfeer-settings__no-border', className);
  return /*#__PURE__*/_jsx(ActionCard, _objectSpread(_objectSpread({}, props), {}, {
    className: classes,
    notificationLevel: "info",
    noBorder: noBorder,
    children: /*#__PURE__*/_jsx(Grid, {
      columns: columns,
      gutter: gutter,
      rowGap: rowGap,
      children: children
    })
  }));
};
SettingsCard.defaultProps = {
  columns: 3,
  gutter: 32
};
export default SettingsCard;