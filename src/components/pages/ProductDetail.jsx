import { useState, useEffect } from "react";
import { useParams, useHistory, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LoadingSpinner from "../LoadingSpinner";
import { useCart } from "./CartContext";

export default function ProductDetail() {
  const { id } = useParams();
  const history = useHistory();
  const { addToCart } = useCart();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showMore, setShowMore] = useState(false);
  const [quantity, setQuantity] = useState(0);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <LoadingSpinner />;
  if (!product) return <div>Product not found</div>;

  const truncated =
    product.description.length > 150
      ? product.description.slice(0, 150) + "..."
      : product.description;

  return (
    <div className="pd-page">
      <ToastContainer position="top-right" autoClose={3000} />

      <button
        className="pd-back-btn"
        onClick={() => history.push("/products")}
      >
        <FontAwesomeIcon icon="fa-arrow-left" /> Back to Products
      </button>

      <div className="pd-card">
        <Link to={`/products/${product.id}`} className="pd-link">
          <img
            className="pd-image"
            src={product.image}
            alt={product.title}
          />
          <h1 className="pd-title">{product.title}</h1>
        </Link>

        <p className="pd-category">{product.category}</p>
        <p className="pd-price">${product.price.toFixed(2)}</p>

        <p className="pd-description">
          {showMore ? product.description : truncated}
          {product.description.length > 150 && (
            <button
              className="pd-toggle"
              onClick={() => setShowMore(!showMore)}
            >
              {showMore ? "Show less..." : "Show more..."}
            </button>
          )}
        </p>

        <div className="pd-rating">
          ⭐ {product.rating.rate} ({product.rating.count} reviews)
        </div>

        <div className="pd-quantity">
          <button
            className="pd-qty-btn"
            onClick={() =>
              setQuantity((prev) => (prev > 0 ? prev - 1 : 0))
            }
          >
            -
          </button>

          <span className="pd-qty-value">{quantity}</span>

          <button
            className="pd-qty-btn"
            onClick={() => setQuantity((prev) => prev + 1)}
          >
            +
          </button>
        </div>

        <button
          className="pd-add-btn"
          onClick={() => {
            if (quantity > 0) {
              for (let i = 0; i < quantity; i++) {
                addToCart(product);
              }
              toast.success("Added to cart");
              setQuantity(0);
            } else {
              toast.error("Select a quantity first");
            }
          }}
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
}
