import React from 'react';
import BoardRow from '../BoardRow/BoardRow';
import {v4 as uuid} from 'uuid';
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

  r5c6: 1, //'s'
  r6c6: 1, //'u'
  r7c6: 1, //'p'
  r8c6: 1, //'p'
  r9c6: 1, //'o'
  r10c6: 1, //'r'
  r11c6: 1, //'t'
  r12c6: 1, //'i'
  r13c6: 1, //'v'
  r14c6: 1, //'e'

  r5c16: 1, //'q'
  r6c16: 1, //'u'
  r7c16: 1, //'i'
  r8c16: 1, //'c'
  r9c16: 1, //'k'

  r6c14: 1, //'s'
  r7c14: 1, //'p'
  r8c14: 1, //'a'
  
  r7c2: 1, //'g'
  r7c3: 1, //'r'
  r7c4: 1, //'u'
  r7c5: 1, //'m'
  r7c6: 1, //'p'
  r7c7: 1, //'y'

  r7c10: 1, //'e'
  r8c10: 1, //'v'
  r9c10: 1, //'i'
  r10c10: 1, //'l'
  r11c10: 1, //'d'
  r12c10: 1, //'a'
  r13c10: 1, //'n'
  r14c10: 1, //'i'
  r15c10: 1, //'i'
  r16c10: 1, //'l'

  r7c12: 1, //'s'
  r7c13: 1, //'i'
  r7c14: 1, //'p'
  r7c15: 1, //'s'
  r7c16: 1, //'i'
  r7c17: 1, //'p'

  r7c12: 1, //'s'
  r8c12: 1, //'m'
  r9c12: 1, //'a'
  r10c12: 1, //'l'
  r11c12: 1, //'l'
  r12c12: 1, //'w'
  r13c12: 1, //'i'
  r14c12: 1, //'n'
  r15c12: 1, //'s'

  r8c8: 1, //'b'
  r9c8: 1, //'a'
  r10c8: 1, //'c'
  r11c8: 1, //'k'
  r12c8: 1, //'g'
  r13c8: 1, //'a'
  r14c8: 1, //'m'
  r15c8: 1, //'m'
  r16c8: 1, //'o'
  r17c8: 1, //'n'

  r9c3: 1, //'a'
  r9c4: 1, //'u'
  r9c5: 1, //'t'
  r9c6: 1, //'o'
  r9c7: 1, //'m'
  r9c8: 1, //'a'
  r9c9: 1, //'g'
  r9c10: 1, //'i'
  r9c11: 1, //'c'
  r9c12: 1, //'a'
  r9c13: 1, //'l'

  r10c1: 1, //'c'
  r11c1: 1, //'a'
  r12c1: 1, //'t'

  r11c0: 1, //'h'
  r11c1: 1, //'a'
  r11c2: 1, //'r'
  r11c3: 1, //'d'
  r11c4: 1, //'e'
  r11c5: 1, //'s'
  r11c6: 1, //'t'

  r12c12: 1, //'w'
  r12c13: 1, //'i'
  r12c14: 1, //'l'
  r12c15: 1, //'d'

  r13c4: 1, //'t'
  r14c4: 1, //'i'
  r15c4: 1, //'m'
  r16c4: 1, //'e'

  r14c0: 1, //'o'
  r14c1: 1, //'f'
  r14c2: 1, //'f'
  r14c3: 1, //'l'
  r14c4: 1, //'i'
  r14c5: 1, //'n'
  r14c6: 1, //'e'

  r17c6: 1, //'p'
  r17c7: 1, //'u'
  r17c8: 1, //'n'
}

// Create list of board rows
let rowsInBoard = [];
for (let i=0; i<col; i++) {
  rowsInBoard.push(
    <BoardRow 
      row={i} 
      col={col} 
      inputCells={inputCells}
      key={uuid()}
    />
  )
}

class Board extends React.Component {
  state = {
    gameState: 'PLAYING'
  }

  //popUp = this.props.popUp;

  submitHandler(e) {
    e.preventDefault();
    const errors = [];
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
      errors.push("1 down");
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
      errors.push("2 across");
      console.log("2 across is wrong...");
    }

