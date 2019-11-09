export interface Todo {
  id?: string;
  name: string;
  description?: string;
  isActive: boolean;
  isCompleted: boolean;
}

export interface TodosState {
  todos: Todo[];
}
