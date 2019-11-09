import React from 'react';
import './App.css';
import TodoEntry from './components/TodoEntry/TodoEntry';

const App: React.FC = () => {
  return (
    <div className="App">
      <TodoEntry></TodoEntry>
    </div>
  );
}

export default App;
