import React from 'react'
import Menuu from './Menuu'

interface Props {
    titols: string[];
    keys: string[];
}

function Casa({titols, keys}: Props) {
    return(
        <div className="">
            <Menuu titols={titols} keys={keys}>
            <h2>La Casa</h2>
            <h3>Història</h3>
            <p>
                La masia de Can Sici és de l’any 1759, tal com està gravat a la pedra del llindar de la porta d’una de les habitacions. Quan la família la va comprar l’any 1972, la masia, en estat semi-ruïnós, estava formada per l’habitatge, l’estable de les vaques, i l’edifici annex que contenia la pallissa, l’estable del cavall, el carro i les eines. <br />
                Es va fer la reforma de la casa conservant la forma i el caràcter original però adaptant-la al nou ús. És per això que encara avui s’hi poden entreveure els usos originals dels diferents espais.  Així, a la planta baixa, al fons de a l’entrada i a la part lateral del menjador, hi havia els estables de vaques i vedells, i s’hi poden veure les lleixes de pedra de les antigues menjadores. A la cuina s’hi pot veure el forn de llenya, i utilitzar la llar de foc a terra original. A la primera planta hi havia els quatre dormitoris i la Sala central que actuava també de repartidor. Al costat hi havia l’edifici annex, de dues plantes. <br />
                A fora de la casa es conserven les dues eres on es triava el gra de la palla: l’era gran,  davant la porta d’entrada de la casa i l’era petita, davant l’edifici annex. <br />
                El mobiliari de la casa ha estat comprat en antiquaris i és del segle XIX i principis del XX. <br />
            </p>
            <h3>Distribució</h3>
            <p>
                La casa consta de dos pisos. <br />
                A la planta baixa hi ha la sala de l’entrada, la cuina i el menjador-sala d’estar. Ademés hi ha tres habitacions dobles i un lavabo complert. Des de la cuina s’accedeix al porxo, on hi ha gran taula per menjar, i al jardí. <br />
                Al pis superior hi ha la sala central, quatre habitacions i dos lavabos complerts, i l’antiga pallissa convertida en una gran sala d’estar.
            </p>
            <h3>Habitacions</h3>
            <p>La casa permet allotjar <b>18 persones,</b> distribuïdes de la següent manera:</p>
            <ul>
                <li>5 habitacions dobles amb llit de matrimoni.</li>
                <li>1 habitació doble amb dos llits individuals.</li>
                <li>1 habitació amb 3 lliteres (6 llits).</li>
                <li>3 banys complets.</li>
                <li>Si hi ha nens petits es poden afegir fins a 4 llits plegables (20€ per llit i estada) o bressols (sense cost addicional) a les habitacions.</li>
            </ul>
            <p>A partir del 2025 la distribucio quedara de la seguent manera:</p>
            <ul>
                <li>3 habitacions dobles amb llit de matrimoni.</li>
                <li>1 habitació doble amb dos llits individuals.</li>
                <li>1 habitació amb 3 lliteres (6 llits).</li>
                <li>3 banys complets.</li>
                <li>Si hi ha nens petits es poden afegir fins a 4 llits plegables (20€ per llit i estada) o bressols (sense cost addicional) a les habitacions.</li>
            </ul>
            <h3>Serveis de la casa</h3>
            <h4>Part interior:</h4>
            <ul>
                <li>Electrodomèstics: 2 neveres, rentaplats, microones, torradora, batedora, etc.</li>
                <li>Estris de cuina: olles i paelles de grans dimensions, plats, gots, coberts, etc.</li>
                <li>Parament de la llar: llençols i tovalloles de dutxa, paper de WC, draps de cuina.</li>
                <li>Rentat de roba (només en cas d’estar una setmana): rentadora, planxa i taula de planxar.</li>
                <li>Calefacció central per radiadors i 3 llars de foc.</li>
                <li>Wifi.</li>
                <li>2 televisors.</li>
                <li>Jocs de taula.</li>
            </ul>
            <h4>Per a l’exterior:</h4>
            <ul>
                <li>Piscina privada, cadires i gandules.</li>
                <li>Porxo (amb taula i cadires per a 22 persones).</li>
                <li>Barbacoa.</li>
                <li>Taula de ping-pong.</li>
                <li>WC.</li>
            </ul>
            <h4>Serveis per a nens:</h4>
            <ul>
                <li>Banyera de plàstic petita.</li>
                <li>3 trones.</li>
                <li>2 bressols plegables.</li>
                <li>5 llits plegables (plegatins) a les habitacions.</li>
                <li>Jocs per a nens.</li>
                <li>Parc infantil.</li>
            </ul>
        </Menuu>
        </div>
    );
};

export default Casa;