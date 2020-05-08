import * as React from "react";
import * as ReactDOM from "react-dom";
import App from './App'
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {createBrowserHistory} from "history";
import Setup from "./views/Setup/Setup";
import LandingPage from "./views/LandingPage/LandingPage";
import Reports from "./views/Reports/Reports";
import Dashboard from "./views/Dashboard/Dashboard";
import ApolloClient from "apollo-boost";
import {ApolloProvider} from "react-apollo";

const ROOT = document.querySelector(".container");
const hist = createBrowserHistory();
const client = new ApolloClient({
    uri: "http://localhost:4321/graphql"
});

export default function Index() {
    return (
        <ApolloProvider client={client}>
        <Router history={hist}>
            <Switch>
                <Route exact path="/" component={LandingPage}/>
                <Route path="/dashboard" component={Dashboard}/>
                <Route exact path="/setup" component={Setup}/>
                <Route path="/reports" component={Reports}/>


            </Switch>
        </Router>
        </ApolloProvider>
    )
}


document.addEventListener('DOMContentLoaded', () => {
    ReactDOM.render(
        <Index/>,
       ROOT)
})

