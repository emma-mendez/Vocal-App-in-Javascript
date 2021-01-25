import React from 'react';
import '../App.css';
import {Button} from "react-bootstrap";
import { useHistory } from 'react-router-dom';

const Page2 = () =>{
    let history = useHistory();

    const redirect = () => {
    history.push('/con4dz')};

    const redirectJ = () => {
    history.push('/journal')}

    const previous = () => {
    history.push('/Home')};

    const next = () => {
    history.push('/page3')}

    return (
        <div>
            <header className="App-header">
            <img src='acslogo.png' className="logo" alt="logo" />
            </header>
            <button class="buttonPages" onClick={redirect}> 
            <p class="button-inside">CON4DZ</p>
            </button>
            <br></br>
            <button class="button-nav" onClick={previous}>BACK</button>
            <button class="button-nav" onClick={next}>NEXT</button>
            <button class="buttonPages" onClick={redirectJ}>
            <p class="button-inside">JOURNAL</p>
            </button>
            <br></br>
            

        </div>
    )
}

export default Page2


