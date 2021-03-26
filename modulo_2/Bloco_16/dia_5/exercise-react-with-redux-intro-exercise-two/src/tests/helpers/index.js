import { render } from '@testing-library/react';
import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { reducer } from '../../redux';

const createMockStore = (initialState) => (
  createStore(reducer, initialState)
);

const renderWithRedux = (
  component, { initialState, store = createMockStore() } = {},
) => ({
 ...render(<Provider store={ store }>{ component }</Provider>), store
})

export default renderWithRedux;
