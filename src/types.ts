export interface Todo {
  id?: string;
  name?: string;
  isInProgress?: boolean;
  isCompleted: boolean;
}

export interface TodosState {
  todos: Todo[];
}
