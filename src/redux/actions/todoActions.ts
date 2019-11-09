import { TodoActions, TodoActionTypes } from "./constants"
import { Todo } from "../../types";

export const addTodo = (todo: Todo): TodoActionTypes => {
  return { type: TodoActions.ADD_TODO, payload: todo };
};
