import styled from "styled-components";

export const TodoSubmitButton = styled.button`
  padding: 0 1.3rem;
  border: none;
  background: #ff6666;
  color: white;
  text-transform: uppercase;
  border: 1px solid rgba(255, 255, 255, 0.3);
  margin-left: 5px;
  cursor: pointer;
  width: 5rem;
  height: 3rem;
  font-size: 0.8rem;
  font-weight: 400;
  outline: none;

  &:hover {
    background-color: #ff7676;
    transition: #ff7676 0.2s ease-out;
    -webkit-transition: #ff7676 0.2s ease-out;
  }
`;