    if (e.target.r4c2.value.toLowerCase() === 't'
      && e.target.r4c3.value.toLowerCase() === 'a'
      && e.target.r4c4.value.toLowerCase() === 'l'
      && e.target.r4c5.value.toLowerCase() === 'k')
        console.log("TALK is correct!");
    else {
      errors.push("3 across");
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
      errors.push("4 across");
      console.log("4 across is wrong...");
    }

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
      errors.push("4 down");
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
      errors.push("6 down");
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
      errors.push("7 across");
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
      errors.push("8 down");
      console.log("8 down is wrong...");
    }

    if (e.target.r7c12.value.toLowerCase() === 's'
      && e.target.r7c13.value.toLowerCase() === 'i'
      && e.target.r7c14.value.toLowerCase() === 'p'
      && e.target.r7c15.value.toLowerCase() === 's'
      && e.target.r7c16.value.toLowerCase() === 'i'
      && e.target.r7c17.value.toLowerCase() === 'p')
        console.log("SIP SIP is correct!");
    else {
      errors.push("9 across");
      console.log("9 across is wrong...");
    }

    if (e.target.r7c12.value.toLowerCase() === 's'
      && e.target.r8c12.value.toLowerCase() === 'm'
      && e.target.r9c12.value.toLowerCase() === 'a'
      && e.target.r10c12.value.toLowerCase() === 'l'
      && e.target.r11c12.value.toLowerCase() === 'l'
      && e.target.r12c12.value.toLowerCase() === 'w'
      && e.target.r13c12.value.toLowerCase() === 'i'
      && e.target.r14c12.value.toLowerCase() === 'n'
      && e.target.r15c12.value.toLowerCase() === 's')
        console.log("SMALL WINS is correct!");
    else {
      errors.push("9 down");
      console.log("9 down is wrong...");
    }

    if (e.target.r8c8.value.toLowerCase() === 'b'
      && e.target.r9c8.value.toLowerCase() === 'a'
      && e.target.r10c8.value.toLowerCase() === 'c'
      && e.target.r11c8.value.toLowerCase() === 'k'
      && e.target.r12c8.value.toLowerCase() === 'g'
      && e.target.r13c8.value.toLowerCase() === 'a'
      && e.target.r14c8.value.toLowerCase() === 'm'
      && e.target.r15c8.value.toLowerCase() === 'm'
      && e.target.r16c8.value.toLowerCase() === 'o'
      && e.target.r17c8.value.toLowerCase() === 'n')
        console.log("BACKGAMMON is correct!");
    else {
      errors.push("10 down");
      console.log("10 down is wrong...");
    }

    if (e.target.r9c3.value.toLowerCase() === 'a'
      && e.target.r9c4.value.toLowerCase() === 'u'
      && e.target.r9c5.value.toLowerCase() === 't'
      && e.target.r9c6.value.toLowerCase() === 'o'
      && e.target.r9c7.value.toLowerCase() === 'm'
      && e.target.r9c8.value.toLowerCase() === 'a'
      && e.target.r9c9.value.toLowerCase() === 'g'
      && e.target.r9c10.value.toLowerCase() === 'i'
      && e.target.r9c11.value.toLowerCase() === 'c'
      && e.target.r9c12.value.toLowerCase() === 'a'
      && e.target.r9c13.value.toLowerCase() === 'l')
        console.log("AUTOMAGICAL is correct!");
    else {
      errors.push("11 across");
      console.log("11 across is wrong...");
    }  
    
    if (e.target.r10c1.value.toLowerCase() === 'c'
      && e.target.r11c1.value.toLowerCase() === 'a'
      && e.target.r12c1.value.toLowerCase() === 't')
        console.log("CAT is correct!");
    else {
      errors.push("12 down");
      console.log("12 down is wrong...");
    }

    if (e.target.r11c0.value.toLowerCase() === 'h'
      && e.target.r11c1.value.toLowerCase() === 'a'
      && e.target.r11c2.value.toLowerCase() === 'r'
      && e.target.r11c3.value.toLowerCase() === 'd'
      && e.target.r11c4.value.toLowerCase() === 'e'
      && e.target.r11c5.value.toLowerCase() === 's'
      && e.target.r11c6.value.toLowerCase() === 't')
        console.log("HARDEST is correct!");
    else {
      errors.push("13 across");
      console.log("13 across is wrong...");
    }

    if (e.target.r12c12.value.toLowerCase() === 'w'
      && e.target.r12c13.value.toLowerCase() === 'i'
      && e.target.r12c14.value.toLowerCase() === 'l'
      && e.target.r12c15.value.toLowerCase() === 'd')
        console.log("WILD is correct!");
    else {
      errors.push("14 across");
      console.log("14 across is wrong...");
    }

    if (e.target.r13c4.value.toLowerCase() === 't'
      && e.target.r14c4.value.toLowerCase() === 'i'
      && e.target.r15c4.value.toLowerCase() === 'm'
      && e.target.r16c4.value.toLowerCase() === 'e')
        console.log("TIME is correct!");
    else {
      errors.push("15 down");
      console.log("15 down is wrong...");
    }

    if (e.target.r14c0.value.toLowerCase() === 'o'
      && e.target.r14c1.value.toLowerCase() === 'f'
      && e.target.r14c2.value.toLowerCase() === 'f'
      && e.target.r14c3.value.toLowerCase() === 'l'
      && e.target.r14c4.value.toLowerCase() === 'i'
      && e.target.r14c5.value.toLowerCase() === 'n'
      && e.target.r14c6.value.toLowerCase() === 'e')
        console.log("OFFLINE is correct!");
    else {
      errors.push("14 across");
      console.log("14 across is wrong...");
    }

    if (e.target.r17c6.value.toLowerCase() === 'p'
      && e.target.r17c7.value.toLowerCase() === 'u'
      && e.target.r17c8.value.toLowerCase() === 'n')
        console.log("PUN is correct!");
    else {
      errors.push("17 across");
      console.log("17 across is wrong...");
    }

    // Send list of wrong answers to popUp function from App.js
    //this.popUp(errors);

    return;
  }



  render() {
    return (
      <form onSubmit={this.submitHandler} autoComplete="off">
        {rowsInBoard}
        <div class="btn-box">
          <button className="btn" type="submit">Submit all</button>
        </div>
      </form>
      );
  }
}

export default Board;