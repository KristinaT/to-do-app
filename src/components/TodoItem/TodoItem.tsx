import React from "react";
import { Todo } from "../../types";
import { deleteTodo, completeTodo } from "../../redux/actions/todoActions";
import { TodoLabel } from "../AddOrEditTodo/AddOrEditTodoStyles";
import { MapDispatchToProps, connect } from "react-redux";
import { Link } from "react-router-dom";

interface OwnProps {
  todo: Todo;
}
interface StateProps {}
interface DispatchProps {
  deleteTodo: (todoId: string) => void;
  completeTodo: (todoId: string) => void;
}

type Props = OwnProps & StateProps & DispatchProps;

const TodoItem: React.FC<Props> = ({ todo, completeTodo, deleteTodo }) => {
  const route = `/details/${todo.id}`;
  const handleDelete = () => {
    if (todo.id) {
      deleteTodo(todo.id);
    }
  };
  const handleComplete = () => {
    if (todo.id) {
      completeTodo(todo.id);
    }
  };
  return (
    <div>
      <Link to={route}>
        <TodoLabel key={todo.id}>{todo.name}</TodoLabel>
      </Link>

      <button onClick={handleComplete}>Done</button>
      <Link to={`/edit/${todo.id}`}>
        <button>Edit</button>
      </Link>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

const mapDispatchToProps: MapDispatchToProps<DispatchProps, OwnProps> = {
  deleteTodo,
  completeTodo
};
export default connect(
  null,
  mapDispatchToProps
)(TodoItem);
