import React from 'react';
import '../App.css';
import {Button} from "react-bootstrap";

const Home = () =>{

    return (
        <div>
            <button class="buttonPages"> SING</button>
            <button class="buttonPages">
            <Button href="/studio">STUDIO</Button>
            </button>
        </div>
    )
}

export default Home


