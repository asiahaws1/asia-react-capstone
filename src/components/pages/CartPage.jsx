import { useCart } from "./CartContext";

export default function CartPage() {
  const {
    cart,
    addToCart,
    decreaseQuantity,
    removeFromCart,
    clearCart,
    subtotal,
    shipping,
    total
  } = useCart();

  if (cart.length === 0) {
    return (
      <div className="empty-cart">
        <h1>Your cart is currently empty</h1>
        <p>Add stuff to your cart now!</p>
      </div>
    );
  }

  return (
    <div className="cart-page">
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

            <div className="quantity-controls">
              <button onClick={() => decreaseQuantity(item.product.id)}>
                -
              </button>

              <h3>{item.quantity}</h3>

              <button onClick={() => addToCart(item.product)}>
                +
              </button>
            </div>

            <button
              className="remove-button"
              onClick={() => removeFromCart(item.product.id)}
            >
              Remove
            </button>
          </div>
        ))}
      </div>

      <div className="cart-summary">
        <p>Subtotal: ${subtotal.toFixed(2)}</p>
        <p>Shipping: ${shipping.toFixed(2)}</p>
        <h2>Total: ${total.toFixed(2)}</h2>

        <button
          className="checkout-button"
          onClick={clearCart}
        >
          Checkout
        </button>
      </div>
    </div>
  );
}
