/**
 * External dependencies.
 */
import classnames from 'classnames';
import findIndex from 'lodash/findIndex';
import Router from '../proxied-imports/router';

/**
 * Internal dependencies.
 */
import './style.scss';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
var NavLink = Router.NavLink,
  useHistory = Router.useHistory;
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
  var currentIndex = findIndex(displayedItems, ['path', location.pathname]);
  return /*#__PURE__*/_jsxs("div", {
    className: classnames('tawfeer-tabbed-navigation', className),
    children: [/*#__PURE__*/_jsx("ul", {
      children: displayedItems.map(function (item, index) {
        return /*#__PURE__*/_jsx("li", {
          children: /*#__PURE__*/_jsx(NavLink, {
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
            className: classnames({
              disabled: disableUpcoming && index > currentIndex
            }),
            children: item.label
          })
        }, index);
      })
    }), children]
  });
};
export default TabbedNavigation;