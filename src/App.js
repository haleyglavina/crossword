import React from 'react';
import Header from './components/Header/Header';
import Board from './components/Board/Board';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
import './App.css';

function App() {
  return (
    <>
      <main>
        <Header />
        <Main />
        <Footer />
      </main>
    </>
  );
}

export default App;
