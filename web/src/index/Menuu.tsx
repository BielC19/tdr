import React from "react"
import './Menuu.css'

interface Props {
    children: React.ReactNode;
    titols: string[];
    keys: string[];
}

function Menuu({children, titols, keys}: Props) {

    const tuleta = [children, '']
    const celsNu = titols.length;
    const nums = Array.from(Array(celsNu).keys());


    return(
        <div className="apartatss part">
            <>
            <ul className="mb-3 apartats nav nav-tabs" id="MenuuM uncontrolled-tab-example" role="tablist">
            {nums.map((i) =>
                <li className="nav-item" role="presentation">
                <button type="button" id={"uncontrolled-tab-example-tab-" + keys[i]} className="nav-link active">
                {titols[i]}</button></li>
            )}
            </ul>
            </>
            {nums.map((i) =>
            <>
            <div className="tab-content">
                <div role="tabpanel" id={"uncontrolled-tab-example-tab-" + keys[i]}  className={"fade apartat ap" + i + " tab-pane active show"}>
                    <div className="textApartats" id={"text" + (i + 1)}>
                        {tuleta[i]}
                    </div>
                </div>
            </div>
            </>
            )}
        </div>

    )
}

export default Menuu;