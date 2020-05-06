import * as React from "react";
import * as ReactDOM from "react-dom";
import App from './App'
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {createBrowserHistory} from "history";
import Setup from "./views/Setup/Setup";
import LandingPage from "./views/LandingPage/LandingPage";
import Reports from "./views/Reports/Reports";
import Dashboard from "./views/Dashboard/Dashboard";

const ROOT = document.querySelector(".container");
const hist = createBrowserHistory();

export default function Index() {
    return (
        <Router history={hist}>
            <Switch>
                <Route exact path="/" component={LandingPage}/>
                <Route path="/dashboard" component={Dashboard}/>
                <Route exact path="/setup" component={Setup}/>
                <Route path="/reports" component={Reports}/>


            </Switch>
        </Router>
    )
}


document.addEventListener('DOMContentLoaded', () => {
    ReactDOM.render(
        <Index/>,
       ROOT)
    )
})

