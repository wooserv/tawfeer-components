import _slicedToArray from "@babel/runtime/helpers/slicedToArray";
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import useObjectState from './useObjectState';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
var INIT_STATE = {
  name: 'Foo',
  widgets: [1],
  attributes: {
    bar: 0,
    baz: 1
  }
};
var TestComponent = function TestComponent() {
  var _useObjectState = useObjectState(INIT_STATE),
    _useObjectState2 = _slicedToArray(_useObjectState, 2),
    state = _useObjectState2[0],
    updateState = _useObjectState2[1];
  return /*#__PURE__*/_jsxs("div", {
    children: [/*#__PURE__*/_jsx("input", {
      placeholder: "state",
      onChange: function onChange() {},
      value: JSON.stringify(state)
    }), /*#__PURE__*/_jsx("button", {
      onClick: function onClick() {
        return updateState({
          widgets: []
        });
      },
      children: "Remove widgets"
    }), /*#__PURE__*/_jsx("button", {
      onClick: function onClick() {
        return updateState({
          widgets: [1]
        });
      },
      children: "Add widget"
    }), /*#__PURE__*/_jsx("button", {
      onClick: function onClick() {
        return updateState({
          attributes: {
            bar: 2
          }
        });
      },
      children: "Nested update"
    }), /*#__PURE__*/_jsx("input", {
      type: "text",
      value: state.name,
      onChange: function onChange(e) {
        return updateState({
          name: e.target.value
        });
      },
      placeholder: "name"
    })]
  });
};
describe('useObjectState', function () {
  var getState = function getState() {
    return JSON.parse(screen.getByPlaceholderText('state').getAttribute('value'));
  };
  beforeEach(function () {
    render(/*#__PURE__*/_jsx(TestComponent, {}));
  });
  it('updates arrays', function () {
    expect(getState()).toStrictEqual(INIT_STATE);
    screen.getByText('Remove widgets').click();
    expect(getState()).toMatchObject({
      widgets: []
    });
    screen.getByText('Add widget').click();
    expect(getState()).toMatchObject({
      widgets: [1]
    });
  });
  it('updates a simple value', function () {
    fireEvent.change(screen.getByPlaceholderText('name'), {
      target: {
        value: 'Ramon'
      }
    });
    expect(getState()).toMatchObject({
      name: 'Ramon'
    });
  });
  it('updates a nested object', function () {
    screen.getByText('Nested update').click();
    expect(getState()).toMatchObject({
      attributes: {
        bar: 2,
        baz: 1
      }
    });
  });
});