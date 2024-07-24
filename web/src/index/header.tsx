import React from 'react';
import './header.css';
import './../imatges/Titol.png';

const TitolImg = "./../imatges/Titol.png"

function Header() {
    return (
    <header>
        <h1><img src={TitolImg} alt="Can Sici" title='Can Sici' /></h1>
    </header>
    );
}

export default Header;