import React from 'react'
import Menuu from './Menuu'
import './coses.css'

interface Props {
    titols: string[];
    keys: string[];
}

function Preus({titols, keys}: Props) {
    return(
        <div className="">
            <Menuu titols={titols} keys={keys}>
            <h2>Preus:</h2>
            <ul>
            <li>Cap de setmana (2 nits): 1.100 €</li>
            <li>Juliol i Agost- Setmana sencera: 2.600 €</li>
            </ul>
            <p><strong>* A tenir en compte:</strong>
                – Els caps de setmana són des de divendres tarda a partir de les 17h, fins a diumenge tarda a les 19h (2 nits).
                <br /> – Quan hi hagi pont o cap de setmana llarg caldrà reservar el pont sencer.
                <br /> – La setmana sencera serà des de dissabte tarda a les 17h fins al següent dissabte al matí a les 12h (7 nits).
                <br /> – Caldrà dipositar una fiança de 500 € a retornar al cap d’una setmana quan s’hagi fet la neteja i revisió corresponent. La casa s’ha de deixar ordenada i en les mateixes condicions que l’heu trobat.
            </p>
            
            </Menuu>
        </div>
    );
};
export default Preus;
