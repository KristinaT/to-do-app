import React, { ChangeEvent } from "react";
import {
  TodoLabel,
  TodoInput,
  TodoTextarea,
  TodoButton
} from "../AddOrEditTodo/AddOrEditTodoStyles";

export interface InputProps {
  value?: string;
  onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

interface OwnProps {
  nameInputProps: InputProps;
  descriptionInputProps: InputProps;
  onSubmit: () => void;
  buttonLabel: string;
}

type Props = OwnProps;

const TodoForm: React.FC<Props> = ({
  nameInputProps,
  descriptionInputProps,
  onSubmit,
  buttonLabel
}) => {
  return (
    <React.Fragment>
      <TodoLabel>Task name</TodoLabel>
      <TodoInput id="name" {...nameInputProps} type="text" name="name" />
      <TodoLabel>Task description</TodoLabel>
      <TodoTextarea
        id="description"
        {...descriptionInputProps}
        name="description"
      />
      <TodoButton onClick={onSubmit} type="button" value={buttonLabel} />
    </React.Fragment>
  );
};

export default TodoForm;
