import React from "react";
import { Todo } from "../../types";
import { addTodo } from "../../redux/actions/todoActions";
import {
  TodoHeader,
  TodoLabel,
  TodoButton,
  TodoTextarea,
  TodoInput,
  TodoDiv
} from "./TodoEntryStyles";
import { connect, MapDispatchToProps } from "react-redux";

interface OwnProps { }
interface StateProps {}
interface DispatchProps {
  addTodo: (todo: Todo) => void;
}

type Props = OwnProps & StateProps & DispatchProps;

class TodoEntry extends React.Component<Props> {
  state: Todo = {
    name: "",
    description: "",
    isCompleted: false
  };

  handleField = (event: any) => {
    event.preventDefault();

    const value = event.target.value;

    event.target.id === "name"
      ? this.setState({ name: value })
      : this.setState({ description: value });
  };

  clearState = () => {
    this.setState(
      {
        name: "",
        description: "",
        isCompleted: false,
      }
      // callback
    );
  };

  addTodo = () => {
    const { addTodo } = this.props;

    addTodo(this.state);

    this.clearState();
  };

  render() {
    return (
      <TodoDiv>
        <TodoHeader>Todo entry</TodoHeader>
        <TodoLabel>Task name</TodoLabel>
        <TodoInput
          id="name"
          value={this.state.name}
          onChange={this.handleField}
          type="text"
          name="name"
        />
        <TodoLabel>Task description</TodoLabel>

        <TodoTextarea
          id="description"
          value={this.state.description}
          onChange={this.handleField}
          name="description"
        ></TodoTextarea>
        <TodoButton onClick={this.addTodo} type="button" value="Add" />
      </TodoDiv>
    );
  }
}

const mapDispatchToProps: MapDispatchToProps<DispatchProps, OwnProps> = {
  addTodo
};

export default connect(
  null,
  mapDispatchToProps
)(TodoEntry);
