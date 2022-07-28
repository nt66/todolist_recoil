import React from 'react';
import { RecoilRoot } from 'recoil';
import CharacterCounter from './components/CharacterCounter';
import './App.css';

function App() {
  return (
    <RecoilRoot>
      <div className="App">
        <h1>Recoil todo list demo</h1>
        <CharacterCounter />
      </div>
    </RecoilRoot>
  );
}

export default App;
