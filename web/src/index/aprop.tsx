import React from 'react'
import Menuu from './Menuu'

interface Props {
    titols: string[];
    keys: string[];
}

function Aprop({titols, keys}: Props) {
    return(
        <div className="">
            <Menuu titols={titols} keys={keys}>
            <h2>Voltans</h2>

        </Menuu>
        </div>
    );
};

export default Aprop;