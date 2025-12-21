import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import "./styles/main.scss";

import Products from "./components/Products";
import NavBar from "./components/NavBar";
import CartPage from "./components/pages/CartPage";
import Contact from "./components/pages/Contact";
import About from "./components/pages/About";
import Home from "./components/pages/Home";
import ProductDetail from "./components/pages/ProductDetail";
import Footer from "./components/Footer";
import NotFound from "./components/pages/NotFound";
import icons from "./assets/icons";

icons();

export default function App() {
    return (
        <BrowserRouter>
            <div className="app-layout">
                <NavBar />

                <main className="main-content">
                    <Switch>
                        <Route exact path="/products" component={Products} />
                        <Route path="/products/:id" component={ProductDetail} />
                        <Route path="/cart" component={CartPage} />
                        <Route path="/contact" component={Contact} />
                        <Route path="/about" component={About} />
                        <Route path="/home" component={Home} />

                        <Redirect exact from="/" to="/home" />

                        <Route path="*" component={NotFound} />
                    </Switch>
                </main>

                <Footer />
            </div>
        </BrowserRouter>
    );
}
