import React from "react";
import configureMockStore from "redux-mock-store";
import { fireEvent } from "@testing-library/react";
import { renderWithRedux } from "../../../utils/react-testing-library";
import { Todo } from "../../../types";

import "@testing-library/jest-dom/extend-expect";

import TodoItem from "../TodoItem";
import { completeTodo, deleteTodo } from "../../../redux/actions/todoActions";

describe("TodoItem", () => {
  const mockStoreCreator = configureMockStore();
  const mockStore = mockStoreCreator();

  beforeEach(() => {
    mockStore.clearActions();
  });

  it("should render the todo name and action buttons", () => {
    const todo: Todo = {
      id: "1",
      name: "Test todo",
      description: "Test todo desc",
      isCompleted: false
    };

    const { getByText, getByTestId } = renderWithRedux(
      <TodoItem todo={todo} />
    );

    const todoName = getByText(todo.name);
    expect(todoName).toBeVisible();

    const editButton = getByTestId("edit-btn");
    expect(editButton).toBeVisible();

    const completeButton = getByTestId("complete-btn");
    expect(completeButton).toBeVisible();

    const deleteButton = getByTestId("delete-btn");
    expect(deleteButton).toBeVisible();
  });

  it("should dispatch COMPLETE_TODO action on complete-btn click", () => {
    const todo: Todo = {
      id: "1",
      name: "Test todo",
      description: "Test todo desc",
      isCompleted: false
    };

    const { getByTestId } = renderWithRedux(<TodoItem todo={todo} />, {
      store: mockStore
    });

    const completeButton = getByTestId("complete-btn");

    fireEvent.click(completeButton);

    expect(mockStore.getActions()).toEqual([completeTodo(todo.id as string)]);
  });

  it("should dispatch DELETE_TODO action on complete-btn click", () => {
    const todo: Todo = {
      id: "1",
      name: "Test todo",
      description: "Test todo desc",
      isCompleted: false
    };

    const { getByTestId } = renderWithRedux(<TodoItem todo={todo} />, {
      store: mockStore
    });

    const deleteButton = getByTestId("delete-btn");

    fireEvent.click(deleteButton);

    expect(mockStore.getActions()).toEqual([deleteTodo(todo.id as string)]);
  });
});
