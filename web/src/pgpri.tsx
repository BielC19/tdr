import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './pgpri.css';
import Header from "./index/header";
import Apartats from "./index/apartats";
import Footer from "./footer";
import Casa from './index/casa';
import Aprop from './index/aprop'

function Pgpri() {

    const paragrafH = 'Can Sici. Sant Medir, Girona'

    const keys = ['casa', 'entron', 'fotos', 'ubicacio', 'calendari', 'preus', 'reserves', 'normes']
    const titols = ['La casa', 'L’entorn', 'Fotos', 'Com arribar-hi', 'Calendari', 'Preus', 'Reserves', 'Normes de la casa']
    const paragrafsts = ['hola que tal', 'bla bla bla 2', 'asfa', 'gsdg', '32453245']



    return (
        <>
            
            <Routes>
                <Route  path="/" element={<div id='index1a'><Header paragraf={paragrafH} /><Apartats titols={titols} paragrafs={paragrafsts} keys={keys} /></div>} />
                <Route  path="/undefined" element={<div id='index1a'><Header paragraf={paragrafH} /><Apartats titols={titols} paragrafs={paragrafsts} keys={keys} /></div>} />
                <Route  path="" element={<div id='index1a'><Header paragraf={paragrafH} /><Apartats titols={titols} paragrafs={paragrafsts} keys={keys} /></div>} />
                <Route path="/casa" element={<Casa titols={titols} keys={keys}  />} />
                <Route path="/entron" element={<Aprop titols={titols} keys={keys}  />} />
            </Routes>
            <Footer titols={titols} keys={keys} />
        </>
    );
}

export default Pgpri;
