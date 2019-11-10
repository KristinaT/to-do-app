import React, { useState, ChangeEvent } from "react";
import {
  WrapperDiv,
  RowDiv,
  TodoBack,
  ElementWrapper
} from "../AddOrEditTodo/AddOrEditTodoStyles";
import { Todo } from "../../types";
import { MapStateToProps, connect } from "react-redux";
import { StoreState } from "../../redux/store";
import { getTodos } from "../../redux/selectors/todosSelectors";
import { TodoSelect, FilterDiv, FilterWrapper, FilterHeader, PreviewHeader } from "./TodoPreviewStyles";
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
    <WrapperDiv>
      <RowDiv>
        <TodoBack to="/entry">
          Add a todo
        </TodoBack>

        <PreviewHeader>Todo List</PreviewHeader>
        <FilterWrapper>
          <FilterDiv>
            <FilterHeader>Filter by:</FilterHeader>
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
        </FilterWrapper>

        <ElementWrapper>
          {filteredTodos.map((todo: Todo) => {
            return <TodoItem todo={todo} />;
          })}
        </ElementWrapper>
      </RowDiv>
    </WrapperDiv>
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
