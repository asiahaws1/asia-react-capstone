import { createContext, useState, useContext } from "react";

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addToCart = (product) => {
        setCart(prev => {
            const exists = prev.some(
                item => item.product.id === product.id
            );

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



    const removeFromCart = (id) => {
        setCart(prev => prev.filter(item => item.product.id !== id));
    }



    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
            {children}
        </CartContext.Provider>
    );





};

export default CartProvider;
