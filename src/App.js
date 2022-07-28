import React from 'react';
import { RecoilRoot } from 'recoil';
import CharacterCounter from './components/CharacterCounter';
import TodoList from './components/TodoList';
import './App.css';

function App() {
  return (
    <RecoilRoot>
      <div className="App">
        <h1>Recoil todo list</h1>
        <h2>characterCounter demo</h2>
        <CharacterCounter />
        <h2>to do demo</h2>
        <TodoList />
      </div>
    </RecoilRoot>
  );
}

export default App;
