import * as React from 'react';
import {useState} from 'react'
import Header from "../../components/Header/Header";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from "@material-ui/core/Button";
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        marginTop: 50,


    },
    paper: {
        padding: theme.spacing(1),
        marginLeft: 40,
        fontFamily: 'Halvetica',
        fontWeight: 200,
        color: 'white',
        background: '#1f1515'
    },
    add: {
        background: '#161515',
        color: 'white',
        position: 'relative',
        left: 480,
    },
    icon: {
        marginRight: theme.spacing(2),
        color: '#EDDDA8',
    },
    dailog: {
        background: '#1f1515'
    }
}));

const Setup: React.FC = () => {

    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const [value, setValue] = React.useState('');

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleAdd = (event) => {
        setOpen(false);
    };
    const handleClose = () => {
        setOpen(false);
    };
    const handleChange = (event) => {
        console.log(event.target.value)
    };


    function FormRow() {
        return (
            <React.Fragment>
                <Grid item xs={4}>
                    <Paper className={classes.paper}>Placeholder</Paper>
                </Grid>
            </React.Fragment>
        );
    }
    return (
  <div className="Setup" data-testid="Setup">
      <div className="Header"><Header/></div>
      <div className={classes.root}>
          <Button variant="contained"  className={classes.add} disableElevation>
             <AddCircleOutlineIcon className={classes.icon} onClick={handleClickOpen} />  ADD SERVICE
          </Button>
          <div>

              <Dialog  className={classes.dailog} open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                  <DialogTitle id="form-dialog-title">Add</DialogTitle>
                  <DialogContent>
                      <DialogContentText>
                          To add service, please enter the website of the service.
                      </DialogContentText>
                      <TextField
                          autoFocus
                          margin="dense"
                          id="name"
                          label="website"
                          type="text"
                          fullWidth
                          onChange={handleChange}

                      />

                  </DialogContent>
                  <DialogActions>
                      <Button onClick={handleClose} color="primary">
                          Cancel
                      </Button>
                      <Button onClick={handleAdd} color="primary">
                          Add
                      </Button>
                  </DialogActions>
              </Dialog>
          </div>
          <Grid container spacing={1}>
              <Grid container item xs={12} spacing={3}>
                  <FormRow />
              </Grid>
              <Grid container item xs={12} spacing={3}>
                  <FormRow />
              </Grid>
              <Grid container item xs={12} spacing={3}>
                  <FormRow />
              </Grid>
              <Grid container item xs={12} spacing={3}>
                  <FormRow />
              </Grid>
          </Grid>
      </div>

  </div>
)
};

export default Setup;
