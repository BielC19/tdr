import React from 'react';
import './pgpri.css';
import Header from "./index/header";
import Apartats from "./index/apartats";
import Cartes from './index/cartes'
import Footer from "./footer";

function Pgpri() {

    const paragrafH = 'Can Sici. Sant Medir, Girona'

    const keys = ['casa', 'aprop']
    const titols = ['La casa', 'Els voltants']
    const paragrafsts = ['blabla bla 1', 'bla bla bla 2']

    return(
    <>
        <Header paragraf={paragrafH}/>
        <Apartats titols={titols} paragrafs={paragrafsts} keys={keys} />
        <Footer titols={titols} keys={keys} />
    </>
    );
}

export default Pgpri;
