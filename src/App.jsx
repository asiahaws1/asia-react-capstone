import { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import "./styles/main.scss"

import Products from "./components/Products";
import NavBar from "./components/NavBar";
import CartPage from "./components/pages/CartPage";
import icons from "./assets/icons";
import Contact from "./components/pages/Contact";
import About from "./components/pages/About";
import Home from "./components/pages/Home";




icons()

export default function App() {
    return (
        <div>
            <BrowserRouter>
            <NavBar />
            <Switch>
                <Route path="/products" component={Products} />
                <Route path="/cart" component={CartPage} />
                <Route path="/contact" component={Contact} />
                <Route path="/about" component={About} />
                <Route path="/home" component={Home} />

                <Redirect from="/" to="/home"/>
            </Switch>
            </BrowserRouter>
        </div>
    )
}