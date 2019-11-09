import React from 'react';
import './App.css';
import TodoEntry from './components/TodoEntry/TodoEntry';
import TodosPreview from './components/TodosPreview/TodosPreview';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route path="/entry">
          <TodoEntry></TodoEntry>
        </Route>
        <Route path="/">
          <TodosPreview></TodosPreview>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
