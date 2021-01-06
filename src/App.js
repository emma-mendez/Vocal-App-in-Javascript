import React, { useState, Component }from 'react';
import './App.css';
import Dashboard from './components/dashboard/dashboard.js';
import Header from './components/header.js';
import CassetteTape from "./components/CassetteTape";
import { createGlobalStyle } from "styled-components";
import styledNormalize from "styled-normalize";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import {Navbar, Nav, Form, NavDropdown, Button, FormControl} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

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
  font-family: 'Source Sans Pro', sans-serif;
  font-weight: 400;
  background: #19ca90;
}
`;

class App extends Component {
  render() {
    return (
      <>
      <div className="App">

       <Navbar bg="light" expand="lg">
  <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#link">Link</Nav.Link>
      <NavDropdown title="Dropdown" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-success">Search</Button>
    </Form>
  </Navbar.Collapse>
</Navbar>
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
          <div>
                 <Router>
            <Route exact path="/emma" render={() => (
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

// function App() {

//   return (
//     <>
//     <Header />
//       <Dashboard/>
//       <br></br>
//    ` </>
//   );
// }


export default App;