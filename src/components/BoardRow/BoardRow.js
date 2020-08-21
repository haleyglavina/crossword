import React from 'react';
import './BoardRow.scss';


const cornerNumbers = (cell) => {
  if (cell === 'r0c4')
    return 1;
  if (cell === 'r2c3')
    return 2; 
  if (cell === 'r4c2')
    return 3; 
  if (cell === 'r5c6')
    return 4;
  if (cell === 'r5c16')
    return 5;
  if (cell === 'r6c14')
    return 6;
  if (cell === 'r7c2')
    return 7;
  if (cell === 'r7c10')
    return 8;
  if (cell === 'r7c12')
    return 9;
  if (cell === 'r8c8')
    return 10;
  if (cell === 'r9c3')
    return 11;
  if (cell === 'r10c1')
    return 12;
  if (cell === 'r11c0')
    return 13;
  if (cell === 'r12c12')
    return 14;
  if (cell === 'r13c4')
    return 15;
  if (cell === 'r14c0')
    return 16;
  if (cell === 'r17c6')
    return 17;

  return false;
}


function BoardRow({row, col, inputCells}) {

  // Create an input form for each cell of the crossword row that's part of a word
  // and a non-input square for each cell that is empty space
  let cellsInRow = [];
  for (let i=0; i<col; i++) {
    //cellsInRow.push(<input className={cellClasses()} name={`r${row}c${i}`} type="text"></input>)
    if (inputCells[`r${row}c${i}`]) {
      cellsInRow.push(
        <div className="input-cell__wrapper">
          <span className="input-cell__number">{cornerNumbers(`r${row}c${i}`) || "" }</span>
          <input className="cell cell--input" name={`r${row}c${i}`} type="text"></input>
        </div>
      );
    }
    else 
      cellsInRow.push(<span className="cell cell--plain"></span>);

  }

  return (
    <div className="board__row">
      {cellsInRow}
    </div>
  );
}

export default BoardRow;