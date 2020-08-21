import React from 'react';
import Board from './components/Board/Board';
import Hints from './components/Hints/Hints';
import './App.css';

function App() {
  return (
    <>
      <main>
        <Board />
        <Hints />
      </main>
    </>
  );
}

export default App;
