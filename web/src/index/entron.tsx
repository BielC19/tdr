import React from 'react'
import Menuu from './Menuu'

interface Props {
    titols: string[];
    keys: string[];
}

function Entorn({titols, keys}: Props) {
    return(
        <div className="">
            <Menuu titols={titols} keys={keys}>
            <h2>L'entorn</h2>
            <h3>Descripció</h3>
            <p>
            Can Sici és una finca familiar amb 13 hectàrees de bosc mediterrani, rodejada de camins i paratges. La tranquil·litat, la sensació de calma i la bellesa del paisatge on es troba, ens permet endinsar-nos en la naturalesa i lluny del soroll i el ritme de la ciutat. <br />

            La masia se situa una mica elevada en un turó, amb vista als camps llaurats i als boscos. Rodejant la casa per la part de darrera hi trobem un bosc d’alzines amb grans pedres d’origen volcànic. <br />

            La casa té una segona sortida a l’exterior per la cuina, on compta amb un gran porxo que permet menjar a fora o seure a gaudir de la fresca i de les vistes de la piscina i del jardí. <br />

            A pocs metres de la façana principal de la casa, hi ha una pèrgola amb taules per menjar-hi, sobre una bassa enjardinada que proveïa la casa d’aigua de la pluja. <br />

            Tant la bassa com la piscina estan tancades per a major seguretat dels nens. <br />

            En aquest enllaç podeu veure un <a href="">Plànol de la vista general</a>. 
            {//falta enllaç
            }
            </p>
            <h3>Situació</h3>
            <p>
            Can Sici està a menys de 10 km de Girona. Pertany a la barriada de Sant Medir, terme municipal de Sant Gregori. <br />

            Se situa dins el territori de la Vall de Llèmena, un dels indrets naturals més ben conservats de les comarques gironines, per on s’estenen petits pobles, antics veïnats i singulars masies en un marc de gran valor paisatgístic. La combinació entre els camps de conreu, els diferents tipus de bosc, els cingles i la presència de l’aigua, conformen un paisatge harmònic modelat per la natura i els usos tradicionals dels seus recursos. <br />
            </p>
            <h3>Activitats</h3>
            <ul>
                <li>Gaudir del paisatge i de la tranquil·litat de la zona, fent caminades a peu pels voltants. <a href="http://www.valldellemena.cat/" target="_blank">+info</a></li>
                <li>Refrescar-se a la piscina. Jugar a ping-pong. Descobrir el bosc.</li>
                <li>Pujar a Rocacorba, muntanya des d’on gaudireu de vistes fins al mar. És una excursió que es pot fer amb nens. <a title="Excursió a Rocacorba" href="http://www.dexcursio.net/rocacorba/fitxa.html" target="_blank">+info</a></li>
                <li>Visitar el Parc de la Font de la Torre, a Canet d’Adri. <a title="La Font de la Torre" href="http://www.valldellemena.cat/?tool=llemena&amp;tool_section=pagina&amp;action=show_record&amp;pagina_id=94&amp;language=cat" target="_blank">+info</a></li>
                <li>Passejar per la ciutat de Girona: catedral, barri jueu, el riu. <a href="http://www.girona.cat/turisme/esp/activitats.php" target="_blank">+info</a></li>
                <li>Anar a la Costa Brava, a una distància de 35 km. <a href="http://es.costabrava.org/" target="_blank">+info</a></li>
                <li>Visitar Figueres i el museu Dalí, a menys de 30 minuts de distància. <a href="http://www.salvador-dali.org/museus/teatre-museu-dali/es_index/" target="_blank">+info</a></li>
                <li>Descobrir el llac de Banyoles. <a href="http://martis.banyoles.cat/controller.php?p_action=show_page&amp;pagina_id=4&amp;inst_id=10" target="_blank">+info</a></li>
                <li>Acostar-se els volcans de la Garrotxa. <a href="http://es.turismegarrotxa.com/" target="_blank">+info</a></li>
            </ul>
            </Menuu>
        </div>
    );
};
export default Entorn;