import { Reducer } from "redux";
import { TodosState, Todo } from "../../types";
import {
  TodoActionTypes,
  TodoActions,
  DeleteTodoAction,
  EditTodoAction,
  AddTodoAction,
  CompleteTodoAction,
  CompleteAllTodosAction
} from "../actions/constants";
import findIndex from "lodash/findIndex";
import uuid from "uuid";

export const initialState: TodosState = {
  todos: []
};
const addTodo: Reducer<TodosState, AddTodoAction> = (
  state = initialState,
  action
) => {
  return {
    ...state,
    todos: [
      {
        id: uuid.v4(),
        isCompleted: false,

        ...action.payload
      },
      ...state.todos
    ]
  };
};
const deleteTodo: Reducer<TodosState, DeleteTodoAction> = (
  state = initialState,
  action
) => {
  const filteredTodos = state.todos.filter(
    (todo: Todo) => todo.id !== action.payload
  );

  return {
    ...state,
    todos: filteredTodos
  };
};

const editTodo: Reducer<TodosState, EditTodoAction> = (
  state = initialState,
  action
) => {
  const { todos } = state;
  const todoIndex = findIndex(
    todos,
    (todo: Todo) => todo.id === action.payload.id
  );

  if (todoIndex === -1) {
    return state;
  }
  const editedTodo: Todo = { ...action.payload };

  const todoItems = [
    ...todos.slice(0, todoIndex),
    editedTodo,
    ...todos.slice(todoIndex + 1)
  ];

  return {
    ...state,
    todos: todoItems
  };
};

const completeTodo: Reducer<TodosState, CompleteTodoAction> = (
  state = initialState,
  action
) => {
  const { todos } = state;
  const todoIndex = findIndex(
    todos,
    (todo: Todo) => todo.id === action.payload
  );

  if (todoIndex === -1) {
    return state;
  }
  const completedTodo: Todo = todos[todoIndex];
  const todoItem: Todo = {
    ...completedTodo,
    isCompleted: !completedTodo.isCompleted
  };
  const todoItems = [
    ...todos.slice(0, todoIndex),
    todoItem,
    ...todos.slice(todoIndex + 1)
  ];

  return {
    ...state,
    todos: todoItems
  };
};

const completeAllTodos: Reducer<TodosState, CompleteAllTodosAction> = (
  state = initialState
) => ({
  ...state,
  todos: state.todos.map(todo => ({
    ...todo,
    isCompleted: true
  }))
});

const todos: Reducer<TodosState, TodoActionTypes> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case TodoActions.ADD_TODO:
      return addTodo(state, action);
    case TodoActions.DELETE_TODO:
      return deleteTodo(state, action);
    case TodoActions.EDIT_TODO:
      return editTodo(state, action);
    case TodoActions.COMPLETE_TODO:
      return completeTodo(state, action);
    case TodoActions.COMPLETE_ALL_TODOS:
      return completeAllTodos(state, action);
    default:
      return state;
  }
};

export default todos;
