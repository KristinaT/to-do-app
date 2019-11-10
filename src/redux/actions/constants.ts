import { Todo, NewTodo } from "../../types";
import { ActionWithPayload } from "../types";
import { Action } from "redux";

export enum TodoActions {
  ADD_TODO = "ADD_TODO",
  EDIT_TODO = "EDIT_TODO",
  DELETE_TODO = "DELETE_TODO",
  COMPLETE_TODO = "COMPLETE_TODO",
  COMPLETE_ALL_TODOS = "COMPLETE_ALL_TODOS"
}

export type AddTodoAction = ActionWithPayload<
  typeof TodoActions.ADD_TODO,
  NewTodo
>;

export type EditTodoAction = ActionWithPayload<
  typeof TodoActions.EDIT_TODO,
  Todo
>;

export type DeleteTodoAction = ActionWithPayload<
  typeof TodoActions.DELETE_TODO,
  string
>;

export type CompleteTodoAction = ActionWithPayload<
  typeof TodoActions.COMPLETE_TODO,
  string
>;

export type CompleteAllTodosAction = Action<
  typeof TodoActions.COMPLETE_ALL_TODOS
>;

export type TodoActionTypes =
  | AddTodoAction
  | EditTodoAction
  | DeleteTodoAction
  | CompleteTodoAction
  | CompleteAllTodosAction;
