import React from "react";
import { Switch, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer"
import Home from "./components/Home/Home"
import Champions from "./components/Champions/Champions"
import Elos from "./components/Elos/Elos"

const App = () => {
    return (
        <div className="container">
            <div className="navbar">
                <Navbar />
            </div>
            <div className="content">
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route path="/champions">
                        <Champions />
                    </Route>
                    <Route path="/elos">
                        <Elos />
                    </Route>
                </Switch>
            </div>
            <div className="footer">
                <Footer />
            </div>
        </div>
    )
}

export default App
