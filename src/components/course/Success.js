import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';

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
            <Box p={5} bgcolor="background.paper">
            <h1>Thank You For Your Submission</h1>
            <p>You will get an email with further instructions.</p>
            </Box>
          </Dialog>
        </>
      </MuiThemeProvider>
    );
  }
}

export default Success;
