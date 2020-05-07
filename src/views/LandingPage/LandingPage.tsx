import * as React from 'react';
import '../../assets/jss/scss/LandingPage.scss';
import Footer from "../../components/Footer/Footer";
import Nav from "../../components/Nav/Nav";
import Search from "../../components/Search/Search";
import Slider from "../../components/Carousel/Slider";
import intro1 from '../../assets/img/Logo.png';


import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
            carousel: {
                position: 'relative',
                top: 130,
            }
        }
    )
);

const LandingPage: React.FC = () => {
    const classes = useStyles();

    const images = [{image: intro1},];

//width:"60vw",height:"70vh"
    return (
        <div className="LandingPage" data-testid="LandingPage">
            <div className={classes.nav}><Nav/></div>
            <div className={classes.search}><Search/></div>
            <div className={classes.carousel}><Slider/></div>
            <div className={classes.footer}><Footer/></div>
        </div>
    )
};

export default LandingPage;
