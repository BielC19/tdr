//aixo tret de (https://react-bootstrap.netlify.app/docs/components/cards/#navigation)
import './apartats.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Logo from '../imatges/Logo.png'
import { Button } from 'react-bootstrap';

interface Props{
    titols: string[];
    paragrafs: string[];
    keys: string[];
    imgs?: string[];
    imgA?: string[];
    imgT?: string[];
};

function Apartats({titols, paragrafs, keys, imgs=[], imgA=[], imgT=[]}: Props) {
    
    const celsNu = titols.length
    var nums = []
    for (let e=0; e<=celsNu; e++) {
        nums.push(e)
    }
    
    function cliquear() {
        document.getElementById('uncontrolled-tab-example-tab-casa')?.click()

        const element = document.getElementById('uncontrolled-tab-example-tab-casa');
        element?.click();
        element?.addEventListener('touchstart', function() {
            element.click();
        });
    }
    function animacioo() {
        document.getElementById('menu')?.setAttribute('class', 'anumacioo')
    }
    function div() {
        var div = document.createElement('li');
        div.innerHTML = '<div id=\'menu\' class=\'menu\'><button onClick=\"this.className+=\' anumacioo\'\"><img src=\'./Logo.png\' alt="Logo" /></button></div>';
        div.setAttribute('class', 'nav-item');
        div.setAttribute('role', 'presentation')
        document.getElementById('uncontrolled-tab-example')?.appendChild(div);
    }
    
    window.onload = (event) => {
        cliquear()
        div()
    };

    return (
        <div className='apartatss part'>
            <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" className="mb-3 apartats">
            {nums.map((i) =>
            <Tab className={"apartat " + "ap" + i} eventKey={keys[i]} title={titols[i]} >
                <div className="textApartats" id={'text' + i}>
                <h3>{titols[i]}</h3>
                <p>{paragrafs[i]}</p>
                {imgs[i]? <img src={require(imgs[i])} alt={imgA[i]} title={imgT[i]} />: ""}
                <button className='butoinfo' id={'butoinfo' + i}><a href={'./' + keys[i]}>Més informació sobre {titols[i]}</a></button>
                </div>
            </Tab>
            )}
            </Tabs>
            
        </div>
    );
}

export default Apartats;
