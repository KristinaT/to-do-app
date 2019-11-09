export interface Todo {
  id?: string;
  name: string;
  description?: string;
  isCompleted: boolean;
}

export interface TodosState {
  todos: Todo[];
}

export interface NewTodo {
  name: string;
  description?: string;
  [key: string]: string | undefined;
}
