//aixo tret de (https://react-bootstrap.netlify.app/docs/components/cards/#navigation)
import './apartats.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import React, { useEffect } from 'react';
import Logo from '../imatges/Logo.png'

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
        if (sadra==0) {
            crearDiv(); // Create the custom div after the component mounts
        }
    }, []); // This effect runs only once when the component is mounted


    function cliquear() {
        const element = document.getElementById('uncontrolled-tab-example-tab-casa');
        element?.click();
    }

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
        }
    }
    function crearDiv() {
        const ulElement = document.getElementById('uncontrolled-tab-example');
        if (ulElement) {
            const liElement = document.createElement('li');
            liElement.className = 'nav-item';
            liElement.setAttribute('role', 'presentation');

            liElement.innerHTML = `
                <div id="menu" class="menu">
                    <button class="bttto" id="bttto" type="button" data-bs-toggle="dropdown" aria-expanded="false" >
                        <img src="./Logo.png" alt="Logo" />
                    </button>
                    <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="#">Action</a></li>
                        <li><a class="dropdown-item" href="#">Another action</a></li>
                        <li><a class="dropdown-item" href="#">Something else here</a></li>
                        <li><hr class="dropdown-divider" /></li>
                        <li><a class="dropdown-item" href="#">Separated link</a></li>
                    </ul>
                </div>
            `;

            // Add event listener for the button click
            const button = liElement.querySelector('button');
            button?.addEventListener('mousedown', animacioo);

            // Append the new `li` to the `ul`
            ulElement.appendChild(liElement);
            sadra += 1
        }
    }

    return (
        <div className='apartatss part'>
            <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" className="mb-3 apartats">
                {nums.map((i) =>
                    <Tab className={"apartat " + "ap" + i} eventKey={keys[i]} title={titols[i]} key={i}>
                        <div className="textApartats" id={'text' + i}>
                            <h3>{titols[i]}</h3>
                            <p>{paragrafs[i]}</p>
                            {imgs[i] ? <img src={require(imgs[i])} alt={imgA[i]} title={imgT[i]} /> : ""}
                            <button className='butoinfo' id={'butoinfo' + i}><a href={'./' + keys[i]}>Més informació sobre {titols[i]}</a></button>
                        </div>
                    </Tab>
                )}
                
            </Tabs>
        </div>
    );
}

export default Apartats;
