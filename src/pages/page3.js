import React from 'react';
import '../App.css';
import {Button} from "react-bootstrap";
import { useHistory } from 'react-router-dom';

const Page3 = () =>{
    let history = useHistory();

    const redirect = () => {
        history.push('/game');
}

    const redirectStats = () => {
    history.push('/stats')
    
}
        const previous = () => {
        history.push('/page2')}
    
        const next = () => {
        history.push('/Home')};
    
        

    return (
        <div>
            <header className="App-header">
            <img src='acslogo.png' className="logo" alt="logo" />
            </header>
            <button class="buttonPages" 
            onClick={redirectStats}> 
            <p class="button-inside">STATS</p>
            </button>
            <br></br>
            <button class="button-nav" onClick={previous}>BACK</button>
            <button class="button-nav" onClick={next}>NEXT</button>
            <br></br>
            <button class="buttonPages" 
            onClick={redirect}>
            <p class="button-inside">ZING!</p>
            </button>
             <br></br>
            
    
        </div>
    )
}

export default Page3


