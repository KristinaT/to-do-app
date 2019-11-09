import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import todos from "../reducers/todosReducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["todos"]
};

const rootReducer = combineReducers({
  todos
});

export default persistReducer(persistConfig, rootReducer);
