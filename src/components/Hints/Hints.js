import React from 'react';
import './Hints.scss';
import logo from '../../assets/brain-cross-white-tr.png';
import allData from '../../data';

const acrossHints = allData.acrossHints;
const downHints = allData.downHints;
console.log(acrossHints);
console.log(downHints);



function Hints() {
  return (
    <div>
      <div class="logo-box">
        <img className="logo" src={logo}></img>
      </div>
      <div className="hints__box">
        <div className="hints__direction">
          <h2 className="hints__subtitle">Across</h2>
          <ul className="hints__ul">
            {acrossHints.map( hint => {
              return <li className="hints__li"><span className="hints__number">{hint.num}</span>{` ${hint.hint}`}</li>
            })}
          </ul>
        </div>
        <div className="hints__direction">
          <h2 className="hints__subtitle">Down</h2>
          <ul className="hints__ul">
          {downHints.map( hint => {
              return <li className="hints__li"><span className="hints__number">{hint.num}</span>{` ${hint.hint}`}</li>
            })}
          </ul>
        </div>
      </div>
      <div class="foot">
        <p class="foot__info">{'Haley Glavina & Lumi Ciobanu'}</p>
        <p class="foot__info">2020</p>
      </div>
    </div>
  );
}

export default Hints;