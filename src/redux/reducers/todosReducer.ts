import { Reducer } from "redux";
import { TodosState } from "../../types";
import { TodoActionTypes } from "../actions/constants";

const initialState: TodosState = {
  todos: []
};

const todos: Reducer<TodosState, TodoActionTypes> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default todos;
