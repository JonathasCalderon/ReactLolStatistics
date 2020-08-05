import React from "react";
import { Switch, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer"
import Home from "./components/Home/Home"

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
                </Switch>
            </div>
            <div className="footer">
                <Footer />
            </div>
        </div>
    )
}

export default App
