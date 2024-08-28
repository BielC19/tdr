//aixo tret de (https://react-bootstrap.netlify.app/docs/components/cards/#navigation)
import './apartats.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '../loops.scss'
import Menu from '../menu'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

interface Props {
    titols: string[];
    paragrafs: string[];
    keys: string[];
    imgs?: string[];
    imgA?: string[];
    imgT?: string[];
};

function Apartats({ titols, paragrafs, keys, imgs = [], imgA = [], imgT = [] }: Props) {
    
    const celsNu = titols.length;
    const nums = Array.from(Array(celsNu).keys());
    var sadra = 0

    useEffect(() => {
        cliquear();

    }, []); // This effect runs only once when the component is mounted


    function cliquear() {
        const element = document.getElementById('uncontrolled-tab-example-tab-casa');
        element?.click();
    }

//tambe puc posar q convii de color el fons del h3 i el p i ferlo mes gran pq ocupi tot el que pugui
    function text0(num: number) {
        var numApartat = 0
        const apartat = document.getElementsByClassName('apartatss')[0]
        const elemnt = document.getElementById('uncontrolled-tab-example-tab-' + keys[num])
        if (apartat && elemnt && num === 0) {
            elemnt.classList.remove('text'+numApartat)
            apartat.classList.remove('text'+numApartat)
            elemnt.classList.add('text'+num);
            apartat.classList.add('text'+num);
        }
    };

    return (
        <div className='apartatss part'>
            <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" className="mb-3 apartats">
                {nums.map((i) =>
                    <Tab className={"apartat " + "ap" + i} eventKey={keys[i]} title={titols[i]} key={i}>
                        <div className="textApartats" id={'text' + (i+1)}>
                            <h3>{titols[i]}</h3>
                            <p>{paragrafs[i]}</p>
                            {imgs[i] ? <img src={require(imgs[i])} alt={imgA[i]} title={imgT[i]} /> : ""}
                            <button className='butoinfo' id={'butoinfo' + i}><Link to={`/${keys[i]}`}>Més informació sobre {titols[i]}</Link></button>
                        </div>
                    </Tab>
                )}
            </Tabs>
                <Menu />
        </div>
    );
}

export default Apartats;
