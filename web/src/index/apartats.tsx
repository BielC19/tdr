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
    }

    return(
        <>
            <div className="apartats">
                {nums.map((i) =>
                    <div className={"apartat " + "ap" + i}>
                        <h3>{titols}</h3>
                        <p>{paragrafs}</p>
                        {imgs[i]? <img src={require(imgs[i])} alt={imgA[i]} title={imgT[i]} />: ""}
                    </div>
                )}
            </div>
        </>
    )
};

export default Apartats;

/*
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Nav from 'react-bootstrap/Nav';

function NavTabsExample() {
return (
    <Card>
    <Card.Header>
        <Nav variant="tabs" defaultActiveKey="#first">
        <Nav.Item>
            <Nav.Link href="#first">Active</Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link href="#link">Link</Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link href="#disabled" disabled>
            Disabled
            </Nav.Link>
        </Nav.Item>
        </Nav>
    </Card.Header>
    <Card.Body>
        <Card.Title>Special title treatment</Card.Title>
        <Card.Text>
        With supporting text below as a natural lead-in to additional content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
    </Card.Body>
    </Card>
);
}

export default NavTabsExample;
*/