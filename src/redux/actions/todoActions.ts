import {
  TodoActions,
  AddTodoAction,
  EditTodoAction,
  DeleteTodoAction,
  CompleteTodoAction,
  CompleteAllTodosAction
} from "./constants";
import { Todo, NewTodo } from "../../types";

export const addTodo = (todo: NewTodo): AddTodoAction => {
  return { type: TodoActions.ADD_TODO, payload: todo };
};

export const editTodo = (todo: Todo): EditTodoAction => {
  return { type: TodoActions.EDIT_TODO, payload: todo };
};

export const deleteTodo = (todoId: string): DeleteTodoAction => {
  return { type: TodoActions.DELETE_TODO, payload: todoId };
};

export const completeTodo = (payload: string): CompleteTodoAction => {
  return { type: TodoActions.COMPLETE_TODO, payload };
};

export const completeAllTodos = (): CompleteAllTodosAction => {
  return { type: TodoActions.COMPLETE_ALL_TODOS };
};
