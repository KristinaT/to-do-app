import { Selector } from "../types";
import { StoreState } from "../store";
import { TodosState, Todo } from "../../types";

export const getTodosState: Selector<StoreState, TodosState> = state =>
  state.todos;

export const getTodos: Selector<StoreState, Todo[]> = state =>
  getTodosState(state).todos;