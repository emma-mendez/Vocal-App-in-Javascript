import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';

export class FormPersonalDetails extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const { values, handleChange } = this.props;
    return (
      <MuiThemeProvider>
        <>
          <Dialog
            open
            fullWidth
            maxWidth='sm'
          >
            <AppBar title="Enter Personal Details" />
            <Box p={5} bgcolor="background.paper">
            <TextField
              placeholder="Enter Your Country"
              label="Country"
              onChange={handleChange('Country')}
              defaultValue={values.country}
              margin="normal"
              fullWidth
            />
            <br />
            <TextField
              placeholder="Anything you`d like me to know? &#10;
              Breathing/&#10;
              recording/&#10;
              upcoming performance?"
              label="Needs"
              onChange={handleChange('needs')}
              defaultValue={values.needs}
              margin="normal"
              fullWidth
            />
            <br />
            <TextField
              placeholder="Enter Your Bio"
              label="Bio"
              onChange={handleChange('bio')}
              defaultValue={values.bio}
              margin="normal"
              fullWidth
            />
            <br />

            <Button
              color="secondary"
              variant="contained"
              onClick={this.back}
            >Back</Button>

            <Button
              color="primary"
              variant="contained"
              onClick={this.continue}
            >Continue</Button>
            </Box>
          </Dialog>
        </>
      </MuiThemeProvider>
    );
  }
}

export default FormPersonalDetails;
