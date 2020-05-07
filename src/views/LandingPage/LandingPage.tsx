import * as React from 'react';
import '../../assets/jss/scss/LandingPage.scss';
import Footer from "../../components/Footer/Footer";
import Nav from "../../components/Nav/Nav";


import intro1 from '../../assets/img/Logo.png';


import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) => {
        imageItem: {
            padding: theme.spacing(20, 0)
        }
    }
);

const LandingPage: React.FC = () => {
    const classes = useStyles();

    const images = [{image: intro1}, ];

//width:"60vw",height:"70vh"
    return (
        <div className="LandingPage" data-testid="LandingPage">
            <div className="Nav"><Nav/></div>
            
            <div className="Footer"><Footer/></div>
        </div>
    )
};

export default LandingPage;
