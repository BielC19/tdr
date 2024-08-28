import React from "react";
import './Menuu.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Link } from 'react-router-dom';
import Menu from '../menu'

interface Props {
    children: React.ReactNode;
    titols: string[];
    keys: string[];
}

function Menuu({children, titols, keys}: Props) {

    const tuleta = [children, '']
    const celsNu = titols.length;
    const nums = Array.from(Array(celsNu).keys());
    const url = window.location.pathname.split('/');
    var rr = 0;
    for (let i = 0; i < celsNu; i++) {
        if (url[-1] == keys[i]) {
            rr = i
        }
    }
    return(
        <div className="apartatssM part">
            <>
            <ul className="mb-3 apartats nav nav-tabs" id="MenuuM uncontrolled-tab-example" key={'nav'} role="tablist"><div>
            {nums.map((i) =>
                <li className="nav-item" key={'nav'} role="presentation">
                <button type="button" id={"uncontrolled-tab-example-tab-" + keys[i]} className="nav-link active">
                {titols[i]}</button></li>
            )}</div>
            <Menu />
            </ul>
            </>
            
            <div className="tab-content">
                <div role="tabpanel" id={"MeMenu uncontrolled-tab-example-tab-" + keys[rr]}  className={"fade apartat ap" + rr + " tab-pane active show"}>
                    <div className="textApartats" id={"text" + (rr + 1)}>
                        {tuleta[rr]}
                    </div>
                </div>
            </div>
            
        </div>

    )
}

export default Menuu;