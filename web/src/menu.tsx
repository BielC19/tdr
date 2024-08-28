//aixo tret de (https://react-bootstrap.netlify.app/docs/components/cards/#navigation)
import './menu.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


import Logo from './imatges/Logo.png';
import BanseraCA from './imatges/banderacat.png';
import BanseraES from './imatges/banderaes.svg';
import BanseraFR from './imatges/banderafr.svg';
import BanseraEN from './imatges/banderaeng.svg';

interface Props {

};

function Menu({  }: Props) {
    const [color, setColor] = useState<string>('#8fbc8f'); // Valor inicial
    const root = document.documentElement;;

    const url = window.location.pathname.split('/');
    console.log(url);
    const es = url[1] == 'es';
    const fr = url[1] == 'fr';
    const en = url[1] == 'en';
    const ca = (!es || !fr || !en) && !(url[1] == 'undefined');

    var conttat = 0

    useEffect(() => {
        const buttto = document.getElementById('bttto');
        if (buttto) {
            buttto.addEventListener('mousedown', animacioo);
        }
        return () => {
            if (buttto) {
                buttto.removeEventListener('mousedown', animacioo);
            }
        };

    }, []);


    const handleColorChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        // Funció que s'executa quan es canvia el color
        const newColor = event.target.value;
        setColor(newColor);
        console.log('Color seleccionat:', newColor);
        root.style.setProperty('--interior-scroll', newColor);
    };

    function animacioo() {
        const element = document.getElementById('bttto');
        if (element) {
            element.onmousedown = function() {
                element.classList.add('actiu');
            };
            
            element.onmouseup = function() {
                setTimeout(() => {
                    element.classList.remove('actiu');
                    // Altres accions que vols executar després de 3 segons
                }, 1000); // 1 segons de retard després del mouseup
            };
            conttat ++;
        };
        if (conttat%2 > 0) {
            animacioo2()
        }
    };

    function animacioo2() {
        const element = document.getElementById('bttto');
        const menuS = document.getElementById('mmenu')
        const hasShowClass = menuS?.classList.contains('show');
        setTimeout(() => {
            element?.classList.add('actiu');
            setTimeout(() => {
                element?.classList.remove('actiu');
            }, 1000); 
            conttat ++;
        }, 5000);
    };
    return(
        <div id="menu" className="menu">
            <button className="bttto" id="bttto" type="button" data-bs-toggle="dropdown" aria-expanded="false" >
                <img src={Logo} alt="Logo" />
            </button>
            <ul id="mmenu" className="dropdown-menu">
                {ca ? <li><Link className="dropdown-item" to={'/' + url[-2]}><img src={BanseraCA} alt="Bandera" width={16} height={11} /> Catalá</Link></li> : '' }
                {es ? '' : <li><Link className="dropdown-item" to={'/es/' + url[-2]}><img src={BanseraES} alt="Bandera" width={16} height={11} />Español</Link></li> }
                {fr ? '' : <li><Link className="dropdown-item" to={'/fr/' + url[-2]}><img src={BanseraFR} alt="Bandera" width={16} height={11} />French</Link></li> }
                {en ? '' : <li><Link className="dropdown-item" to={'/en/' + url[-2]}><img src={BanseraEN} alt="Bandera" width={16} height={11} />English</Link></li> }
                <li><hr className="dropdown-divider" /></li>
                <li id='ultimmM'><span>Color:</span><input type="color" className='form-control form-control-color' id="myColor" value="#8fbc8f" title="Tria un color" onChange={handleColorChange} /></li>
            </ul>
        </div>
    );

};

export default Menu;