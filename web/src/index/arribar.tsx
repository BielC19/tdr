import React from 'react'
import Menuu from './Menuu'
import './coses.css'

interface Props {
    titols: string[];
    keys: string[];
}

function Arribar({titols, keys}: Props) {
    return(
        <div className="">
        <Menuu titols={titols} keys={keys}>
                <h2>Com arribar-hi</h2>
                <div className="entry-content">
		<p>Coordenades de la porta del camí d’entrada:
            <br /> N 42º 1′ 33”
            <br /> E&nbsp; 2º 46′ 30”
            <br /> Coordenades de la casa:
            <br /> N 42º 1′ 32”
            <br /> E&nbsp; 2º 46′ 37”
            <br /> &nbsp;
            <br /> Si es ve per l’autopista AP-7 cal sortir a <strong>Girona Oest</strong>.
            <br /> Després del peatge&nbsp;hem d’agafar la primera sortida de la rotonda, <strong>direcció Sant Gregori</strong>.
            <br /> Continuem per aquesta carretera, passarem per un pont sobre l’autopista. A la següent rotonda hem d’agafar la primera sortida, <strong>direcció Cartellà</strong>.
            <br /> Continuem la carretera durant uns quilòmetres, fins que arribem a Cartellà, allà girem a la dreta.
            <br /> Seguim recta per la carretera fins que trobem el cartell de <strong>Sant Medir, </strong>dalt del turó, i agafem el desviament.
            <br /> Un cop l’hem agafat seguim la carretera, que fa baixada, i a uns 100 m hi ha una porta de ferro oberta a ma dreta, dins del bosc. Girem per allà.
            <br /> Fem la baixada i després girem a l’esquerra. Al cap de pocs metres trobarem <strong>Can Sici</strong>.
            <br /> &nbsp;</p>
            <div className="googlemaps">
				<iframe id='mapsses' src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d2963.7725928076206!2d2.775598!3d42.0266106!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sca!2ses!4v1418637300791"></iframe>
			</div>
            </div>
            </Menuu>
        </div>
    );
};
export default Arribar;