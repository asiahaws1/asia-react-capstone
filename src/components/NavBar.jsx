import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";
import { useCart } from "./pages/CartContext";




export default function NavBar() {

    const { cart } = useCart();



    let totalQuantity = 0;

    cart.forEach(item => {
        totalQuantity += item.quantity;
    });



    return (
        <nav className="nav-bar">
            <NavLink to="/cart">
                <button className="cart-button"><FontAwesomeIcon className="cart-icon" icon="fa-cart-shopping" />

                    <span className="total-quantity">{totalQuantity}</span>
                </button>
            </NavLink>


            <NavLink to="/home">
            <h1>Home</h1>
            </NavLink>
            
            <NavLink to="/contact">
            <h1>Contact Us</h1>
            </NavLink>

            <NavLink to="/products">
            <h1>Products</h1>
            </NavLink>

            <NavLink to="/about">
            <h1>About</h1>
            </NavLink>


            

       
        </nav>
    )
}


