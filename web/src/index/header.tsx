import React from 'react';
import './header.css';

const SubTiotol = ''

function Header() {
    return (
    <header>
        <h1><img src={require('../imatges/Titol.png')} alt="Can Sici" title='Can Sici' /></h1>
        <p>{SubTiotol}</p>
    </header>
    );
}

export default Header;