import React from "react";
import { Todo } from "../../types";
import { RouteComponentProps, Redirect } from "react-router-dom";
import { MapStateToProps, connect } from "react-redux";
import { StoreState } from "../../redux/store";
import { getTodo } from "../../redux/selectors/todosSelectors";
import { DetailsWrapper } from "./TodoDetailsStyles";
import {
  WrapperDiv,
  RowDiv,
  TodoBack,
  ElementWrapper
} from "../AddOrEditTodo/AddOrEditTodoStyles";
import { PreviewHeader } from "../TodosPreview/TodoPreviewStyles";

interface OwnProps extends RouteComponentProps<{ id: string }> {}
interface StateProps {
  todo?: Todo;
}
interface DispatchProps {}

type Props = OwnProps & StateProps & DispatchProps;

const TodoDetails: React.FC<Props> = ({ todo }) => {
  if (!todo) {
    return <Redirect to="/" />;
  }

  const { name, description } = todo;

  return (
    <WrapperDiv>
      <RowDiv>
        <TodoBack to="/">Back</TodoBack>
        <ElementWrapper>
          <PreviewHeader>{name}</PreviewHeader>
        </ElementWrapper>
        <DetailsWrapper>
          <p>{description}</p>
        </DetailsWrapper>
      </RowDiv>
    </WrapperDiv>
  );
};

const mapStateToProps: MapStateToProps<StateProps, OwnProps, StoreState> = (
  state,
  { match }
) => ({
  todo: getTodo(match.params.id)(state)
});

export default connect(mapStateToProps)(TodoDetails);
