/**
 * Section Header
 */

/**
 * WordPress dependencies
 */
import { useEffect, useRef } from '@wordpress/element';

/**
 * Internal dependencies
 */
import { Grid } from '..';
import './style.scss';

/**
 * External dependencies
 */
import classnames from 'classnames';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
var SectionHeader = function SectionHeader(_ref) {
  var _ref$centered = _ref.centered,
    centered = _ref$centered === void 0 ? false : _ref$centered,
    _ref$className = _ref.className,
    className = _ref$className === void 0 ? null : _ref$className,
    _ref$description = _ref.description,
    description = _ref$description === void 0 ? '' : _ref$description,
    _ref$heading = _ref.heading,
    heading = _ref$heading === void 0 ? 2 : _ref$heading,
    _ref$isWhite = _ref.isWhite,
    isWhite = _ref$isWhite === void 0 ? false : _ref$isWhite,
    _ref$noMargin = _ref.noMargin,
    noMargin = _ref$noMargin === void 0 ? false : _ref$noMargin,
    title = _ref.title,
    _ref$id = _ref.id,
    id = _ref$id === void 0 ? null : _ref$id;
  // If id is in the URL as a scrollTo param, scroll to it on render.
  var ref = useRef();
  useEffect(function () {
    var params = new Proxy(new URLSearchParams(window.location.search), {
      get: function get(searchParams, prop) {
        return searchParams.get(prop);
      }
    });
    var scrollToId = params.scrollTo;
    if (scrollToId && scrollToId === id) {
      // Let parent scroll action run before running this.
      window.setTimeout(function () {
        return ref.current.scrollIntoView({
          behavior: 'smooth'
        });
      }, 250);
    }
  }, []);
  var classes = classnames('tawfeer-section-header', centered && 'tawfeer-section-header--is-centered', isWhite && 'tawfeer-section-header--is-white', noMargin && 'tawfeer-section-header--no-margin', className);
  var HeadingTag = "h".concat(heading);
  return /*#__PURE__*/_jsx("div", {
    id: id,
    className: "tawfeer-section-header__container",
    ref: ref,
    children: /*#__PURE__*/_jsxs(Grid, {
      columns: 1,
      gutter: 8,
      className: classes,
      children: [typeof title === 'string' && /*#__PURE__*/_jsx(HeadingTag, {
        children: title
      }), typeof title === 'function' && /*#__PURE__*/_jsx(HeadingTag, {
        children: title()
      }), description && typeof description === 'string' && /*#__PURE__*/_jsx("p", {
        children: description
      }), typeof description === 'function' && /*#__PURE__*/_jsx("p", {
        children: description()
      })]
    })
  });
};
export default SectionHeader;