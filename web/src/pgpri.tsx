import React from 'react';
import './pgpri.css';
import Header from "./index/header";
import Apartats from "./index/apartats";

function Pgpri() {
    const numApartats = 2
    const titols = ['titol1', 'titol2']
    const paragrafsts = ['blabla bla 1', 'bla bla bla 2']
    return(
    <>
        <Header />
        <Apartats celsNum={numApartats} titols={titols} paragrafs={paragrafsts} />
    </>
    );
}

export default Pgpri;
