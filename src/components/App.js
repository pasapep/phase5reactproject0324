// import './Styles.css'
import 'semantic-ui-css/semantic.min.css'
import { Route, Switch, BrowserRouter } from "react-router-dom";// import Header from "./Header";

import React, {useState, useEffect, Component} from "react";
import { Button, Container, Grid, Header, Icon, Menu } from "semantic-ui-react";
import NavBar from "./NavBar";
import Home from "./Home";
// import NavBar from "./NavBar"

function App () {
    return (
    <BrowserRouter> 
    <div>
        <h1> NavBar</h1>
        <NavBar />
    </div>
    <div>
        <Switch>
            <Route path = "/">
                <Home />
            </Route>
        </Switch>
    </div>
    </BrowserRouter>
    )
}

export default App;