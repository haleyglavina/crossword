import React from 'react';
import Board from './components/Board/Board';
import Hints from './components/Hints/Hints';
import PopUp from './components/PopUp/PopUp';
import './App.css';


class App extends React.Component {

  state = {
    won: false,
    errors: [],
    firstRender: true
  }

  popUp = (errorLi) => {
    console.log("Errors:",errorLi);
    if (errorLi.length === 0) {
      this.setState({
        won: true,
        firstRender: false,
        errorLi: []
      });
    } else { 
      this.setState({
      errors: errorLi,
      won: false,
      firstRender: false
      });
    }
  }

  render() {
    return (
      <>
        <main>
          <Board popUp={this.popUp}/>
          <Hints />
          <PopUp won={this.state.won} firstRender={this.state.firstRender} errorLi={this.state.errors}/>
        </main>
      </>
    );
  }
}

export default App;
