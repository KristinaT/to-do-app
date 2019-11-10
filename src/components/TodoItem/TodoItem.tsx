import React from "react";
import { withTheme, StyledProps } from "styled-components";
import { Todo } from "../../types";
import { deleteTodo, completeTodo } from "../../redux/actions/todoActions";
import { MapDispatchToProps, connect } from "react-redux";
import { Link } from "react-router-dom";
import { TodoActionButton, TodoItemWrapper, TodoLink } from "./TodoItemStyles";
import MaterialIcon from "material-icons-react";

interface OwnProps extends StyledProps<{}> {
  todo: Todo;
}

interface StateProps {}
interface DispatchProps {
  deleteTodo: (todoId: string) => void;
  completeTodo: (todoId: string) => void;
}

type Props = OwnProps & StateProps & DispatchProps;

const TodoItem: React.FC<Props> = ({ todo, completeTodo, deleteTodo, theme }) => {
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
        <TodoLink isCompleted={todo.isCompleted} to={route}>
          {todo.name}
        </TodoLink>
      </div>
      <div>
        <TodoActionButton onClick={handleComplete}>
          <MaterialIcon icon="done" color={theme.text} />
        </TodoActionButton>
        <Link to={`/edit/${todo.id}`}>
          <TodoActionButton>
            <MaterialIcon icon="edit" color={theme.text} />
          </TodoActionButton>
        </Link>
        <TodoActionButton onClick={handleDelete}>
          <MaterialIcon icon="delete" color={theme.text} />
        </TodoActionButton>
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
)(withTheme(TodoItem));
