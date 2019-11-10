import React, { ChangeEvent } from "react";
import {
  TodoLabel,
  TodoInput,
  TodoTextarea,
  ElementWrapper
} from "../AddOrEditTodo/AddOrEditTodoStyles";
import { TodoSubmitButton, ButtonWrapper } from "./TodoFormStyles";

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
      <ElementWrapper>
        <TodoLabel>Task name</TodoLabel>
      </ElementWrapper>
      <ElementWrapper>
        <TodoInput id="name" {...nameInputProps} type="text" name="name" />
      </ElementWrapper>
      <ElementWrapper>
        <TodoLabel>Task description</TodoLabel>
      </ElementWrapper>
      <ElementWrapper>
        <TodoTextarea
          id="description"
          {...descriptionInputProps}
          name="description"
        />
      </ElementWrapper>
      <ButtonWrapper>
        <TodoSubmitButton onClick={onSubmit} type="button">
          {buttonLabel}
        </TodoSubmitButton>
      </ButtonWrapper>
    </React.Fragment>
  );
};

export default TodoForm;
