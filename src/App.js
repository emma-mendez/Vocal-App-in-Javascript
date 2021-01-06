import React, { useState, Component }from 'react';
// import Swiper JS
import { Swiper, SwiperSlide } from 'swiper/react';
// import Swiper styles
import 'swiper/swiper-bundle.css';
import './App.css';
import Dashboard from './components/dashboard/dashboard.js';
import BootstrapNavbar from "./components/navBar/navBar.js";
import Header from './components/header.js';
import CassetteTape from "./components/CassetteTape";
import { createGlobalStyle } from "styled-components";
import styledNormalize from "styled-normalize";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import {Navbar, Nav, Form, NavDropdown, Button, FormControl} from "react-bootstrap";
import Home from './pages/home.js'
import Page2 from './pages/page2';
import Page3 from './pages/page3';
// import 'bootstrap/dist/css/bootstrap.min.css';
// swiper tutorial - https://www.youtube.com/watch?v=l4kFO6VQPfA
const slides = [];

 for (let i = 0; i < 3; i += 1) {
   slides.push(
    <SwiperSlide key={ 'slide-${i}'}>
      <img src={'https://picsum.photos/id/${i+1}/500/300'} 
      alt={'Slide ${i}'} />
    </SwiperSlide>
   );
 }


const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400');
${styledNormalize};
html {
  box-sizing: border-box;
}
*, *:before, *:after {
  box-sizing: inherit;
}
body {
  font-family: 'Source Sans Pro', 'sans-serif';
  font-weight: 400;
  background: #19ca90;
}
`;

class App extends Component {
  render() {
    return (
      <>
      <div className="App">
             <Router>
            <Route exact path="/" render={() => (
                <>
           <Header />
        <Dashboard/>
        </>
             )} />
            </Router>
      <br></br>
      </div>
      <React.Fragment>
        <Swiper id='main'>
          {slides}
      <div>
                 <Router>
            <Route exact path="/home" render={() => (
                <>
           <Home/>
            </>
             )} />
            </Router>
          </div>
          </Swiper>
      <div>
                 <Router>
            <Route exact path="/page2" render={() => (
                <>
           <Page2/>
            </>
             )} />
            </Router>
          </div>

      <div>
                 <Router>
            <Route exact path="/page3" render={() => (
                <>
           <Page3/>
            </>
             )} />
            </Router>
          </div>
      <div>
                 <Router>
            <Route exact path="/studio" render={() => (
                <>
           <GlobalStyles />
        <CassetteTape vizColor="blue" />
            </>
             )} />
            </Router>
          </div>
          </React.Fragment>
      </>
    );
  }
}

export default App;