import React from 'react';
import { 
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from 'recoil';
import './App.css';

function App() {
  return (
    <RecoilRoot>
      <div className="App">
        <h1>Recoil todo list</h1>
        
      </div>
    </RecoilRoot>
  );
}

export default App;
