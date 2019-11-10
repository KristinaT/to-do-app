import styled from "styled-components";
import { ElementWrapper } from "../AddOrEditTodo/AddOrEditTodoStyles";

export const TodoSubmitButton = styled.button`
  padding: 0 2rem;
  border: none;
  background: ${props => props.theme.primary};
  color: white;
  text-transform: uppercase;
  border: 1px solid rgba(255, 255, 255, 0.3);
  margin-left: 5px;
  cursor: pointer;
  height: 3rem;
  font-size: 0.8rem;
  font-weight: 400;
  outline: none;
  transition: background-color 0.2s ease-out;

  &:hover {
    background-color: ${props => props.theme.accent};
  }
`;

export const ButtonWrapper = styled(ElementWrapper)`
  text-align: center;
`;
