import React from 'react';
import Board from './components/Board/Board';
import Hints from './components/Hints/Hints';
import './App.css';

const popUp = (errors) => {
  console.log(errors);
}

function App() {
  return (
    <>
      <main>
        <Board popUp={popUp}/>
        <Hints />
      </main>
    </>
  );
}

export default App;
