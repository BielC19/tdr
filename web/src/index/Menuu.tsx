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

    const celsNu = titols.length;
    const nums = Array.from(Array(celsNu).keys());
    const url = window.location.pathname.split('/');

    var rr = 0;
    for (let i = 0; i < celsNu; i++) {
        if (url[1] === keys[i]) {
            rr = i
        }
    }
    return(
        <div className="apartatssM part">
            <>
            <ul className="apartats nav nanana nav-tabs" id="MenuuM uncontrolled-tab-example" key={'nav'} role="tablist">
                <li className="lidivv">
                    <li className="nav-item" key={'nav'} role="presentation"><button type="button" id={"uncontrolled-tab-example-tab-inici"} className="nav-link active"><Link to={'/'}>Inici</Link></button></li>
                    {nums.map((i) =>
                        <li className="nav-item" key={'nav'} role="presentation">
                            <button type="button" id={"uncontrolled-tab-example-tab-" + keys[i]} className="nav-link active"><Link to={`/${keys[i]}`}>{titols[i]}</Link></button>
                        </li>
                    )}
                </li>
                <li id="menuurubto"><Menu /></li>
            </ul>
            </>
            
            <div className="tab-content">
                <div role="tabpanel" id={"MeMenu uncontrolled-tab-example-tab-" + keys[rr]}  className={"fade apartat ap" + rr + " tab-pane active show"}>
                    <div className="textApartats" id={"text" + (rr + 1)}>
                        {children}
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Menuu;