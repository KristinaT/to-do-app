import React from "react";
import { Link } from "react-router-dom";
import { TodoDiv, TodoHeader, TodoLabel } from "../TodoEntry/TodoEntryStyles";
import { Todo } from "../../types";
import { MapStateToProps, connect } from "react-redux";
import { StoreState } from "../../redux/store";
import { getTodos } from "../../redux/selectors/todosSelectors";

interface OwnProps {}
interface StateProps {
  todos: Todo[];
}
interface DispatchProps {}

type Props = OwnProps & StateProps & DispatchProps;

const TodosPreview: React.FC<Props> = ({ todos }) => {
  return (
    <div>
      <Link to="/entry">Add a to-do</Link>
      <TodoDiv>
        <TodoHeader>Todos</TodoHeader>
        {todos.map((todo: Todo) => {
          return <TodoLabel key={todo.id}>{todo.name}</TodoLabel>;
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
