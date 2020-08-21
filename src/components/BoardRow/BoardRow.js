import React from 'react';
import './BoardRow.scss';

function BoardRow({row, col, inputCells}) {

  // Create an input form for each cell of the crossword row that's part of a word
  // and a non-input square for each cell that is empty space
  let cellsInRow = [];
  for (let i=0; i<col; i++) {
    //cellsInRow.push(<input className={cellClasses()} name={`r${row}c${i}`} type="text"></input>)
    if (inputCells[`r${row}c${i}`])
      cellsInRow.push(<input className="cell cell--input" name={`r${row}c${i}`} type="text"></input>);
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