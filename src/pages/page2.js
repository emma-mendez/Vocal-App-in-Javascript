import React from 'react';
import '../App.css';
import {Button} from "react-bootstrap";

const Page2 = () =>{

    return (
        <div>
            <header className="App-header">
            <img src='acslogo.png' className="logo" alt="logo" />
            </header>
            <button class="buttonPages"> CON4DZ</button>
            <button class="buttonPages">
            <Button href="/studio">JOURNAL</Button>
            </button>
        </div>
    )
}

export default Page2


