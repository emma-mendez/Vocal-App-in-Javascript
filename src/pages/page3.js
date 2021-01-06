import React from 'react';
import '../App.css';
import {Button} from "react-bootstrap";

const Page3 = () =>{

    return (
        <div>
            <header className="App-header">
            <img src='acslogo.png' className="logo" alt="logo" />
            </header>
            <button class="buttonPages"> STATS</button>
            <button class="buttonPages">
            <Button href="/">ZING!!</Button>
            </button>
        </div>
    )
}

export default Page3


