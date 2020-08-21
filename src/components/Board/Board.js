import React from 'react';
import BoardRow from '../BoardRow/BoardRow';
import './Board.scss';
const col = 18;

const inputCells = {
  r0c4: 1, //G
  r1c4: 1, //O
  r2c4: 1, //O
  r3c4: 1, //G
  r4c4: 1, //L
  r5c4: 1, //E
  r6c4: 1, //F
  r7c4: 1, //U

  r2c3: 1, //H
  r2c4: 1, //O
  r2c5: 1, //W
  r2c6: 1, //D
  r2c7: 1, //Y
  r2c8: 1, //D
  r2c9: 1, //O
  r2c10: 1, //O
  r2c11: 1, //D
  r2c12: 1, //Y

  r4c2: 1, //T
  r4c3: 1, //A
  r4c4: 1, //L
  r4c5: 1, //K

  r5c6: 1, //S
  r5c7: 1, //A
  r5c8: 1, //L
  r5c9: 1, //M
  r5c10: 1, //O
  r5c11: 1, //N

  
}

// Create list of board rows
let rowsInBoard = [];
for (let i=0; i<col; i++) {
  rowsInBoard.push(
    <BoardRow 
      row={i} 
      col={col} 
      inputCells={inputCells}
    />
  )
}

class Board extends React.Component {
  state = {
    gameState: 'PLAYING'
  }

  submitHandler(e) {
    e.preventDefault();
    // compare all the cells to solution
    // if correct, change gameState and trigger a pop-up saying congrats
    // if incorrect, change gameState and trigger pop-up saying try again
    // ***note: im not sure if we actually need to change game state here...
    
    // Check board!
    if (e.target.r0c4.value.toLowerCase() === 'g'
      && e.target.r1c4.value.toLowerCase() === 'o'
      && e.target.r2c4.value.toLowerCase() === 'o'
      && e.target.r3c4.value.toLowerCase() === 'g'
      && e.target.r4c4.value.toLowerCase() === 'l'
      && e.target.r5c4.value.toLowerCase() === 'e'
      && e.target.r6c4.value.toLowerCase() === 'f'
      && e.target.r7c4.value.toLowerCase() === 'u')
        console.log("GOOGLEFU is correct!");
    else {
      console.log("1 down is wrong...");
    }

    if (e.target.r2c3.value.toLowerCase() === 'h'
      && e.target.r2c4.value.toLowerCase() === 'o'
      && e.target.r2c5.value.toLowerCase() === 'w'
      && e.target.r2c6.value.toLowerCase() === 'd'
      && e.target.r2c7.value.toLowerCase() === 'y'
      && e.target.r2c8.value.toLowerCase() === 'd'
      && e.target.r2c9.value.toLowerCase() === 'o'
      && e.target.r2c10.value.toLowerCase() === 'o'
      && e.target.r2c11.value.toLowerCase() === 'd'
      && e.target.r2c12.value.toLowerCase() === 'y')
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
/*
    if (e.target.r5c6.value.toLowerCase() === 's'
      && e.target.r6c6.value.toLowerCase() === 'u'
      && e.target.r7c6.value.toLowerCase() === 'p'
      && e.target.r8c6.value.toLowerCase() === 'p'
      && e.target.r9c6.value.toLowerCase() === 'o'
      && e.target.r10c6.value.toLowerCase() === 'r'
      && e.target.r11c6.value.toLowerCase() === 't'
      && e.target.r12c6.value.toLowerCase() === 'i'
      && e.target.r13c6.value.toLowerCase() === 'v'
      && e.target.r14c6.value.toLowerCase() === 'e')
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

    if (e.target.r6c14.value.toLowerCase() === 's'
      && e.target.r7c14.value.toLowerCase() === 'p'
      && e.target.r8c14.value.toLowerCase() === 'a')
        console.log("SPA is correct!");
    else {
      console.log("6 down is wrong...");
    }

    if (e.target.r7c2.value.toLowerCase() === 'g'
      && e.target.r7c3.value.toLowerCase() === 'r'
      && e.target.r7c4.value.toLowerCase() === 'u'
      && e.target.r7c5.value.toLowerCase() === 'm'
      && e.target.r7c6.value.toLowerCase() === 'p'
      && e.target.r7c7.value.toLowerCase() === 'y')
        console.log("GRUMPY is correct!");
    else {
      console.log("7 across is wrong...");
    }

    if (e.target.r7c10.value.toLowerCase() === 'e'
      && e.target.r8c10.value.toLowerCase() === 'v'
      && e.target.r9c10.value.toLowerCase() === 'i'
      && e.target.r10c10.value.toLowerCase() === 'l'
      && e.target.r11c10.value.toLowerCase() === 'd'
      && e.target.r12c10.value.toLowerCase() === 'a'
      && e.target.r13c10.value.toLowerCase() === 'n'
      && e.target.r14c10.value.toLowerCase() === 'i'
      && e.target.r15c10.value.toLowerCase() === 'i'
      && e.target.r16c10.value.toLowerCase() === 'l')
        console.log("EVIL DANIIL is correct!");
    else {
      console.log("8 down is wrong...");
    }

    if (e.target.r7c12.value.toLowerCase() === 's'
      && e.target.r7c13.value.toLowerCase() === 'i'
      && e.target.r7c14.value.toLowerCase() === 'p'
      && e.target.r7c15.value.toLowerCase() === 's'
      && e.target.r7c16.value.toLowerCase() === 'i'
      && e.target.r7c17.value.toLowerCase() === 'p')
        console.log("SIPSIP is correct!");
    else {
      console.log("9 across is wrong...");
    }
*/
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