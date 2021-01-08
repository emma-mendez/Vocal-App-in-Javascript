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




const Home = () =>{

    return (
        <div>
            <header className="App-header">
            <img src='acslogo.png' className="logo" alt="logo" />
            </header>
            <button class="buttonPages"> SING</button>
            <button class="buttonPages">
            <Button href="/studio">STUDIO</Button>
            </button>
        </div>
    )
}





// function Home() {
// <div>
//             <header className="App-header">
//             <img src='acslogo.png' className="logo" alt="logo" />
//             </header>
//             <button class="buttonPages"> SING</button>
//             <button class="buttonPages">
//             <Button href="/studio">STUDIO</Button>
//             </button>
//         </div>
//     const slides = [];

//  for (let i = 0; i < 3; i += 1) {
//    slides.push(
//     <SwiperSlide key={ 'slide-${i}'}>
//       <img src={'https://picsum.photos/id/${i+1}/500/300'} 
//       alt={'Slide ${i}'} />
//     </SwiperSlide>
//    );
//  }
//     return (
//         <>
//         {/* <React.Fragment> */}
        

//         <Swiper id='main'>
//         {slides}
//     <div>
//                <Router>
//           <Route exact path="/home" render={() => (
//               <>
//          <Home/>
//           </>
//            )} />
//           </Router>
//         </div>
//         </Swiper>
        {/* </React.Fragment> */}
//     )
// }

export default Home;


