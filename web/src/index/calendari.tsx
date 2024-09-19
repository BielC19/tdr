import React from 'react'
import Menuu from './Menuu'
import './coses.css'
interface Props {
    titols: string[];
    keys: string[];
}

function Calendari({titols, keys}: Props) {
    return(
        <div className="">
            <Menuu titols={titols} keys={keys}>
            <h2>Calendari</h2>
            <p>L’estança a la masia pot ser d’un cap de setmana (incloses la nit de divendres i dissabte) o de setmana sencera. <br />
            En el següent Calendari podeu veure la disponibilitat de dates en aquest moment.</p>
            <iframe id='clelen' src="https://www.google.com/calendar/embed?showNav=1&amp;showPrint=0&amp;showTabs=0&amp;showCalendars=0&amp;showTz=0&amp;height=300&amp;wkst=2&amp;bgcolor=%23ffffff&amp;src=cansici%40gmail.com&amp;color=%231B887A&amp;ctz=Europe%2FMadrid" ></iframe>
        </Menuu>
        </div>
    );
};

export default Calendari;