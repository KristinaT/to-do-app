import { Reducer } from "redux";
import { TodosState } from "../../types";
import { TodoActionTypes, TodoActions } from "../actions/constants";
import _uniqueId from "lodash/uniqueId";


const initialState: TodosState = {
  todos: []
};

const todos: Reducer<TodosState, TodoActionTypes> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case TodoActions.ADD_TODO:
      return {
        ...state,
        todos: [{ id: _uniqueId("id-"), ...action.payload }, ...state.todos]
      };
    default:
      return state;
  }
};

export default todos;
