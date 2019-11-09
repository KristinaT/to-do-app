import { Todo, NewTodo } from "../../types";
import { ActionWithPayload } from "../types";

export enum TodoActions {
  ADD_TODO = "ADD_TODO",
  EDIT_TODO = "EDIT_TODO",
  DELETE_TODO = "DELETE_TODO",
  COMPLETE_TODO = "COMPLETE_TODO",
  CHANGE_FILTER_BY_VALUE = "CHANGE_FILTER_BY_VALUE"
}

export type AddTodoAction = ActionWithPayload<typeof TodoActions.ADD_TODO, NewTodo>;

export type EditTodoAction = ActionWithPayload<typeof TodoActions.EDIT_TODO, Todo>;

export type DeleteTodoAction = ActionWithPayload<typeof TodoActions.DELETE_TODO, string>;

export type CompleteTodoAction = ActionWithPayload<typeof TodoActions.COMPLETE_TODO, string>;

export type ChangeFilterByValueAction = ActionWithPayload<typeof TodoActions.CHANGE_FILTER_BY_VALUE, string>;

export type TodoActionTypes = AddTodoAction | EditTodoAction | DeleteTodoAction | CompleteTodoAction | ChangeFilterByValueAction;
