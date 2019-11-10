import { StoreState } from "../../store";
import { getTodo } from "../todosSelectors";

describe("todosSelectors", () => {
  const mockTodo = {
    id: "1",
    name: "test",
    description: "test desc",
    isCompleted: false
  };
  const mockState: StoreState = {
    todos: {
      todos: [
        {
          ...mockTodo
        }
      ]
    }
  };

  describe("getTodo", () => {
    it("should return the todo with the specified ID", () => {
      const todo = getTodo("1")(mockState);

      expect(todo).not.toBeUndefined();
      expect(todo).toEqual(mockTodo);
    });

    it('should return undefined if there is no todo with the specified ID', () => {
      const todo = getTodo("33")(mockState);

      expect(todo).toBeUndefined();
    })
  });
});
