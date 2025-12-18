import { createContext, useState, useContext } from "react";


const CartContext = createContext();
export const useCart = () => useContext(CartContext);


export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);


    const addToCart = (product) => {
        setCart(prev => {
            const exists = prev.find(item => item.product.id === product.id);
            if (exists) {
                return prev.map(item =>
                    item.product.id === product.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            }
            return [...prev, { product, quantity: 1 }];
        });
    };


    const decreaseQuantity = (id) => {
        setCart(prev =>
            prev.map(item =>
                item.product.id === id && item.quantity > 1
                    ? { ...item, quantity: item.quantity - 1 }
                    : item
            )
        );
    };


    const removeFromCart = (id) => {
        setCart(prev => prev.filter(item => item.product.id !== id));
    };


    const clearCart = () => setCart([]);


    let subtotal = 0;

    for (let i = 0; i < cart.length; i++) {
        const item = cart[i];
        subtotal = subtotal + item.product.price * item.quantity;
    }


    const shipping = cart.length > 0 ? 9.99 : 0;
    const total = subtotal + shipping;


    return (
        <CartContext.Provider
            value={{
                cart,
                addToCart,
                decreaseQuantity,
                removeFromCart,
                clearCart,
                subtotal,
                shipping,
                total
            }}
        >
            {children}
        </CartContext.Provider>
    );
};


export default CartProvider;