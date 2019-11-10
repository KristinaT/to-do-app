import React from "react";
import AddOrEditTodo from "./components/AddOrEditTodo/AddOrEditTodo";
import TodosPreview from "./components/TodosPreview/TodosPreview";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import TodoDetails from "./components/TodoDetails/TodoDetails";
import { GlobalStyle } from "./GlobalStyle";
import { ThemeProvider } from "styled-components";

const App: React.FC = () => {
  return (
    <ThemeProvider theme={{}}>
      <GlobalStyle />
      <Router>
        <Switch>
          <Route path="/entry" render={props => <AddOrEditTodo {...props} />} />
          <Route
            path="/edit/:id"
            render={props => <AddOrEditTodo {...props} editMode />}
          />
          <Route path="/" component={TodosPreview} exact />
          <Route path="/details/:id" component={TodoDetails} />
        </Switch>
      </Router>
    </ThemeProvider>
  );
};

export default App;
