import React from "react";
import { Todo } from "../../types";
import { deleteTodo, completeTodo } from "../../redux/actions/todoActions";
import { MapDispatchToProps, connect } from "react-redux";
import { Link } from "react-router-dom";
import {
  TodoActionButton,
  TodoItemWrapper,
  TodoLink
} from "./TodoItemStyles";

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
    <TodoItemWrapper>
      <div>
        <TodoLink to={route}>{todo.name}</TodoLink>
      </div>
      <div>
        <TodoActionButton onClick={handleComplete}>Done</TodoActionButton>
        <Link to={`/edit/${todo.id}`}>
          <TodoActionButton>
            Edit
          </TodoActionButton>
        </Link>
        <TodoActionButton onClick={handleDelete}>Delete</TodoActionButton>
      </div>
    </TodoItemWrapper>
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
