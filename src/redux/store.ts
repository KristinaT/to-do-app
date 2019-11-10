import { createStore, compose } from "redux";
import { persistStore } from "redux-persist";
import { TodosState } from "../types";
import rootReducer from "./reducers/rootReducer";

type State = {
  todos: Readonly<TodosState>;
};

export type StoreState = Readonly<State>;

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const configureStore = (initialState?: StoreState) => {
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  const store = createStore(rootReducer, initialState, composeEnhancers());

  const persistor = persistStore(store);

  return { store, persistor };
};

export default configureStore;
