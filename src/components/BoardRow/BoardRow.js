import React from 'react';
import './BoardRow.scss';

function BoardRow({row, col}) {

  // Create an input form for each cell of the crossword row
  let cellsInRow = [];
  for (let i=0; i<col; i++) {
    cellsInRow.push(<input className="cell" name={`r${row}c${i}`} type="text"></input>)
  }

  return (
    <div className="board__row">
      {cellsInRow}
    </div>
  );
}

export default BoardRow;