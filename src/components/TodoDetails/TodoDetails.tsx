import React from "react";
import { Todo } from "../../types";
import {
  Link,
  RouteComponentProps,
  Redirect
} from "react-router-dom";
import { MapStateToProps, connect } from "react-redux";
import { StoreState } from "../../redux/store";
import { getTodo } from "../../redux/selectors/todosSelectors";

interface OwnProps extends RouteComponentProps<{ id: string }> {}
interface StateProps {
  todo?: Todo;
}
interface DispatchProps {}

type Props = OwnProps & StateProps & DispatchProps;

const TodoDetails: React.FC<Props> = ({ todo }) => {
  if (!todo) {
    return <Redirect to="/" />
  }

  const { name, description } = todo;

  return (
    <div>
      <Link to="/">Back</Link>

      <h2>Details</h2>
      <label>Name</label>
      <p>{name}</p>
      <label>Description</label>
      <p>{description}</p>
    </div>
  );
};

const mapStateToProps: MapStateToProps<StateProps, OwnProps, StoreState> = (
  state,
  { match }
) => ({
  todo: getTodo(match.params.id)(state)
});

export default connect(mapStateToProps)(TodoDetails);
