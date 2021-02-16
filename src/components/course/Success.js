import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import { Link } from 'react-router-dom';

export class Success extends Component {
  continue = e => {
    e.preventDefault();
    // PROCESS FORM //
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  home = e => {
    this.props.home();
  }

  render() {
    return (
      <MuiThemeProvider>
        <>
          <Dialog
            open
            fullWidth
            maxWidth='sm'
          >
            <AppBar title="Success" />
            <Box p={5} bgcolor="background.paper" >
            <h1>Thank You For Your Submission</h1>
            <button class="buttonf">
            <Link to="/AKJBDABDKJbjbkjbndbfiuesfy783463945783648234iyurwhffbjdvcaca~DSErq6t87ywiau">Home</Link> 
            </button>
            </Box>
          </Dialog>
        </>
      </MuiThemeProvider>
    );
  }
}

export default Success;
