import * as React from 'react';
import { fade, makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreIcon from '@material-ui/icons/MoreVert';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import NotchedOutline from "@material-ui/core/OutlinedInput/NotchedOutline";
import Logo from '../../assets/img/Logo-second.png'
import {Button} from "@material-ui/core";
import { withRouter } from "react-router-dom";


const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        header: {
            background: '#161515'
        },
        grow: {
            flexGrow: 1,
        },
        menuButton: {
            marginRight: theme.spacing(2),
        },
        title: {
            color: '#EDDDA8',
            fontSize: '40px',
            fontFamily: 'Helvetica',
            lineHeight: '30px',
            display: 'none',
            [theme.breakpoints.up('sm')]: {
                display: 'block',
            },
        },
        slogan: {
            display: 'block',
            fontSize: '11px',
            margin: theme.spacing(0, 'auto')
        },
        menu: {
            margin: theme.spacing(0, '20%'),
            position: 'relative',
            top: 10,
        },
        span: {
          marginLeft: '30px',
        },
        search: {
            position: 'relative',
            borderRadius: theme.shape.borderRadius,
            backgroundColor: fade(theme.palette.common.white, 0.15),
            '&:hover': {
                backgroundColor: fade(theme.palette.common.white, 0.25),
            },
            marginRight: theme.spacing(2),
            marginLeft: 0,
            width: '100%',
            [theme.breakpoints.up('sm')]: {
                marginLeft: theme.spacing(3),
                width: 'auto',
            },
        },
        searchIcon: {
            padding: theme.spacing(0, 2),
            height: '100%',
            position: 'absolute',
            pointerEvents: 'none',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        },
        inputRoot: {
            color: 'inherit',
        },
        inputInput: {
            padding: theme.spacing(1, 1, 1, 0),
            // vertical padding + font size from searchIcon
            paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
            transition: theme.transitions.create('width'),
            width: '100%',
            [theme.breakpoints.up('md')]: {
                width: '20ch',
            },
        },
        sectionDesktop: {
            color:'white',
            fontWeight: 200,
            display: 'none',
            [theme.breakpoints.up('md')]: {
                display: 'flex',
            },
            position: 'relative',
            bottom: 10,
        },
        sectionMobile: {
            color:'#EDDDA8',
            display: 'flex',
            [theme.breakpoints.up('md')]: {
                display: 'none',
            },
        },
    }),
);

const Nav: React.FC = (props) => {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState<null | HTMLElement>(null);

    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const handleLoginMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
        handleMobileMenuClose();
    };

    const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
        setMobileMoreAnchorEl(event.currentTarget);
    };

    const menuId = 'primary-search-account-menu';
    const renderMenu = (
        <Menu
            anchorEl={anchorEl}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            id={menuId}
            keepMounted
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            open={isMenuOpen}
            onClose={handleMenuClose}
        >
            <Button color="inherit">Login with Google</Button>
        </Menu>
    );

    const mobileMenuId = 'primary-search-account-menu-mobile';
    const renderMobileMenu = (
        <Menu
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            id={mobileMenuId}
            keepMounted
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose}
        >

            <MenuItem onClick={handleLoginMenuOpen}>
                <Button color="inherit">Login</Button>
            </MenuItem>
            <MenuItem>
                <Button color="inherit">Contact Us</Button>
            </MenuItem>
        </Menu>

    );

    const handleLogin = () => {
        props.history.push('/setup')
    }

    return (
        <div className={classes.grow}>
            <AppBar className={classes.header} position="static">
                <Toolbar>
                    <img src={Logo} />
                    <Typography className={classes.title} >
                        Analytichow
                        <span className={classes.slogan}>__We take pride in impeccable analytics__</span>
                    </Typography>
                    <div className={classes.menu}>
                        <Button color="inherit">Features</Button>
                        <Button color="inherit">Solutions</Button>
                    </div>
                    <div className={classes.grow} />
                    <div className={classes.sectionDesktop}>
                        <Button color="inherit" onClick={handleLogin}>Login</Button>
                        <Button color="inherit">Contact Us</Button>
                    </div>
                    <div className={classes.sectionMobile}>
                        <Button
                            aria-label="show more"
                            aria-controls={mobileMenuId}
                            aria-haspopup="true"
                            onClick={handleMobileMenuOpen}
                            color="inherit"
                        >
                            <MoreIcon />
                        </Button>
                    </div>
                </Toolbar>
            </AppBar>
            {renderMobileMenu}
            {renderMenu}
        </div>
    );
}
export default withRouter(Nav);
