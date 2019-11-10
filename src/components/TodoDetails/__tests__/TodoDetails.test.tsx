import React from "react";
import { Route } from "react-router-dom";
import { Todo } from "../../../types";
import TodoDetails from "../TodoDetails";
import { renderWithRedux } from "../../../utils/react-testing-library";
import { StoreState } from "../../../redux/store";
import { createMemoryHistory } from "history";

import "@testing-library/jest-dom/extend-expect";

describe("TodoItem", () => {
  it("should render name and description for todo", () => {
    const todo: Todo = {
      id: "1",
      name: "Test todo",
      description: "Test todo desc",
      isCompleted: false
    };

    const mockedState: StoreState = {
      todos: {
        todos: [todo]
      }
    };

    const history = createMemoryHistory();

    history.push(`/${todo.id}`);

    const { getByText } = renderWithRedux(
      <Route path="/:id" component={TodoDetails} />,
      {
        initialState: mockedState,
        history
      }
    );

    const todoName = getByText(todo.name);
    expect(todoName).toBeVisible();

    const todoDescription = getByText(todo.description as string);
    expect(todoDescription).toBeVisible();
  });
  it("should redirect for invalid url", () => {
    const todo: Todo = {
      id: "1",
      name: "Test todo",
      description: "Test todo desc",
      isCompleted: false
    };

    const mockedState: StoreState = {
      todos: {
        todos: [todo]
      }
    };

    const history = createMemoryHistory();

    history.push(`/test`);

    const { container } = renderWithRedux(
      <React.Fragment>
        <Route path="/:id" component={TodoDetails} />
        <Route path="/" exact render={() => <div>Redirect</div>} />
      </React.Fragment>,
      {
        initialState: mockedState,
        history
      }
    );

    expect(container.innerHTML.includes('Redirect')).toEqual(true);
  });
});
