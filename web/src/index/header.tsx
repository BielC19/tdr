import React from 'react';
import './header.css';

interface Props {
    paragraf: string;
}
function Header({paragraf}: Props) {
    return (
    <header className='' id='HH'>
        <h1><img src={require('../imatges/Titol.png')} alt="Can Sici" title='Can Sici' />Can Sici</h1>
        <p>{paragraf}</p>
    </header>
    );
}

export default Header;