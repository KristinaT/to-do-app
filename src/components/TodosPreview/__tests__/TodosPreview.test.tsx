import React from "react";
import { Todo } from "../../../types";
import { StoreState } from "../../../redux/store";
import { renderWithRedux } from "../../../utils/react-testing-library";
import TodosPreview from "../TodosPreview";
import "@testing-library/jest-dom/extend-expect";

jest.mock("../../TodoItem/TodoItem.tsx", () => {
  const TodoItem: React.FC<{ todo: Todo }> = ({ todo }) => (
    <div data-testid={`todo-${todo.id}`}>{todo.name}</div>
  );

  return TodoItem;
});

describe("TodosPreview", () => {
  it("should render todo items", () => {
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

    const initialState: StoreState = {
      todos: {
        todos: [first, second, third]
      }
    };

    const { getByTestId } = renderWithRedux(<TodosPreview />, {
      initialState
    });

    const firstItem = getByTestId(`todo-${first.id}`);
    const secondItem = getByTestId(`todo-${second.id}`);
    const thirdItem = getByTestId(`todo-${third.id}`);

    expect(firstItem).toBeVisible();
    expect(secondItem).toBeVisible();
    expect(thirdItem).toBeVisible();

    expect(firstItem.innerHTML.includes(first.name)).toBe(true);
    expect(secondItem.innerHTML.includes(second.name)).toBe(true);
    expect(thirdItem.innerHTML.includes(third.name)).toBe(true);
  });
});
