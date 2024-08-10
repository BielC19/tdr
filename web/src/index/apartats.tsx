//aixo tret de (https://react-bootstrap.netlify.app/docs/components/cards/#navigation)
import './apartats.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

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
    }
    window.onload = (event) => {
        cliquear()
    };

    return (
        <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" className="mb-3 apartats">
            {nums.map((i) =>
            <Tab className={"apartat " + "ap" + i} eventKey={keys[i]} title={titols[i]} >
                <h3>{titols[i]}</h3>
                <p>{paragrafs[i]}</p>
                {imgs[i]? <img src={require(imgs[i])} alt={imgA[i]} title={imgT[i]} />: ""}
                <button><a href={keys[i]}>Més informació sobre {titols[i]}</a></button>
            </Tab>
            )}
        </Tabs>
    );
}

export default Apartats;
