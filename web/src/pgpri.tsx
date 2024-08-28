import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './pgpri.css';
import Header from "./index/header";
import Apartats from "./index/apartats";
import Footer from "./footer";
import Casa from './index/casa'

function Pgpri() {

    const paragrafH = 'Can Sici. Sant Medir, Girona'

    const keys = ['casa', 'aprop', 'asfa', 'gsdg', '32453245']
    const titols = ['La casa', 'Els voltants', 'asfa', 'gsdg', '32453245']
    const paragrafsts = ['blabla bla 1', 'bla bla bla 2', 'asfa', 'gsdg', '32453245']



    return (
        <>
            
            <Routes>
                <Route  path="/" element={<div id='index1a'><Header paragraf={paragrafH} /><Apartats titols={titols} paragrafs={paragrafsts} keys={keys} /></div>} />
                <Route path="/casa" element={<Casa titols={titols} keys={keys}  />} />
            </Routes>
            <Footer titols={titols} keys={keys} />
        </>
    );
}

export default Pgpri;
