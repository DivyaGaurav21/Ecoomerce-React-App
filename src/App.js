import React from 'react'
import './App.css';
import Coin from './features/coin/Coin';
import Counter from './features/counter/Counter';


function App() {
   

  return (
      <div className="App">
          <h1>REDUX</h1>
          <Counter />
          <Coin/>
    </div>
  );
}

export default App;
