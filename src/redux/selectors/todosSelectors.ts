import { Selector } from "../types";
import { StoreState } from "../store";
import { TodosState, Todo } from "../../types";

export const getTodosState: Selector<StoreState, TodosState> = state =>
  state.todos;

export const getTodos: Selector<StoreState, Todo[]> = state =>
  getTodosState(state).todos;

export const getTodo = (
  todoId: string
): Selector<StoreState, Todo | undefined> => state =>
  getTodos(state).find(todo => todo.id === todoId);
