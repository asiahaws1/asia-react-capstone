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
        </nav>
    )
}


