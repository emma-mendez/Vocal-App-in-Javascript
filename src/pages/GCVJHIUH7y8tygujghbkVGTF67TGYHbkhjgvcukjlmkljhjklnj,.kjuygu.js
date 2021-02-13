import React from 'react';
import '../App.css';
import { useHistory } from 'react-router-dom';

const StudioMenu = () =>{
    let history = useHistory();
    const redirect = () => {
    history.push('/ruigdfhjdsfbkjhIYUFYRDTXcyuyg78t67tugvhcfyt6t875dtuygjvghuyg')};

    const redirectFour = () => {
    history.push('/HVSYTG87yhuijbhGBHSVFT*76ftyuygiuhILJKM.L,;OKIHUGYUT6756E4ryftgvhb')}

    const redirectBack = () => {
        history.push('/JVjhdbkjDVGfda8e7dwy9845y2h3iwhjvGHCHVSCKBJNZBFAIUFYA9')}

    return (
        <div class="content">
        <div>
            <header className="App-header">
            <img src='acslogo.png' className='App-logo2' alt="logo" />
            </header>
            <button class="buttonPages" onClick={redirect}> 
            <p class="button-inside2"><h1 class='h2'>SINGLE TRACK</h1></p>
            </button>
            <button class="buttonPages" onClick={redirectFour}>
            <p class="button-inside2"><h1 class='h2'>FOUR TRACK </h1></p>
            </button>
            <br></br>
            <button class="button-nav" onClick={redirectBack}> BACK</button>
            </div>
        </div>
    )
}

export default StudioMenu

