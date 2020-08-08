import React from "react";
import { Switch, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Champions from "./components/Champions/Champions";
import Elos from "./components/Elos/Elos";
import ChampionPage from "./components/Champions/ChampionPage/ChampionPage";
import PageNotFound from "./components/PageNotFound/PageNotFound"

const App = () => {
    return (
        <div className="container">
            <Navbar />
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
                    <Route path="/champion/:championId">
                        <ChampionPage />
                    </Route>
                    <Route path="*">
                        <PageNotFound />
                    </Route>
                </Switch>
            </div>
            <Footer />
        </div>
    )
}

export default App
