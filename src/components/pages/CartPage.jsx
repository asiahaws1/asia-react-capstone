import { useCart } from "./CartContext";



export default function CartPage() {
  const { cart, removeFromCart } = useCart();

  if (cart.length === 0) {
    return (
      <div className="empty-cart">
        <h1>Your cart is currently empty</h1>
        <p>Add stuff to your cart now!</p>
      </div>
    );
  }

  return (
    <div>
      <h1 className="cart-page-title">Your cart</h1>

      <div className="cart">
        {cart.map(item => (
          <div key={item.product.id} className="cart-card">
            <img
              className="cart-image"
              src={item.product.image}
              alt={item.product.title}
            />
            <h1 className="cart-title">{item.product.title}</h1>
            <h1 className="cart-price">${item.product.price}</h1>
            <h1 className="cart-quantity">Quantity: {item.quantity}</h1>

            <button onClick={() => removeFromCart(item.product.id)} className="remove-button">Remove</button>
          </div>
        ))}
      </div>
    </div>
  );
}
