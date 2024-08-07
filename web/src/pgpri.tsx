import React from 'react';
import './pgpri.css';
import Header from "./index/header";
import Apartats from "./index/apartats";
import Cartes from './index/cartes'

function Pgpri() {

    const paragrafH = 'La millor casa rural'

    const titols = ['titol1', 'titol2']
    const paragrafsts = ['blabla bla 1', 'bla bla bla 2']
    const numApartats = titols.length
    return(
    <>
        <Header paragraf={paragrafH}/>
        <Apartats  />
        <Cartes />
    </>
    );
}

export default Pgpri;
