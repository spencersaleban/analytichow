import * as React from 'react';
//import '../../assets/scss/LandingPage.scss';
import LandingPage from "./views/LandingPage/LandingPage";

const App: React.FC = () => (
    <div className="App" data-testid="App">
       <LandingPage/>
    </div>
);

export default App;
