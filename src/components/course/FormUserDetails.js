import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';





export class FormUserDetails extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
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
            <AppBar title="Enter User Details" />
            <Box p={5} bgcolor="background.paper">
            <TextField
              placeholder="Enter Your First Name"
              label="First Name"
              onChange={handleChange('firstName')}
              defaultValue={values.firstName}
              margin="normal"
              fullWidth
            />
            <br />
            <TextField
              placeholder="Enter Your Last Name"
              label="Last Name"
              onChange={handleChange('lastName')}
              defaultValue={values.lastName}
              margin="normal"
              fullWidth
            />
            <br />
            <TextField
              placeholder="Enter Your Number"
              label="Contact Number"
              onChange={handleChange('contactNumber')}
              defaultValue={values.contactNumber}
              margin="normal"
              fullWidth
            />
            <br />
            <TextField
              placeholder="Enter Your Email"
              label="Email"
              onChange={handleChange('email')}
              defaultValue={values.email}
              margin="normal"
              fullWidth
            />
            <br />
            <TextField
              placeholder="*Optional"
              label="Social i.e Instagram, Twritter, Facebook"
              onChange={handleChange('socialFB')}
              defaultValue={values.socialFB}
              margin="normal"
              fullWidth
            />
            <br />
            <TextField
              placeholder="*Optional"
              label="Social i.e Instagram, Twritter, Facebook"
              onChange={handleChange('socialIG')}
              defaultValue={values.email}
              margin="normal"
              fullWidth
            />
              </Box>
            <br />
            <Box p={5} bgcolor="background.paper">
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

export default FormUserDetails;
