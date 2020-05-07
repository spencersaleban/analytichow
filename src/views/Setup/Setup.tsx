import * as React from 'react';
import Header from "../../components/Header/Header";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

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
}));

const Setup: React.FC = () => {

    const classes = useStyles();

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
