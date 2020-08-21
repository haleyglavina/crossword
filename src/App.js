import React from 'react';
import Header from './components/Header/Header';
import Board from './components/Board/Board';
import Footer from './components/Footer/Footer';
import './App.css';

function App() {
  return (
    <>
      <main>
        <Header />
        <Board />
        <Footer />
      </main>
    </>
  );
}

export default App;
