import React from 'react';
import './Main.scss';
import Board from '../Board/Board';
import Hints from '../Hints/Hints';

function Main(props) {
    return (
        <div className="main">
            
            <Board />
            <Hints />
        </div>

    );
}

export default Main;