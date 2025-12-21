import { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import LoadingSpinner from "../LoadingSpinner";
import { useCart } from "./CartContext";

export default function ProductDetail() {
  const { id } = useParams();
  const history = useHistory();
  const { addToCart } = useCart();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showMore, setShowMore] = useState(false);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(
          `https://fakestoreapi.com/products/${id}`
        );
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.error("Error getting product:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  const truncatedDescription =
    product && product.description.length > 150
      ? product.description.slice(0, 150) + "..."
      : product?.description;

  return (
    <div className="product-detail-page">
      {loading && <LoadingSpinner />}

      {!loading && !product && (
        <div>Product not found</div>
      )}

      {!loading && product && (
        <>
          <button
            className="back-button"
            onClick={() => history.push("/products")}
          >
            <FontAwesomeIcon icon="fa-arrow-left" /> Back to Products
          </button>

          <div className="product-detail-wrapper">
            <img src={product.image} alt={product.title} />

            <div className="product-info">
              <h1>{product.title}</h1>
              <p className="category">{product.category}</p>

              <p className="price">
                ${product.price.toFixed(2)}
              </p>

              <p className="description">
                {showMore ? product.description : truncatedDescription}
                {product.description.length > 150 && (
                  <button
                    className="show-more"
                    onClick={() => setShowMore(!showMore)}
                  >
                    {showMore ? "Show less..." : "Show more..."}
                  </button>
                )}
              </p>

              <div className="rating">
                ⭐ {product.rating.rate} ({product.rating.count} reviews)
              </div>

              <button
                className="add-to-cart"
                onClick={() => addToCart(product)}
              >
                Add to Cart
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
