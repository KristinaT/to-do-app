import styled from "styled-components";
import { Link } from "react-router-dom";

export const WrapperDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  margin: 4rem auto;
  padding: 2rem 3rem 3rem;
  max-width: 40rem;
  background: ${props => props.theme.primary};
  color: ${props => props.theme.text};
  box-shadow: -20px -20px 0px 0px rgba(100, 100, 100, 0.1);
`;

export const RowDiv = styled.div`
  flex-direction: row;
  background: ${props => props.theme.primary};
  width: 30rem;
`;

export const ElementWrapper = styled.div`
  width: 90%;
  margin: 1rem;
`;

export const TodoDiv = styled.div`
  margin: 1rem;
  display: flex;
  flex-direction: column;
  width: 50vw;
`;

export const TodoHeader = styled.header`
  text-align: center;
  font-weight: 400;
  font-size: 2.6rem;
  letter-spacing: 0.05em;
`;

export const TodoLabel = styled.label`
  margin: 0.5rem;
  font-size: 1rem;
  font-weight: 400;
  letter-spacing: 4px;
  text-align: center;
`;

export const TodoInput = styled.input`
  margin-left: 1rem;
  border: none;
  outline: none;
  background: none;
  font-size: 1rem;
  border-bottom: 1px solid ${props => props.theme.border};
  text-align: center;
  color: ${props => props.theme.text};
  width: 100%;
  font-weight: 300;
`;

export const TodoTextarea = styled.textarea`
  margin-left: 0.5rem;
  height: 10rem;
  outline: none;
  background: none;
  border: 1px solid ${props => props.theme.border};
  width: 100%;
  font-size: 1rem;
  text-align: center;
  background: ${props => props.theme.secondary};
  font-weight: 300;
`;

export const TodoBack = styled(Link)`
  color: ${props => props.theme.secondary};
  font-size: 0.8rem;
  text-decoration: none;
`;

export const TodoButton = styled.input`
  width: 6rem;
  margin: 1rem;
  color: white;
  font-size: 15px;
  background-color: #50617a;
  width: 200px;
  height: 60px;
  border: none;
  border-radius: 5px;
  align-self: center;
  text-transform: uppercase;

  :hover,
  :focus {
    cursor: pointer;
  }
`;
