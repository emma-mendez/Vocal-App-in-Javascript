import React, { useState, Component }from 'react';
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
import Journal from './pages/journal';



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
                 <Router>
            <Route exact path="/home" render={() => (
                <>
           <Home/>
            </>
             )} />
            <Route exact path="/page2" render={() => (
                <>
           <Page2/>
            </>
             )} />
            <Route exact path="/page3" render={() => (
                <>
           <Page3/>
            </>
             )} />
            <Route exact path="/journal" render={() => (
                <>
           <Journal/>
            </>
             )} />
            <Route exact path="/studio" render={() => (
                <>
           <GlobalStyles />
        <CassetteTape vizColor="blue" />
            </>
             )} />
            </Router>
            </div>
      </>
    );
  }
}

export default App;