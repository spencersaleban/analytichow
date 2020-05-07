import * as React from 'react';
import {createStyles, makeStyles, Theme} from '@material-ui/core/styles'
import ListItem from '@material-ui/core/ListItem'
import List from '@material-ui/core/List'
import { Toolbar } from '@material-ui/core';
import AppBar from "@material-ui/core/AppBar";
import Divider from "@material-ui/core/Divider";
import Typography from '@material-ui/core/Typography';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import BeachAccessIcon from '@material-ui/icons/BeachAccess';


const useStyles = makeStyles((theme: Theme) =>
    createStyles({

            footer: {
                background: '#161515',
                top: 150,

            },
            grow: {
                flexGrow: 1,

            },
        email: {
            color: '#EDDDA8',
        },
        root: {
            width: '100%',

            backgroundColor: theme.palette.background.paper,
        },
        dividerColor: {
            color: '#EDDDA8',
        },
        dividerFullWidth: {
            margin: `5px 0 0 ${theme.spacing(2)}px`,
        },
        dividerInset: {
            margin: `5px 0 0 ${theme.spacing(2)}px`,
            color: 'white',
        },

    })
);

const Footer: React.FC = () => {
    const classes = useStyles();
    return (
        <div className={classes.grow}>
            <AppBar className={classes.footer} position="relative">
                <Toolbar>
     
      <List className={classes.root}>
          <ListItem>
              <h4>Contact</h4>
          </ListItem>
        <ListItem>
            <p> <span className={classes.email}>E</span> support@analyticwise.com</p>
        </ListItem>
        <Divider component="li" className={classes.dividerColor} />

        <li>
          <Typography
            className={classes.dividerInset}
            color="textSecondary"
            display="block"
            variant="caption"
          >
              &copy; {1900 + new Date().getYear()}{" "}
              Analyticwise
          </Typography>
        </li>
      </List>
                </Toolbar>
            </AppBar>
        </div>
        
     
    );
}


export default Footer;
