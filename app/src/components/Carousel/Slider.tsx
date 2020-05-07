import * as React from 'react';
import '../../assets/jss/scss/Carousel.scss';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import landing from '../../assets/img/report.png';
import setup from '../../assets/img/report.png';
import reports from '../../assets/img/report.png';


const Slider: React.FC = () => (
  <div className="Carousel" data-testid="Slider">
      <Carousel>
          <div>
              <img src={landing}   />
              <p className="legend">Info</p>
          </div>
          <div>
              <img src={setup} />
              <p className="legend">Setup</p>
          </div>
          <div>
              <img src={reports} />
              <p className="legend">Report</p>
          </div>
      </Carousel>
  </div>
);

export default Slider;
