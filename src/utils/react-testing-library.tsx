import React, { ReactNode } from "react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { Router } from "react-router-dom";
import { ReactElement } from "react";
import configureStore, { StoreState } from "../redux/store";
import { Store } from "redux";
import { ThemeProvider } from "styled-components";
import theme from "../theme/theme";
import { History, createMemoryHistory } from "history";

export function renderWithRedux(
  ui: ReactElement<any>,
  {
    initialState,
    store = configureStore(initialState).store,
    history = createMemoryHistory()
  }: { initialState?: StoreState; store?: Store; history?: History } = {}
) {
  return {
    ...render(
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <Router history={history}>{ui}</Router>
        </ThemeProvider>
      </Provider>
    ),
    // adding `store` to the returned utilities to allow us
    // to reference it in our tests (just try to avoid using
    // this to test implementation details).
    store
  };
}
