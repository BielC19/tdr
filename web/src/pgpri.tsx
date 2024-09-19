import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './pgpri.css';
import Header from "./index/header";
import Apartats from "./index/apartats";
import Footer from "./footer";
import Casa from './index/casa';
import Entorn from './index/entron'
import Arribar from './index/arribar'
import Preus from './index/preus'
import Normes from './index/normes'
import Calendari from './index/calendari'

function Pgpri() {

    const paragrafH = 'Can Sici. Sant Medir, Girona'

    const keys = ['casa', 'entron', 'fotos', 'arribar', 'calendari', 'preus', 'reserves', 'normes']
    const titols = ['La casa', 'L’entorn', 'Fotos', 'Com arribar-hi', 'Calendari', 'Preus', 'Reserves', 'Normes de la casa']
    const paragrafsts = ['hola que tal', 'bla bla bla 2', 'asfa', 'gsdg', '32453245']



    return (
        <>
            
            <Routes>
                <Route  path="/" element={<div id='index1a'><Header paragraf={paragrafH} /><Apartats titols={titols} paragrafs={paragrafsts} keys={keys} /></div>} />
                <Route  path="/undefined" element={<div id='index1a'><Header paragraf={paragrafH} /><Apartats titols={titols} paragrafs={paragrafsts} keys={keys} /></div>} />
                <Route  path="" element={<div id='index1a'><Header paragraf={paragrafH} /><Apartats titols={titols} paragrafs={paragrafsts} keys={keys} /></div>} />
                
                <Route path="/casa" element={<Casa titols={titols} keys={keys}  />} />
                <Route path="/entron" element={<Entorn titols={titols} keys={keys}  />} />
                <Route path="/arribar" element={<Arribar titols={titols} keys={keys} />} />
                <Route path="/fotos" element={<Entorn titols={titols} keys={keys} />} />
                <Route path="/calendari" element={<Calendari titols={titols} keys={keys} />} />
                <Route path="/preus" element={<Preus titols={titols} keys={keys} />} />
                <Route path="/reserves" element={<Entorn titols={titols} keys={keys} />} />
                <Route path="/normes" element={<Normes titols={titols} keys={keys} />} />

                <Route path='/es' element={<></>} />
                <Route path='/fr' element={<></>} />
                <Route path='/en' element={<></>} />
            </Routes>
            <Footer titols={titols} keys={keys} />
        </>
    );
}

export default Pgpri;
