/**
 * WordPress dependencies.
 */
import { useSelect } from '@wordpress/data';
import { __ } from '@wordpress/i18n';

/**
 * Internal dependencies.
 */
import { Button, Card, Modal, Notice } from '../..';
import { WIZARD_STORE_NAMESPACE } from '../store';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
var parseError = function parseError(_ref) {
  var data = _ref.data,
    message = _ref.message,
    code = _ref.code;
  var level = 'fatal';
  if (!!data && 'level' in data) {
    level = data.level;
  } else if ('rest_invalid_param' === code) {
    level = 'notice';
  }
  return {
    message: message,
    level: level
  };
};
var WizardError = function WizardError() {
  var error = useSelect(function (select) {
    return select(WIZARD_STORE_NAMESPACE).getError();
  });
  if (!error) {
    return null;
  }
  var _parseError = parseError(error),
    level = _parseError.level,
    message = _parseError.message;
  if ('fatal' === level) {
    var fallbackURL = typeof tawfeer_urls !== 'undefined' && tawfeer_urls.dashboard;
    return /*#__PURE__*/_jsxs(Modal, {
      title: __('Unrecoverable error'),
      onRequestClose: fallbackURL ? function () {
        return window.location = fallbackURL;
      } : undefined,
      children: [/*#__PURE__*/_jsx(Notice, {
        noticeText: message,
        isError: true,
        rawHTML: true
      }), fallbackURL && /*#__PURE__*/_jsx(Card, {
        buttonsCard: true,
        noBorder: true,
        className: "justify-end",
        children: /*#__PURE__*/_jsx(Button, {
          isPrimary: true,
          href: fallbackURL,
          children: __('Return to Dashboard', 'tawfeer-plugin')
        })
      })]
    });
  }
  return /*#__PURE__*/_jsx(Notice, {
    isError: true,
    className: "tawfeer-wizard__above-header",
    noticeText: message,
    rawHTML: true
  });
};
export default WizardError;