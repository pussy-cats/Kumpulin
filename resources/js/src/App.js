import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Link, Route } from "react-router-dom";

// pages
import Dashboard from "./Pages/Dashboard";
import Upload from "./Pages/Upload";
import Login from "./Pages/Login";

function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Upload} />
                <Route path="/dashboard" component={Dashboard} />
                <Route path="/login" component={Login} />
            </Switch>
        </BrowserRouter>
    );
}

export default App;

if (document.getElementById("app")) {
    ReactDOM.render(<App />, document.getElementById("app"));
}
