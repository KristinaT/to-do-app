import { TodoActions, TodoActionTypes, AddTodoAction } from "./constants";
import { Todo, NewTodo } from "../../types";

export const addTodo = (todo: NewTodo): AddTodoAction => {
  return { type: TodoActions.ADD_TODO, payload: todo };
};

export const editTodo = (todo: Todo): TodoActionTypes => {
  return { type: TodoActions.EDIT_TODO, payload: todo };
};

export const deleteTodo = (todoId: string): TodoActionTypes => {
  return { type: TodoActions.DELETE_TODO, payload: todoId };
};

export const completeTodo = (payload: string): TodoActionTypes => {
  return { type: TodoActions.COMPLETE_TODO, payload };
};

export const changeFilterByValue = (payload: string): TodoActionTypes => {
  return { type: TodoActions.CHANGE_FILTER_BY_VALUE, payload };
};
