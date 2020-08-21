import React from 'react';
import BoardRow from '../BoardRow/BoardRow';
import './Board.scss';
const col = 18;

// Create list of board rows
let rowsInBoard = [];
for (let i=0; i<col; i++) {
  rowsInBoard.push(<BoardRow row={i} col={col} />)
}

class Board extends React.Component {
  state = {
    gameState: 'PLAYING',

    r0c4: '', //G
    r1c4: '', //O
    r2c4: '', //O
    r3c4: '', //G
    r4c4: '', //L
    r5c4: '', //E
    r6c4: '', //F
    r7c4: '', //U

    r2c3: '', //H
    r2c4: '', //O
    r2c5: '', //W
    r2c6: '', //D
    r2c7: '', //Y
    r2c8: '', //D
    r2c9: '', //O
    r2c10: '', //O
    r2c11: '', //D
    r2c12: '', //Y

    r4c2: '', //T
    r4c3: '', //A
    r4c4: '', //L
    r4c5: '', //K

  }

  submitHandler(e) {
    e.preventDefault();
    // compare all the cells to solution
    // if correct, change gameState and trigger a pop-up saying congrats
    // if incorrect, change gameState and trigger pop-up saying try again
    // ***note: im not sure if we actually need to change game state here...
    
    // Check board!
    if (e.target.r0c4.value.toLowerCase() === 'g'
      && e.target.r0c5.value.toLowerCase() === 'o'
      && e.target.r0c6.value.toLowerCase() === 'o'
      && e.target.r0c7.value.toLowerCase() === 'g'
      && e.target.r0c8.value.toLowerCase() === 'l'
      && e.target.r0c9.value.toLowerCase() === 'e'
      && e.target.r0c10.value.toLowerCase() === 'f'
      && e.target.r0c11.value.toLowerCase() === 'u')
        console.log("GOOGLEFU is correct!");
    else {
      console.log("2 across is wrong...");
    }

    if (e.target.r2c3.value.toLowerCase() === 'h'
      && e.target.r2c3.value.toLowerCase() === 'o'
      && e.target.r2c3.value.toLowerCase() === 'w'
      && e.target.r2c3.value.toLowerCase() === 'd'
      && e.target.r2c3.value.toLowerCase() === 'y'
      && e.target.r2c3.value.toLowerCase() === 'd'
      && e.target.r2c3.value.toLowerCase() === 'o'
      && e.target.r2c3.value.toLowerCase() === 'o'
      && e.target.r2c3.value.toLowerCase() === 'd'
      && e.target.r2c3.value.toLowerCase() === 'y')
        console.log("HOWDYDOODY is correct!");
    else {
      console.log("2 across is wrong...");
    }

    if (e.target.r4c2.value.toLowerCase() === 't'
      && e.target.r4c3.value.toLowerCase() === 'a'
      && e.target.r4c4.value.toLowerCase() === 'l'
      && e.target.r4c5.value.toLowerCase() === 'k')
        console.log("TALK is correct!");
    else {
      console.log("3 across is wrong...");
    }

    if (e.target.r5c6.value.toLowerCase() === 's'
      && e.target.r5c7.value.toLowerCase() === 'a'
      && e.target.r5c8.value.toLowerCase() === 'l'
      && e.target.r5c9.value.toLowerCase() === 'm'
      && e.target.r5c10.value.toLowerCase() === 'o'
      && e.target.r5c11.value.toLowerCase() === 'n')
        console.log("SALMON is correct!");
    else {
      console.log("4 across is wrong...");
    }

    if (e.target.r5c16.value.toLowerCase() === 'q'
      && e.target.r6c16.value.toLowerCase() === 'u'
      && e.target.r7c16.value.toLowerCase() === 'i'
      && e.target.r8c16.value.toLowerCase() === 'c'
      && e.target.r9c16.value.toLowerCase() === 'k')
        console.log("SUPPORTIVE is correct!");
    else {
      console.log("4 down is wrong...");
    }

    if (e.target.r5c16.value.toLowerCase() === 'q'
      && e.target.r6c16.value.toLowerCase() === 'u'
      && e.target.r7c16.value.toLowerCase() === 'i'
      && e.target.r8c16.value.toLowerCase() === 'c'
      && e.target.r9c16.value.toLowerCase() === 'k')
        console.log("QUICK is correct!");
    else {
      console.log("5 down is wrong...");
    }

    return;
  }

  render() {
    return (
      <form onSubmit={this.submitHandler}>
        {rowsInBoard}
        <button type="submit">Submit all</button>
      </form>
      );
  }
}

export default Board;