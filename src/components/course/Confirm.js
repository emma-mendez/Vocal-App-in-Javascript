import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import { List, ListItem, ListItemText } from '@material-ui/core/';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';

export class Confirm extends Component {
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
    const {
      values: { firstName, 
        lastName, 
        contactNumber, 
        email,
        socialFB,
        socialIG,
        needs,
        bio  }
    } = this.props;
    
    return (
      <MuiThemeProvider>
        <>
          <Dialog
            open
            fullWidth
            maxWidth='sm'
          >
            <AppBar title="Confirm User Data" />
            <List>
            <Box p={1} bgcolor="background.paper">
              <ListItem>
                <ListItemText primary="First Name" secondary={firstName} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Last Name" secondary={lastName} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Contact Number" secondary={contactNumber} />
                </ListItem>
                <ListItem>
                <ListItemText primary="Email" secondary={email} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Social 1" secondary={socialFB} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Social 2" secondary={socialIG} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Needs" secondary={needs} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Bio" secondary={bio} />
              </ListItem>
              </Box>
            </List>
            <br />
            <div style={{ width: '100%' }}>
            <Box 
            component="div" 
            display="inline" 
            p={1} 
            m={1} 
            bgcolor="background.paper">
            <Button
              color="secondary"
              variant="contained"
              onClick={this.back}
            >Back</Button>
            </Box>
            <Box mcomponent="div" 
            display="inline" 
            p={1} 
            m={1} 
            bgcolor="background.paper">
            <Button
              color="primary"
              variant="contained"
              onClick={this.continue}
            >Confirm & Continue</Button>
            </Box>
            </div>
            <br />
          </Dialog>
        </>
      </MuiThemeProvider>
    );
  }
}

export default Confirm;
