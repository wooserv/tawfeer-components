/**
 * External dependencies.
 */
import { default as ReactDateRangePicker } from 'react-daterange-picker';
import origMoment from 'moment';
import { extendMoment } from 'moment-range';
import 'react-daterange-picker/dist/css/react-calendar.css';

/**
 * Internal dependencies.
 */
import './style.scss';
import { jsx as _jsx } from "react/jsx-runtime";
var moment = extendMoment(origMoment);
var DateRangePicker = function DateRangePicker(_ref) {
  var start = _ref.start,
    end = _ref.end,
    onChange = _ref.onChange;
  return /*#__PURE__*/_jsx(ReactDateRangePicker, {
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
export default DateRangePicker;