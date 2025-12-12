import { useState, useEffect } from "react";

export default function App() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then(response => response.json())
            .then(data => {
                setProducts(data);   
            })
            .catch(err => {
                console.error("Get Products Error: ", err);
            });
    }, []);

    return (
        <div>
            <h1>Products</h1>

            {products.map(product => (
                <div key={product.id}>
                    <h2>{product.title}</h2>
                    <h2>{product.price}</h2>
                    <h2>{product.description}</h2>
                    <h2>{product.category}</h2>
                    <img src={product.image}></img>
                </div>
            ))}
        </div>
    );
}
