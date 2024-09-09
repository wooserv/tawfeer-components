import _toConsumableArray from "@babel/runtime/helpers/toConsumableArray";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _regeneratorRuntime from "@babel/runtime/regenerator";
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
/**
 * External dependencies.
 */
import get from 'lodash/get';
import isEmpty from 'lodash/isEmpty';
import set from 'lodash/set';

/**
 * WordPress dependencies.
 */
import apiFetch from '@wordpress/api-fetch';
import { createReduxStore, dispatch, register, select } from '@wordpress/data';
import { createAction } from './utils.js';
export var WIZARD_STORE_NAMESPACE = 'tawfeer/wizards';
var DEFAULT_STATE = {
  isLoading: true,
  isQuietLoading: false,
  apiData: {},
  error: null
};

/**
 * wordpress/data does not trigger a component re-render
 * on deep state change (via lodash's set function)
 * unless the state was cloned first.
 */
var clone = function clone(objectToClone) {
  return JSON.parse(JSON.stringify(objectToClone));
};
var reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : DEFAULT_STATE;
  var _ref = arguments.length > 1 ? arguments[1] : undefined,
    type = _ref.type,
    _ref$payload = _ref.payload,
    payload = _ref$payload === void 0 ? {} : _ref$payload;
  switch (type) {
    case 'START_LOADING_DATA':
      if (payload.isQuietLoading) {
        return _objectSpread(_objectSpread({}, state), {}, {
          isQuietLoading: true
        });
      }
      return _objectSpread(_objectSpread({}, state), {}, {
        isLoading: true
      });
    case 'FINISH_LOADING_DATA':
      return _objectSpread(_objectSpread({}, state), {}, {
        isLoading: false,
        isQuietLoading: false
      });
    case 'SET_API_DATA':
      return set(clone(state), ['apiData', payload.slug], payload.data);
    case 'UPDATE_WIZARD_SETTINGS':
      return set(clone(state), ['apiData', payload.slug].concat(_toConsumableArray(payload.path)), payload.value);
    case 'SET_ERROR':
      return _objectSpread(_objectSpread({}, state), {}, {
        error: payload
      });
    default:
      return state;
  }
};
var actions = {
  // Regular actions.
  startLoadingData: createAction('START_LOADING_DATA'),
  finishLoadingData: createAction('FINISH_LOADING_DATA'),
  fetchFromAPI: createAction('FETCH_FROM_API'),
  setAPIDataForWizard: createAction('SET_API_DATA'),
  updateWizardSettings: createAction('UPDATE_WIZARD_SETTINGS'),
  setError: createAction('SET_ERROR'),
  // Async actions. These will not show up in Redux devtools.
  saveWizardSettings: function saveWizardSettings(_ref2) {
    var slug = _ref2.slug,
      _ref2$section = _ref2.section,
      section = _ref2$section === void 0 ? '' : _ref2$section,
      _ref2$payloadPath = _ref2.payloadPath,
      payloadPath = _ref2$payloadPath === void 0 ? false : _ref2$payloadPath,
      _ref2$auxData = _ref2.auxData,
      auxData = _ref2$auxData === void 0 ? {} : _ref2$auxData,
      _ref2$updatePayload = _ref2.updatePayload,
      updatePayload = _ref2$updatePayload === void 0 ? null : _ref2$updatePayload;
    return /*#__PURE__*/_regeneratorRuntime.mark(function _callee() {
      var wizardState, data, updatedData;
      return _regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            if (!updatePayload) {
              _context.next = 3;
              break;
            }
            _context.next = 3;
            return actions.updateWizardSettings(_objectSpread({
              slug: slug
            }, updatePayload));
          case 3:
            wizardState = select(WIZARD_STORE_NAMESPACE).getWizardAPIData(slug);
            data = payloadPath ? get(wizardState, payloadPath) : wizardState;
            _context.next = 7;
            return actions.fetchFromAPI({
              path: "/tawfeer/v1/wizard/".concat(slug, "/").concat(section),
              method: 'POST',
              data: _objectSpread(_objectSpread({}, data), auxData),
              isQuietFetch: true
            });
          case 7:
            updatedData = _context.sent;
            if (!(!isEmpty(updatedData) && !updatedData.error)) {
              _context.next = 10;
              break;
            }
            return _context.abrupt("return", actions.setAPIDataForWizard({
              slug: slug,
              data: updatedData
            }));
          case 10:
          case "end":
            return _context.stop();
        }
      }, _callee);
    })();
  },
  wizardApiFetch: /*#__PURE__*/_regeneratorRuntime.mark(function wizardApiFetch(fetchConfig) {
    var result;
    return _regeneratorRuntime.wrap(function wizardApiFetch$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return actions.fetchFromAPI(fetchConfig);
        case 2:
          result = _context2.sent;
          return _context2.abrupt("return", result);
        case 4:
        case "end":
          return _context2.stop();
      }
    }, wizardApiFetch);
  })
};
var selectors = {
  isLoading: function isLoading(state) {
    return state.isLoading;
  },
  isQuietLoading: function isQuietLoading(state) {
    return state.isQuietLoading;
  },
  getWizardAPIData: function getWizardAPIData(state, slug) {
    return state.apiData[slug] || {};
  },
  getError: function getError(state) {
    return state.error;
  }
};
var store = createReduxStore(WIZARD_STORE_NAMESPACE, {
  reducer: reducer,
  actions: actions,
  selectors: selectors,
  controls: {
    FETCH_FROM_API: function FETCH_FROM_API(action) {
      dispatch(WIZARD_STORE_NAMESPACE).startLoadingData({
        isQuietLoading: Boolean(action.payload.isQuietFetch)
      });
      return apiFetch(action.payload).then(function (data) {
        dispatch(WIZARD_STORE_NAMESPACE).setError(null);
        return data;
      })["catch"](function (error) {
        dispatch(WIZARD_STORE_NAMESPACE).setError(error);
        return {
          error: error
        };
      })["finally"](function (result) {
        dispatch(WIZARD_STORE_NAMESPACE).finishLoadingData();
        return result;
      });
    }
  },
  resolvers: {
    getWizardAPIData: /*#__PURE__*/_regeneratorRuntime.mark(function getWizardAPIData(slug) {
      var data;
      return _regeneratorRuntime.wrap(function getWizardAPIData$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            if (!slug) {
              _context3.next = 5;
              break;
            }
            _context3.next = 3;
            return actions.fetchFromAPI({
              path: "/tawfeer/v1/wizard/".concat(slug)
            });
          case 3:
            data = _context3.sent;
            return _context3.abrupt("return", actions.setAPIDataForWizard({
              slug: slug,
              data: data
            }));
          case 5:
            return _context3.abrupt("return", actions.finishLoadingData());
          case 6:
          case "end":
            return _context3.stop();
        }
      }, getWizardAPIData);
    })
  }
});
export default (function () {
  return register(store);
});