import React, { useState, ChangeEvent } from "react";
import { Link } from "react-router-dom";
import { TodoDiv, TodoHeader } from "../AddOrEditTodo/AddOrEditTodoStyles";
import { Todo } from "../../types";
import { MapStateToProps, connect } from "react-redux";
import { StoreState } from "../../redux/store";
import { getTodos } from "../../redux/selectors/todosSelectors";
import { TodoSelect, FilterDiv } from "./TodoPreviewStyles";
import TodoItem from "../TodoItem/TodoItem";

interface OwnProps {}
interface StateProps {
  todos: Todo[];
}
interface DispatchProps {}

type Props = OwnProps & StateProps & DispatchProps;

enum FilterTypes {
  ALL = "all",
  ACTIVE = "active",
  COMPLETED = "completed"
}

const TodosPreview: React.FC<Props> = ({ todos }) => {
  const [filterType, setFilterType] = useState(FilterTypes.ALL);

  const handleSelectChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setFilterType(event.target.value as FilterTypes);
  };
  let filteredTodos = todos;
  if (filterType !== FilterTypes.ALL) {
    const areCompleted = filterType === FilterTypes.COMPLETED;

    filteredTodos = todos.filter(todo => todo.isCompleted === areCompleted);
  }

  return (
    <div>
      <Link to="/entry">Add a to-do</Link>
      <TodoDiv>
        <TodoHeader>Todos</TodoHeader>
        <FilterDiv>
          <h4>Filter by:</h4>
        </FilterDiv>
        <TodoSelect
          onChange={handleSelectChange}
          value={filterType}
          defaultValue={filterType}
        >
          <option value={FilterTypes.ACTIVE}>Active</option>
          <option value={FilterTypes.COMPLETED}>Completed</option>
          <option value={FilterTypes.ALL}>All</option>
        </TodoSelect>

        {filteredTodos.map((todo: Todo) => {
          return <TodoItem todo={todo} />;
        })}
      </TodoDiv>
    </div>
  );
};

const mapStateToProps: MapStateToProps<
  StateProps,
  OwnProps,
  StoreState
> = state => ({
  todos: getTodos(state)
});

export default connect(mapStateToProps)(TodosPreview);
