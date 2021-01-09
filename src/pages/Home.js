import React from 'react';
import '../App.css';
import {Button} from "react-bootstrap";
// import Swiper JS
import { Swiper, SwiperSlide } from 'swiper/react';
// import Swiper styles
import 'swiper/swiper-bundle.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// import 'bootstrap/dist/css/bootstrap.min.css';
// swiper tutorial - https://www.youtube.com/watch?v=l4kFO6VQPfA

const slides = [];



const Home = () =>{
    
//  for (let i = 0; i < 3; i += 1) {
//    slides.push(
//     <SwiperSlide key={ 'slide-${i}'}>
//       alt={'Slide ${i}'}
//     </SwiperSlide>
//    );


    return (
    <>
        <div>
            <header className="App-header">
            <img src='acslogo.png' className="logo" alt="logo" />
            </header>
            {/* <React.Fragment>
                <Swiper id="main"> */}
                    <button class="buttonPages"> SING</button>
                    <button class="buttonPages">
                    <Button href="/studio">STUDIO</Button>
                    </button>
                {/* </Swiper>
            </React.Fragment> */}
        </div>
        </>
    );
}


export default Home