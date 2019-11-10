import reducer, { initialState } from "../todosReducer";
import {
  addTodo,
  deleteTodo,
  editTodo,
  completeTodo,
  completeAllTodos
} from "../../actions/todoActions";
import { NewTodo, Todo } from "../../../types";

describe("todosReducer", () => {
  const initialMockState = { ...initialState };
  describe("ADD_TOO", () => {
    it("should add new todo when ADD_TODO is dispatched", () => {
      const todoToAdd: NewTodo = {
        name: "New todo",
        description: "New todo description"
      };

      const newState = reducer(initialMockState, addTodo(todoToAdd));

      expect(newState.todos).toHaveLength(1);

      const [addedTodo] = newState.todos;

      expect(addedTodo).not.toBeUndefined();
      expect(addedTodo.name).toEqual(todoToAdd.name);
      expect(addedTodo.description).toEqual(todoToAdd.description);
    });
  });

  describe("DELETE_TODO", () => {
    it("should delete todo with given id when DELETE_TODO is dispatched", () => {
      const todoToBeDeleted: Todo = {
        id: "1",
        name: "Delete todo",
        isCompleted: false
      };

      const mockStateWithTodos = {
        todos: [todoToBeDeleted]
      };

      const newState = reducer(mockStateWithTodos, deleteTodo("1"));

      expect(newState.todos).toHaveLength(0);
    });

    it("should not modify state when nonexisting id is given", () => {
      const todoToBeDeleted: Todo = {
        id: "1",
        name: "Delete todo",
        isCompleted: false
      };

      const mockStateWithTodos = {
        todos: [todoToBeDeleted]
      };

      const newState = reducer(mockStateWithTodos, deleteTodo("4"));

      expect(newState).toEqual(mockStateWithTodos);
    });

    it("should keep order of existing todos after delete", () => {
      const first: Todo = {
        id: "1",
        name: "todo",
        isCompleted: false
      };
      const second: Todo = {
        id: "2",
        name: "todo",
        isCompleted: false
      };

      const third: Todo = {
        id: "3",
        name: "todo",
        isCompleted: false
      };
      const mockStateWithTodos = {
        todos: [first, second, third]
      };

      const newState = reducer(mockStateWithTodos, deleteTodo("2"));

      expect(newState.todos).toHaveLength(2);
      expect(newState.todos).toEqual([first, third]);
    });
  });

  describe("EDIT_TODO", () => {
    it("should edit todo with id from action payload", () => {
      const first: Todo = {
        id: "1",
        name: "todo",
        isCompleted: false
      };
      const second: Todo = {
        id: "2",
        name: "todo",
        isCompleted: false
      };

      const third: Todo = {
        id: "3",
        name: "todo",
        isCompleted: false
      };
      const mockStateWithTodos = {
        todos: [first, second, third]
      };

      const newState = reducer(
        mockStateWithTodos,
        editTodo({ ...second, name: "edited", description: "edited" })
      );

      const firstElement = newState.todos[1];
      expect(firstElement).not.toBeUndefined();
      expect(firstElement.name).toEqual("edited");
      expect(firstElement.description).toEqual("edited");
    });

    it("should edit todo with id from action payload", () => {
      const first: Todo = {
        id: "1",
        name: "todo",
        isCompleted: false
      };
      const second: Todo = {
        id: "2",
        name: "todo",
        isCompleted: false
      };

      const third: Todo = {
        id: "3",
        name: "todo",
        isCompleted: false
      };
      const mockStateWithTodos = {
        todos: [first, second, third]
      };

      const newState = reducer(
        mockStateWithTodos,
        editTodo({
          id: "10",
          name: "edited",
          description: "edited",
          isCompleted: false
        })
      );

      expect(newState).toEqual(mockStateWithTodos);
    });
  });
  describe("COMPLETE_TODO", () => {
    it("should change isCompleted to true", () => {
      const todo: Todo = {
        id: "3",
        name: "todo",
        isCompleted: false
      };
      const mockStateWithTodos = {
        todos: [todo]
      };

      const newState = reducer(mockStateWithTodos, completeTodo("3"));

      expect(newState.todos[0].isCompleted).toEqual(true);
    });
    it("should change isCompleted to false", () => {
      const todo: Todo = {
        id: "3",
        name: "todo",
        isCompleted: true
      };
      const mockStateWithTodos = {
        todos: [todo]
      };

      const newState = reducer(mockStateWithTodos, completeTodo("3"));

      expect(newState.todos[0].isCompleted).toEqual(false);
    });
  });
  describe("COMPLETE_ALL_TODOS", () => {
    it("should mark all todos as complete when COMPLETE_ALL_TODOS is dispatched", () => {
      const first: Todo = {
        id: "1",
        name: "todo",
        isCompleted: false
      };
      const second: Todo = {
        id: "2",
        name: "todo",
        isCompleted: false
      };

      const third: Todo = {
        id: "3",
        name: "todo",
        isCompleted: true
      };
      const mockStateWithTodos = {
        todos: [first, second, third]
      };

      const newState = reducer(mockStateWithTodos, completeAllTodos());

      newState.todos.forEach(todo => {
        expect(todo.isCompleted).toEqual(true);
      });
    });
  });
});
