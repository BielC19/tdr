import React from 'react'
import Menuu from './Menuu'
import './coses.css'

interface Props {
    titols: string[];
    keys: string[];
}

function Normes({titols, keys}: Props) {
    return(
        <div className="">
            <Menuu titols={titols} keys={keys}>
            <h2>Normes:</h2>
            <ul>
            <li>El respecte al veïnat i a l’entorn natural és primordial.</li>
            <li>No es poden endollar amplificadors de música a l’exterior de la casa.</li>
            <li>La casa ha de quedar ordenada al marxar.</li>
            <li>L’espai exterior ha de quedar ordenat: joguines, taula de ping-pong, xarxa de bàdminton, mobiliari exterior, &nbsp;s’han de deixar al mateix lloc on s’han trobat.</li>
            <li>Cal netejar la barbacoa després del seu ús.</li>
            <li>Cal emportar-se les escombraries al marxar.</li>
            <li>Està prohibit fer foc a l’exterior, excepte a la barbacoa.</li>
            </ul>
            <p><span className='unli'>La fiança de 500 euros</span>, es tornarà via transferència bancària al cap d’una setmana després de fer la neteja i verificació de la casa. Es deduiran de la mateixa els desperfectes i les feines no previstes. <br />
            <span className='unli'>Política de cancelació</span>: es retornarà l’import de la reserva per les cancelacions anteriors a 1 mes de l’entrada a la casa, excepte els mesos de juliol i agost que només es retornarà l’import si la cancelació és anterior a 3 mesos de la data d’entrada a la casa.</p>
            </Menuu>
        </div>
    );
};
export default Normes;
