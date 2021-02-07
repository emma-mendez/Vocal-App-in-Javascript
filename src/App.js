import React, { Component }from 'react';
import './App.css';
import Dashboard from './components/dashboard/dashboard.js';
import Header from './components/header.js';
import CassetteTape from "./components/CassetteTape";
import { createGlobalStyle } from "styled-components";
import styledNormalize from "styled-normalize";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './pages/Home.js'
import Page2 from './pages/page2';
import Page3 from './pages/page3';
import Journal from './pages/journal';
import FaceRecognition from './components/FaceRecognition';
import { UserForm } from './components/course/UserForm'
import StudioMenu from './pages/studio-menu';
import SquishyButton from './components/con4dnz/Con4dnz';
import "bootstrap/dist/css/bootstrap.min.css";
// import FourTrack from './components/FourTrackStudio/fourTrack'
import Tanya from './components/upload-files.component'
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
  background: white;
}
`;

class App extends Component {
  state = {
    isLog: false
  };
  
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
            <Route exact path="/Home" render={() => (
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
        <CassetteTape vizColor="#0247FE" />
            </>
             )} />
             <Route exact path="/game" render={() => (
              <>
         <FaceRecognition/>
          </>
           )} />
           <Route exact path="/course" render={() => (
            <>
        <UserForm />
        </>
         )} />
         <Route exact path="/studio-menu" render={() => (
          <>
      <StudioMenu />
      </>
       )} />
       <Route exact path="/con4dnz" render={() => (
          <>
      <SquishyButton />
      </>
       )} />
        <Route exact path="/studio-four" render={() => (
          <>
      <Tanya />
      </>
       )} />
            </Router>
          </div>
      </>
    );
  }
}

export default App;