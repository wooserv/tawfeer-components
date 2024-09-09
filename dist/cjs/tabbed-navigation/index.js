"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _classnames = _interopRequireDefault(require("classnames"));
var _findIndex = _interopRequireDefault(require("lodash/findIndex"));
var _router = _interopRequireDefault(require("../proxied-imports/router"));
require("./style.scss");
var _jsxRuntime = require("react/jsx-runtime");
/**
 * External dependencies.
 */

/**
 * Internal dependencies.
 */

var NavLink = _router["default"].NavLink,
  useHistory = _router["default"].useHistory;
var TabbedNavigation = function TabbedNavigation(_ref) {
  var items = _ref.items,
    className = _ref.className,
    disableUpcoming = _ref.disableUpcoming,
    _ref$children = _ref.children,
    children = _ref$children === void 0 ? null : _ref$children;
  var displayedItems = items.filter(function (item) {
    return !item.isHiddenInTabbedNavigation;
  });
  var _useHistory = useHistory(),
    location = _useHistory.location;
  var currentIndex = (0, _findIndex["default"])(displayedItems, ['path', location.pathname]);
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    className: (0, _classnames["default"])('tawfeer-tabbed-navigation', className),
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("ul", {
      children: displayedItems.map(function (item, index) {
        return /*#__PURE__*/(0, _jsxRuntime.jsx)("li", {
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(NavLink, {
            to: item.path,
            isActive: function isActive(match, _ref2) {
              var pathname = _ref2.pathname;
              if (item.activeTabPaths) {
                return item.activeTabPaths.includes(pathname);
              }
              return match;
            },
            exact: true,
            activeClassName: 'selected',
            className: (0, _classnames["default"])({
              disabled: disableUpcoming && index > currentIndex
            }),
            children: item.label
          })
        }, index);
      })
    }), children]
  });
};
var _default = exports["default"] = TabbedNavigation;