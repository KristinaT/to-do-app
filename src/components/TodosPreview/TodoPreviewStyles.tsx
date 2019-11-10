import styled from "styled-components";
import { TodoHeader } from "../AddOrEditTodo/AddOrEditTodoStyles";

export const TodoSelect = styled.select`
  margin-bottom: 1rem;
  width: 6.5rem;
  background: transparent;
  border: 1px solid rgba(255, 255, 255, 0.3);
  color: #fff;
  font-size: 1rem;
  margin-left: 0.8rem;
  outline: none;
`;

export const FilterWrapper = styled.div`
  width: 90%;
  margin: 1rem;
  display: flex;
`;

export const FilterDiv = styled.div`
  display: flex;
`;

export const FilterHeader = styled.header`
  font-weight: 400;
  font-size: 1rem;
  letter-spacing: 1px;
`;

export const PreviewHeader = styled(TodoHeader)`
  padding-bottom: 0.2rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.3);
`;
