import React from 'react';
import '../App.css';
import {Button} from "react-bootstrap";
import 'swiper/swiper-bundle.css';

const Home = () =>{
    
    return (
    <>
        <div>
            <header>
            <img src='acslogo.png' className="logo" alt="logo" />
            </header>
            {/* <React.Fragment>
                <Swiper id="main"> */}
                    <button class="buttonPages"> SING</button>
                    <button class="buttonPages">
                    <Button ref="/studio">STUDIO</Button>
                    </button>
                {/* </Swiper>
            </React.Fragment> */}
        </div>
        </>
    );
}


export default Home