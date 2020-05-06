import * as React from 'react';
import '../../assets/jss/scss/LandingPage.scss';
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";

const LandingPage: React.FC = () => (
  <div className="LandingPage" data-testid="LandingPage">
      <div className="Header"><Header/></div>
      <div className="Footer"><Footer/></div>
  </div>
);

export default LandingPage;
