import { Todo } from "../../types";
import { ActionWithPayload } from "../types";

export enum TodoActions {
  ADD_TODO = "ADD_TODO",
  EDIT_TODO = "EDIT_TODO",
  DELETE_TODO = "DELETE_TODO"
}

type AddTodoAction = ActionWithPayload<typeof TodoActions.ADD_TODO, Todo>;

type DeleteTodoAction = ActionWithPayload<typeof TodoActions.DELETE_TODO, Todo>;

export type TodoActionTypes = AddTodoAction | DeleteTodoAction;
