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

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(rootReducer, composeEnhancers());

export const persistor = persistStore(store);

export default { store, persistor };
