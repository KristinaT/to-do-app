import styled from "styled-components";
import { Link } from "react-router-dom";

export const TodoSelect = styled.select`
  margin-bottom: 1rem;
  width: 5rem;
`;

export const TodoActionButton = styled.button`
  padding: 0 0.5rem;
  border: none;
  background: transparent;
  color: white;
  text-transform: uppercase;
  cursor: pointer;
  font-size: 0.8rem;
  outline: none;
`;

export const TodoItemWrapper = styled.div`
  padding: 1.1rem;
  margin-bottom: 0.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: rgba(255, 255, 255, 0.1);
`;

export const TodoLink = styled(Link)`
  margin: 0.5rem;
  font-size: 1rem;
  font-weight: 400;
  letter-spacing: 1px;
  color: #ffffff;
  text-decoration: none;
  text-align: center;

  a:visited {
    color: #ffffff;
  }
`;
