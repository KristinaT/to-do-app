import React, { ChangeEvent } from "react";
import { Todo, NewTodo } from "../../types";
import { addTodo, editTodo } from "../../redux/actions/todoActions";
import { TodoHeader, TodoDiv, WrapperDiv, RowDiv, TodoBack } from "./AddOrEditTodoStyles";
import { connect, MapDispatchToProps, MapStateToProps } from "react-redux";
import { Link, RouteComponentProps } from "react-router-dom";
import TodoForm from "../TodoForm/TodoForm";
import { StoreState } from "../../redux/store";
import { getTodo } from "../../redux/selectors/todosSelectors";

interface OwnProps extends RouteComponentProps<{ id?: string }> {
  editMode?: boolean;
}
interface StateProps {
  todo?: Todo;
}
interface DispatchProps {
  addTodo: (todo: NewTodo) => void;
  editTodo: (todo: Todo) => void;
}
type Props = OwnProps & StateProps & DispatchProps;

class AddOrEditTodo extends React.Component<Props, NewTodo> {
  constructor(props: Props) {
    super(props);

    if (props.todo) {
      this.state = {
        name: props.todo.name,
        description: props.todo.description
      };
    } else {
      this.state = {
        name: "",
        description: ""
      };
    }
  }

  handleField = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    event.preventDefault();

    const value = event.target.value;

    const field = event.target.id;

    this.setState({
      [field]: value
    });
  };

  clearState = (callback: () => void) => {
    this.setState(
      {
        name: "",
        description: ""
      },
      callback
    );
  };

  editTodo = () => {
    const { todo, editTodo, history } = this.props;
    const { name, description } = this.state;
    if (!todo) {
      return;
    }
    const newTodo = { ...todo, name, description };

    editTodo(newTodo);

    this.clearState(() => {
      history.push("/");
    });
  };

  addTodo = () => {
    const { addTodo, history } = this.props;

    addTodo(this.state);

    this.clearState(() => {
      history.push("/");
    });
  };

  render() {
    const { editMode } = this.props;
    return (
      <WrapperDiv>
        <RowDiv>
          <Link to="/">
            <TodoBack>Back</TodoBack>
          </Link>
          <TodoHeader>Todo entry</TodoHeader>
          <TodoForm
            nameInputProps={{
              value: this.state.name,
              onChange: this.handleField
            }}
            descriptionInputProps={{
              value: this.state.description,
              onChange: this.handleField
            }}
            onSubmit={editMode ? this.editTodo : this.addTodo}
            buttonLabel={editMode ? "Save" : "Add"}
          />
        </RowDiv>
      </WrapperDiv>
    );
  }
}

const mapStateToProps: MapStateToProps<StateProps, OwnProps, StoreState> = (
  state,
  { match }
) => {
  if (!match.params.id) {
    return {};
  }
  return {
    todo: getTodo(match.params.id)(state)
  };
};

const mapDispatchToProps: MapDispatchToProps<DispatchProps, OwnProps> = {
  addTodo,
  editTodo
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddOrEditTodo);
