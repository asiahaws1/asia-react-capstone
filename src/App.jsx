import { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import "./styles/main.scss"

import Products from "./components/Products";
import NavBar from "./components/NavBar";
import CartPage from "./components/pages/CartPage";
import icons from "./assets/icons";
import Contact from "./components/pages/Contact";

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

                <Redirect from="/" to="/products"/>
            </Switch>
            </BrowserRouter>
        </div>
    )
}