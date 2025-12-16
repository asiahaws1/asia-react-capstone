import { useCart } from "./CartContext";



export default function CartPage() {

    const { cart } = useCart();


    if (cart.length === 0) {
       return <h1>Your cart is currently empty.</h1>
    }


    return (
        <div>
            <h1>Your cart</h1>

            {cart.map(item => (
                <div key={item.product.id}>
                <h1>{item.product.title}</h1>
                <h1>{item.product.quantity}</h1>
                <h1>{item.product.price}</h1>


                </div>
            ))}
        </div>
    )

}