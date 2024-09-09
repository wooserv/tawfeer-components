"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _reactDaterangePicker = _interopRequireDefault(require("react-daterange-picker"));
var _moment = _interopRequireDefault(require("moment"));
var _momentRange = require("moment-range");
require("react-daterange-picker/dist/css/react-calendar.css");
require("./style.scss");
var _jsxRuntime = require("react/jsx-runtime");
/**
 * External dependencies.
 */

/**
 * Internal dependencies.
 */

var moment = (0, _momentRange.extendMoment)(_moment["default"]);
var DateRangePicker = function DateRangePicker(_ref) {
  var start = _ref.start,
    end = _ref.end,
    onChange = _ref.onChange;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactDaterangePicker["default"], {
    value: moment.range(moment(start), moment(end)),
    firstOfWeek: 1,
    onSelect: function onSelect(range) {
      onChange({
        start: range.start._d,
        end: range.end._d
      });
    }
  });
};
var _default = exports["default"] = DateRangePicker;