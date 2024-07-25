import React from 'react';
import { Interface } from 'readline';

interface Props{
    celsNum: number;
    titols: string[];
    paragrafs: string[];
    imgs?: string[];
    imgA?: string[];
    imgT?: string[];
};

function Apartats({celsNum, titols, paragrafs, imgs = [], imgA = [], imgT = []}: Props) {

    var numms = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
    var nums = []
    for (let i=1; i<=celsNum; i++) {
        nums.push(i)
        console.log(i)
    }

    return(
        <>
            <div className="apartats">
                {nums.map((i) =>
                    <div className={"apartat " + "ap" + i}>
                        <h3>{titols}</h3>
                        <p>{paragrafs}</p>
                        {imgs[i]? <img src={imgs[i]} alt={imgA[i]} title={imgT[i]} />: ""}
                    </div>
                )}
            </div>
        </>
    )
};

export default Apartats;