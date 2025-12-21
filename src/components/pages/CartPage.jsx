import { useState } from "react";
import Modal from "react-modal";
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

  const [removeOpen, setRemoveOpen] = useState(false);
  const [checkoutOpen, setCheckoutOpen] = useState(false);
  const [activeId, setActiveId] = useState(null);

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
        {cart.map((item) => (
          <div key={item.product.id} className="cart-card">
            <img
              className="cart-image"
              src={item.product.image}
              alt={item.product.title}
            />

            <h1 className="cart-title">{item.product.title}</h1>
            <h1 className="cart-price">${item.product.price}</h1>

            <div className="quantity-controls">
              <button
                onClick={() =>
                  item.quantity > 1 &&
                  decreaseQuantity(item.product.id)
                }
              >
                -
              </button>

              <h3>{item.quantity}</h3>

              <button onClick={() => addToCart(item.product)}>
                +
              </button>
            </div>

            <button
              className="remove-button"
              onClick={() => {
                setActiveId(item.product.id);
                setRemoveOpen(true);
              }}
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
          onClick={() => setCheckoutOpen(true)}
        >
          Checkout
        </button>
      </div>

      <Modal
        isOpen={removeOpen}
        onRequestClose={() => setRemoveOpen(false)}
        className="cart-modal"
        overlayClassName="cart-overlay"
      >
        <h2>Remove item?</h2>
        <p>This will remove the item from your cart.</p>

        <div className="modal-actions">
          <button
            onClick={() => {
              removeFromCart(activeId);
              setRemoveOpen(false);
            }}
          >
            Remove
          </button>

          <button onClick={() => setRemoveOpen(false)}>
            Cancel
          </button>
        </div>
      </Modal>

      <Modal
        isOpen={checkoutOpen}
        onRequestClose={() => setCheckoutOpen(false)}
        className="cart-modal"
        overlayClassName="cart-overlay"
      >
        <h2>Checkout</h2>
        <p>Ready to complete your order?</p>

        <div className="modal-actions">
          <button
            onClick={() => {
              clearCart();
              setCheckoutOpen(false);
            }}
          >
            Confirm
          </button>

          <button onClick={() => setCheckoutOpen(false)}>
            Cancel
          </button>
        </div>
      </Modal>
    </div>
  );
}
