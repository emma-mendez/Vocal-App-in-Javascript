import React, { Component }from 'react';
import './App.css';
import Dashboard from './components/dashboard/dashboard.js';
import Header from './components/header.js';
import CassetteTape from "./components/CassetteTape";
import { createGlobalStyle } from "styled-components";
import styledNormalize from "styled-normalize";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './pages/AKJBDABDKJbjbkjbndbfiuesfy783463945783648234iyurwhffbjdvcaca~DSErq6t87ywiau.js'
import Page2 from './pages/JVjhdbkjDVGfda8e7dwy9845y2h3iwhjvGHCHVSCKBJNZBFAIUFYA9';
import Page3 from './pages/7Ygihbjnkbdafhisyf78re7t94ythiy5eht5io4y875erfygaikhbjadvchbdsvkdflmblgflg;knbjdhfgfiruv';
import Journal from './pages/kjbuy^TTgyugvhcfYTGHJVGHCFTUyiu8978t6tyugvhcfvhgjyuft';
import FaceRecognition from './components/FaceRecognition';
import { UserForm } from './components/course/JVJHBKJHIbvgjbjkugyTYGHV786ftuvgjkui876FTYGHvcfdryTYGHOJPllkjh'
import StudioMenu from './pages/GCVJHIUH7y8tygujghbkVGTF67TGYHbkhjgvcukjlmkljhjklnj,.kjuygu';
import FourTrackStudioRecorder from './components/HVSYTG87yhuijbhGBHSVFT*76ftyuygiuhILJKM.L,;OKIHUGYUT6756E4ryftgvhb'
import Quiz from './components/con4dnz/Quiz';
import Con4dnz from './components/con4dnz/con4dnz'

const GlobalStyles = createGlobalStyle`
// @import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400');
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
             {/* Home */}
            <Route exact path="/AKJBDABDKJbjbkjbndbfiuesfy783463945783648234iyurwhffbjdvcaca~DSErq6t87ywiau" render={() => (
                <>
           <Home/>
            </>
             )} />
             {/* Menu Page 2 */}
            <Route exact path="/JVjhdbkjDVGfda8e7dwy9845y2h3iwhjvGHCHVSCKBJNZBFAIUFYA9" render={() => (
                <>
           <Page2/>
            </>
             )} />
             {/* Menu page 3 */}
            <Route exact path="/7Ygihbjnkbdafhisyf78re7t94ythiy5eht5io4y875erfygaikhbjadvchbdsvkdflmblgflg;knbjdhfgfiruv" render={() => (
                <>
           <Page3/>
            </>
             )} />
             {/* Journal */}
            <Route exact path="/kjbuy^TTgyugvhcfYTGHJVGHCFTUyiu8978t6tyugvhcfvhgjyuft" render={() => (
                <>
           <Journal/>
            </>
             )} />
             {/* Cassette */}
            <Route exact path="/ruigdfhjdsfbkjhIYUFYRDTXcyuyg78t67tugvhcfyt6t875dtuygjvghuyg" render={() => (
                <>
           <GlobalStyles />
        <CassetteTape vizColor="#0247FE" />
            </>
             )} />
             {/* FaceRecognition */}
             <Route exact path="/dsjkfgrsuyfygesuydctdxc67tfyfVGHJCFXDTF78t67tuygjhbvghTFYFUYGuhv" render={() => (
              <>
         <FaceRecognition/>
          </>
           )} />
           {/* Course */}
           <Route exact path="/JVJHBKJHIbvgjbjkugyTYGHV786ftuvgjkui876FTYGHvcfdryTYGHOJPllkjh" render={() => (
            <>
        <UserForm />
        </>
         )} />
         {/* Studio Menu */}
         <Route exact path="/GCVJHIUH7y8tygujghbkVGTF67TGYHbkhjgvcukjlmkljhjklnj,.kjuygu" render={() => (
          <>
      <StudioMenu />
      </>
       )} />
       {/* Confidence */}
       <Route exact path="/ADjksbda8hlk;l/.,l;l/;UHJBVGFAgi7swd8" render={() => (
          <>
      <Con4dnz />
      </>
       )} />
        {/* Confidence */}
        <Route exact path="/quiz-mood" render={() => (
          <>
      <Quiz />
      </>
       )} />
       {/* Four Track Studio */}
        <Route exact path="/HVSYTG87yhuijbhGBHSVFT*76ftyuygiuhILJKM.L,;OKIHUGYUT6756E4ryftgvhb" render={() => (
          <>
      <FourTrackStudioRecorder />
      </>
       )} />
            </Router>
          </div>
      </>
    );
  }
}

export default App;