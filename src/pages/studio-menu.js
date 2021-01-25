import React from 'react';
import '../App.css';
import {Button} from "react-bootstrap";
import { useHistory } from 'react-router-dom';

const StudioMenu = () =>{
    let history = useHistory();
    const redirect = () => {
    history.push('/studio')};

    const redirectFour = () => {
    history.push('/studio-four')}

    const redirectBack = () => {
        history.push('/page2')}

    return (
        <div>
            <header className="App-header">
            <img src='acslogo.png' className="logo" alt="logo" />
            </header>
            <button class="buttonPages" onClick={redirect}> 
            <p class="button-inside">SINGLE TRACK</p>
            </button>
            <button class="buttonPages" onClick={redirect}>
            <p class="button-inside"> FOUR TRACK </p>
            </button>
            <br></br>
            <button class="button-nav" onClick={redirectBack}> BACK</button>

        </div>
    )
}

export default StudioMenu

