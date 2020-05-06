import * as React from 'react';
import {createStyles, makeStyles, Theme} from '@material-ui/core/styles'
import ListItem from '@material-ui/core/ListItem'
import List from '@material-ui/core/List'

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        footer: {
            position: 'fixed',
            left: 0,
            bottom: 0,
            width: '100%',
            background: '#161515',
            color: 'white',
            fontFamily: 'Helvetica',
            fontSize: '16px',
            fontWeight: 200
        },
        email: {
            color: '#EDDDA8',
        }

    })
);

const Footer: React.FC = () => {
    const classes = useStyles();
    return (
        <footer className={classes.footer}>
            <div className={classes.container}>
                <div className={classes.left}>
                    <List className={classes.list}>

                        <ListItem className={classes.inlineBlock}>
                            Contact
                        </ListItem>
                        <ListItem className={classes.inlineblock}>
                            <p ><span className={classes.email}>E </span> support@analytichow.com</p>
                        </ListItem>
                    </List>
                </div>
                <ListItem className={classes.Block}>
                    <p className={classes.right}>
          <span>
            &copy; {1900 + new Date().getYear()}{" "}
              Analytichow
          </span>
                    </p>
                </ListItem>
            </div>
        </footer>
    );
}


export default Footer;
