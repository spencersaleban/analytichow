import * as React from 'react';
import {createStyles, makeStyles, Theme} from '@material-ui/core/styles'
import List from '@material-ui/core/List'
import {Toolbar} from '@material-ui/core';
import AppBar from "@material-ui/core/AppBar";
import Divider from "@material-ui/core/Divider";
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles((theme: Theme) =>
    createStyles({

        footer: {
            background: '#161515',
            top: 100,

        },
        grow: {
            flexGrow: 1,
            padding: 'none',

        },
        email: {
            color: '#EDDDA8',
        },
        support: {
            marginBottom: 50,
        },
        root: {
            background: '#161515',
            width: '100%',
            padding: 'none',
        },
        li: {
            margin: 0,
        },

        solid: {
            borderTop: 50,
           borderColor: '#EDDDA8',
        },
        dividerFullWidth: {

        },
        dividerInset: {
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
                        <div className={classes.contact}>
                            <h4>Contact</h4>
                        </div>
                        <div className={classes.support}>
                            <p><span className={classes.email}>E</span> support@analyticwise.com</p>
                        </div >
                        <hr className={classes.solid}/>
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
