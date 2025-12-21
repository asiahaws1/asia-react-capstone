import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useCart } from "./pages/CartContext";

export default function Products() {
  const { addToCart } = useCart();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
      })
      .catch((err) => {
        console.error("Get Products Error: ", err);
      });
  }, []);

  return (
    <div className="products-page">
      <div className="page-title">
        <h1>Products</h1>
      </div>

      <div className="products">
        {products.map((product) => (
          <Link
            to={`/products/${product.id}`}
            key={product.id}
            className="product-card"
          >
            <img
              className="product-image"
              src={product.image}
              alt={product.title}
            />

            <h2 className="product-title">{product.title}</h2>

            <p className="product-price">${product.price}</p>

            <p className="product-category">{product.category}</p>

            <p className="product-description">{product.description}</p>

            <button
              className="add-to-cart"
              onClick={(e) => {
                e.preventDefault();
                addToCart(product);
              }}
            >
              Add To Cart
            </button>
          </Link>
        ))}
      </div>
    </div>
  );
}
