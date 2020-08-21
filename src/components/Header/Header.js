import React from 'react';
import './Header.scss';
import logo from '../../assets/images/CrossWord-logo.png'

function Header(props) {
    return (
        <header className="header">
            <img className="header__logo" src={logo} alt="CrossWord Logo" />
            <div className="header__menu">
                <ul className="header__list">
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </div>
        </header>

    );
}

export default Header;