import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _toConsumableArray from "@babel/runtime/helpers/toConsumableArray";
import _asyncToGenerator from "@babel/runtime/helpers/asyncToGenerator";
import _slicedToArray from "@babel/runtime/helpers/slicedToArray";
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
import _regeneratorRuntime from "@babel/runtime/regenerator";
/**
 * WordPress dependencies
 */
import apiFetch from '@wordpress/api-fetch';
import { Button, CheckboxControl, SelectControl } from '@wordpress/components';
import { useEffect, useState } from '@wordpress/element';
import { decodeEntities } from '@wordpress/html-entities';
import { __, _x, sprintf } from '@wordpress/i18n';
import { addQueryArgs } from '@wordpress/url';

/**
 * External dependencies.
 */
import { AutocompleteTokenField } from '../';
import './style.scss';
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
var AutocompleteWithSuggestions = function AutocompleteWithSuggestions(_ref) {
  var _ref$fetchSavedPosts = _ref.fetchSavedPosts,
    fetchSavedPosts = _ref$fetchSavedPosts === void 0 ? false : _ref$fetchSavedPosts,
    _ref$fetchSuggestions = _ref.fetchSuggestions,
    fetchSuggestions = _ref$fetchSuggestions === void 0 ? false : _ref$fetchSuggestions,
    _ref$help = _ref.help,
    help = _ref$help === void 0 ? __('Begin typing search term, click autocomplete result to select.', 'tawfeer-plugin') : _ref$help,
    _ref$hideHelp = _ref.hideHelp,
    hideHelp = _ref$hideHelp === void 0 ? false : _ref$hideHelp,
    _ref$label = _ref.label,
    label = _ref$label === void 0 ? __('Search', 'tawfeer-plugin') : _ref$label,
    _ref$maxItemsToSugges = _ref.maxItemsToSuggest,
    maxItemsToSuggest = _ref$maxItemsToSugges === void 0 ? 0 : _ref$maxItemsToSugges,
    _ref$multiSelect = _ref.multiSelect,
    multiSelect = _ref$multiSelect === void 0 ? false : _ref$multiSelect,
    _ref$onChange = _ref.onChange,
    onChange = _ref$onChange === void 0 ? false : _ref$onChange,
    _ref$onPostTypeChange = _ref.onPostTypeChange,
    onPostTypeChange = _ref$onPostTypeChange === void 0 ? false : _ref$onPostTypeChange,
    _ref$postTypes = _ref.postTypes,
    postTypes = _ref$postTypes === void 0 ? [{
      slug: 'post',
      label: 'Post'
    }] : _ref$postTypes,
    _ref$postTypeLabel = _ref.postTypeLabel,
    postTypeLabel = _ref$postTypeLabel === void 0 ? __('item', 'tawfeer-plugin') : _ref$postTypeLabel,
    _ref$postTypeLabelPlu = _ref.postTypeLabelPlural,
    postTypeLabelPlural = _ref$postTypeLabelPlu === void 0 ? __('items', 'tawfeer-plugin') : _ref$postTypeLabelPlu,
    _ref$selectedItems = _ref.selectedItems,
    selectedItems = _ref$selectedItems === void 0 ? [] : _ref$selectedItems,
    _ref$selectedPost = _ref.selectedPost,
    selectedPost = _ref$selectedPost === void 0 ? 0 : _ref$selectedPost,
    _ref$suggestionsToFet = _ref.suggestionsToFetch,
    suggestionsToFetch = _ref$suggestionsToFet === void 0 ? 10 : _ref$suggestionsToFet;
  var _useState = useState(true),
    _useState2 = _slicedToArray(_useState, 2),
    isLoading = _useState2[0],
    setIsLoading = _useState2[1];
  var _useState3 = useState(false),
    _useState4 = _slicedToArray(_useState3, 2),
    isLoadingMore = _useState4[0],
    setIsLoadingMore = _useState4[1];
  var _useState5 = useState([]),
    _useState6 = _slicedToArray(_useState5, 2),
    suggestions = _useState6[0],
    setSuggestions = _useState6[1];
  var _useState7 = useState(0),
    _useState8 = _slicedToArray(_useState7, 2),
    maxSuggestions = _useState8[0],
    setMaxSuggestions = _useState8[1];
  var _useState9 = useState(postTypes[0].slug),
    _useState10 = _slicedToArray(_useState9, 2),
    postTypeToSearch = _useState10[0],
    setPostTypeToSearch = _useState10[1];
  var classNames = ['tawfeer-autocomplete-with-suggestions'];
  if (hideHelp) {
    classNames.push('hide-help');
  }

  /**
   * Fetch recent posts to show as suggestions.
   */
  useEffect(function () {
    if (onPostTypeChange) {
      onPostTypeChange(postTypeToSearch);
    }
    setIsLoading(true);
    handleFetchSuggestions(null, 0, postTypeToSearch).then(function (_suggestions) {
      if (0 < _suggestions.length) {
        setSuggestions(_suggestions);
      }
    })["finally"](function () {
      return setIsLoading(false);
    });
  }, [postTypeToSearch]);

  /**
   * Fetch more suggestions.
   */
  useEffect(function () {
    if (isLoadingMore) {
      handleFetchSuggestions(null, suggestions.length, postTypeToSearch).then(function (_suggestions) {
        if (0 < _suggestions.length) {
          setSuggestions(suggestions.concat(_suggestions));
        }
      })["finally"](function () {
        return setIsLoadingMore(false);
      });
    }
  }, [isLoadingMore]);

  /**
   * If passed a `fetchSavedPosts` prop, use that, otherwise, build it based on the selected post type.
   */
  var handleFetchSaved = fetchSavedPosts ? fetchSavedPosts : /*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regeneratorRuntime.mark(function _callee() {
    var postIds,
      searchSlug,
      postTypeSlug,
      endpoint,
      posts,
      _args = arguments;
    return _regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          postIds = _args.length > 0 && _args[0] !== undefined ? _args[0] : [];
          searchSlug = _args.length > 1 && _args[1] !== undefined ? _args[1] : null;
          postTypeSlug = searchSlug || postTypeToSearch;
          endpoint = 'post' === postTypeSlug || 'page' === postTypeSlug ? postTypeSlug + 's' // Default post type endpoints are plural.
          : postTypeSlug; // Custom post type endpoints are singular.
          _context.next = 6;
          return apiFetch({
            path: addQueryArgs('/wp/v2/' + endpoint, {
              per_page: 100,
              include: postIds.join(','),
              _fields: 'id,title'
            })
          });
        case 6:
          posts = _context.sent;
          return _context.abrupt("return", posts.map(function (post) {
            return {
              value: parseInt(post.id),
              label: decodeEntities(post.title) || __('(no title)', 'tawfeer-plugin')
            };
          }));
        case 8:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));

  /**
   * If passed a `fetchSuggestions` prop, use that, otherwise, build it based on the selected post type.
   */
  var handleFetchSuggestions = fetchSuggestions ? fetchSuggestions : /*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regeneratorRuntime.mark(function _callee2() {
    var search,
      offset,
      searchSlug,
      postTypeSlug,
      endpoint,
      response,
      total,
      posts,
      _args2 = arguments;
    return _regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          search = _args2.length > 0 && _args2[0] !== undefined ? _args2[0] : null;
          offset = _args2.length > 1 && _args2[1] !== undefined ? _args2[1] : 0;
          searchSlug = _args2.length > 2 && _args2[2] !== undefined ? _args2[2] : null;
          postTypeSlug = searchSlug || postTypeToSearch;
          endpoint = 'post' === postTypeSlug || 'page' === postTypeSlug ? postTypeSlug + 's' // Default post type endpoints are plural.
          : postTypeSlug; // Custom post type endpoints are singular.
          _context2.next = 7;
          return apiFetch({
            parse: false,
            path: addQueryArgs('/wp/v2/' + endpoint, {
              search: search,
              offset: offset,
              per_page: suggestionsToFetch,
              _fields: 'id,title'
            })
          });
        case 7:
          response = _context2.sent;
          total = parseInt(response.headers.get('x-wp-total') || 0);
          _context2.next = 11;
          return response.json();
        case 11:
          posts = _context2.sent;
          setMaxSuggestions(total);

          // Format suggestions for FormTokenField display.
          return _context2.abrupt("return", posts.reduce(function (acc, post) {
            acc.push({
              value: parseInt(post.id),
              label: decodeEntities(post === null || post === void 0 ? void 0 : post.title.rendered) || __('(no title)', 'tawfeer-plugin')
            });
            return acc;
          }, []));
        case 14:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  }));

  /**
   * Intercept onChange callback so we can decide whether to allow multiple selections.
   */
  var handleOnChange = function handleOnChange(_selections) {
    // If only allowing one selection, just return the one selected item.
    if (!multiSelect) {
      return onChange(_selections);
    }

    // Handle legacy `selectedPost` prop.
    var selections = selectedPost ? [].concat(_toConsumableArray(selectedItems), [selectedPost]) : _toConsumableArray(selectedItems);

    // Loop through new selections to determine whether to add or remove them.
    _selections.forEach(function (_selection) {
      var existingSelection = selections.findIndex(function (selection) {
        return parseInt(selection.value) === parseInt(_selection.value);
      });
      if (-1 < existingSelection) {
        // If the selection is already selected, remove it.
        selections.splice(existingSelection, 1);
      } else {
        // Otherwise, add it.
        selections.push(_selection);
      }
    });

    // Include currently selected post type in selection results.
    onChange(selections.map(function (selection) {
      return _objectSpread(_objectSpread({}, selection), {}, {
        postType: postTypeToSearch
      });
    }));
  };

  /**
   * Render selected item(s) for this component. Clicking on a selection deselects it.
   */
  var renderSelections = function renderSelections() {
    // Handle legacy `selectedPost` prop.
    var selections = selectedPost ? [].concat(_toConsumableArray(selectedItems), [selectedPost]) : selectedItems;
    var selectedMessage = multiSelect ? sprintf(
    // Translators: %1: the length of selections. %2: the selection leabel.
    __('%1$s %2$s selected', 'tawfeer-plugin'), selections.length, selections.length > 1 ? postTypeLabelPlural : postTypeLabel) : sprintf(
    // Translators: %s: The label for the selection.
    __('Selected %s', 'tawfeer-plugin'), postTypeLabel);
    return /*#__PURE__*/_jsxs("div", {
      className: "tawfeer-autocomplete-with-suggestions__selected-items",
      children: [/*#__PURE__*/_jsxs("p", {
        className: "tawfeer-autocomplete-with-suggestions__label",
        children: [selectedMessage, 1 < selections.length && _x(' – ', 'separator character', 'tawfeer-plugin'), 1 < selections.length && /*#__PURE__*/_jsx(Button, {
          onClick: function onClick() {
            return onChange([]);
          },
          isLink: true,
          isDestructive: true,
          children: __('Clear all', 'tawfeer-plugin')
        })]
      }), selections.map(function (selection) {
        return /*#__PURE__*/_jsx(Button, {
          className: "tawfeer-autocomplete-with-suggestions__selected-item-button",
          isTertiary: true,
          onClick: function onClick() {
            return onChange(selections.filter(function (_selection) {
              return _selection.value !== selection.value;
            }));
          },
          children: selection.label
        }, selection.value);
      })]
    });
  };

  /**
   * Render post type select dropdown.
   */
  var renderPostTypeSelect = function renderPostTypeSelect() {
    return /*#__PURE__*/_jsx(SelectControl, {
      label: sprintf(
      // Translators: %s: The name of the type.
      __('%s type', 'tawfeer-plugin'), postTypeLabel.charAt(0).toUpperCase() + postTypeLabel.slice(1)),
      value: postTypeToSearch,
      options: postTypes.map(function (postTypeOption) {
        return {
          label: postTypeOption.label,
          value: postTypeOption.slug
        };
      }),
      onChange: function onChange(_postType) {
        return setPostTypeToSearch(_postType);
      }
    });
  };

  /**
   * Render a single suggestion object that can be clicked to select it immediately.
   *
   * @param {Object} suggestion Suggestion object with value and label keys.
   */
  var renderSuggestion = function renderSuggestion(suggestion) {
    if (multiSelect) {
      var selections = selectedPost ? [].concat(_toConsumableArray(selectedItems), [selectedPost]) : _toConsumableArray(selectedItems);
      var isSelected = !!selections.find(function (_selection) {
        return parseInt(_selection.value) === parseInt(suggestion.value) && _selection.label === suggestion.label;
      });
      return /*#__PURE__*/_jsx(CheckboxControl, {
        checked: isSelected,
        onChange: function onChange() {
          return handleOnChange([suggestion]);
        },
        label: suggestion.label
      }, suggestion.value);
    }
    return /*#__PURE__*/_jsx(Button, {
      isLink: true,
      onClick: function onClick() {
        return handleOnChange([suggestion]);
      },
      children: suggestion.label
    }, suggestion.value);
  };

  /**
   * Render a list of suggestions that can be clicked to select instead of searching by title.
   */
  var renderSuggestions = function renderSuggestions() {
    if (0 === suggestions.length) {
      return null;
    }
    var className = multiSelect ? 'tawfeer-autocomplete-with-suggestions__search-suggestions-multiselect' : 'tawfeer-autocomplete-with-suggestions__search-suggestions';
    return /*#__PURE__*/_jsxs(_Fragment, {
      children: [!hideHelp && /*#__PURE__*/_jsx("p", {
        className: "tawfeer-autocomplete-with-suggestions__label",
        children: /* Translators: %s: the name of a post type. */sprintf(__('Or, select a recent %s:', 'tawfeer-plugin'), postTypeLabel)
      }), /*#__PURE__*/_jsxs("div", {
        className: className,
        children: [suggestions.map(renderSuggestion), suggestions.length < (maxItemsToSuggest || maxSuggestions) && /*#__PURE__*/_jsx(Button, {
          disabled: isLoadingMore,
          isSecondary: true,
          onClick: function onClick() {
            return setIsLoadingMore(true);
          },
          children: isLoadingMore ? __('Loading…', 'tawfeer-plugin') : __('Load more', 'tawfeer-plugin')
        })]
      })]
    });
  };
  return /*#__PURE__*/_jsxs("div", {
    className: classNames.join(' '),
    children: [0 < selectedItems.length && renderSelections(), 1 < postTypes.length && renderPostTypeSelect(), /*#__PURE__*/_jsx(AutocompleteTokenField, {
      tokens: [],
      onChange: handleOnChange,
      fetchSuggestions: (/*#__PURE__*/function () {
        var _ref4 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime.mark(function _callee3(search) {
          return _regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) switch (_context3.prev = _context3.next) {
              case 0:
                return _context3.abrupt("return", handleFetchSuggestions(search, 0, postTypeToSearch));
              case 1:
              case "end":
                return _context3.stop();
            }
          }, _callee3);
        }));
        return function (_x2) {
          return _ref4.apply(this, arguments);
        };
      }()),
      fetchSavedInfo: function fetchSavedInfo(postIds) {
        return handleFetchSaved(postIds);
      },
      label: label,
      loading: isLoading,
      help: !hideHelp && help,
      returnFullObjects: true
    }), renderSuggestions()]
  });
};
export default AutocompleteWithSuggestions;