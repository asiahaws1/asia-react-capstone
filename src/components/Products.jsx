import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useCart } from "./pages/CartContext";
import LoadingSpinner from "./LoadingSpinner";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Products() {
  const { addToCart } = useCart();

  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  const [sortType, setSortType] = useState("id");
  const [sortOrder, setSortOrder] = useState("asc");

  const [expandedId, setExpandedId] = useState(null);
  const [quantities, setQuantities] = useState({});

  useEffect(() => {
    Promise.all([
      fetch("https://fakestoreapi.com/products").then(res => res.json()),
      fetch("https://fakestoreapi.com/products/categories").then(res => res.json())
    ]).then(([productsData, categoriesData]) => {
      setProducts(productsData);
      setCategories(categoriesData);
      setSelectedCategories(categoriesData);
      setLoading(false);
    });
  }, []);

  function toggleCategory(category) {
    setSelectedCategories(prev =>
      prev.includes(category)
        ? prev.filter(c => c !== category)
        : [...prev, category]
    );
  }

  function increase(id) {
    setQuantities(prev => ({
      ...prev,
      [id]: (prev[id] || 0) + 1
    }));
  }

  function decrease(id) {
    setQuantities(prev => ({
      ...prev,
      [id]: Math.max((prev[id] || 0) - 1, 0)
    }));
  }

  function handleAdd(product) {
    const qty = quantities[product.id] || 0;
    if (qty === 0) {
      toast.error("Please select a quantity first");
      return;
    }
    for (let i = 0; i < qty; i++) {
      addToCart(product);
    }
    setQuantities(prev => ({ ...prev, [product.id]: 0 }));
    toast.success("Added to cart");
  }

  if (loading) {
    return <LoadingSpinner />;
  }

  const filteredProducts =
    selectedCategories.length === 0
      ? []
      : products.filter(p => selectedCategories.includes(p.category));

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    let aVal = a[sortType];
    let bVal = b[sortType];

    if (typeof aVal === "string") {
      aVal = aVal.toLowerCase();
      bVal = bVal.toLowerCase();
    }

    if (aVal < bVal) return sortOrder === "asc" ? -1 : 1;
    if (aVal > bVal) return sortOrder === "asc" ? 1 : -1;
    return 0;
  });

  return (
    <div className="products-page">
      <ToastContainer />

      <div className="page-title">
        <h1>Products</h1>
      </div>

      <div className="filters">
        <div className="categories">
          {categories.map(category => (
            <label key={category}>
              <input
                type="checkbox"
                checked={selectedCategories.includes(category)}
                onChange={() => toggleCategory(category)}
              />
              {category}
            </label>
          ))}
        </div>

        <div className="sort">
          <select value={sortType} onChange={e => setSortType(e.target.value)}>
            <option value="id">ID</option>
            <option value="title">Title</option>
            <option value="price">Price</option>
            <option value="category">Category</option>
          </select>

          <select value={sortOrder} onChange={e => setSortOrder(e.target.value)}>
            <option value="asc">Ascending</option>
            <option value="desc">Descending</option>
          </select>
        </div>
      </div>

      <div className="products">
        {sortedProducts.map(product => {
          const isExpanded = expandedId === product.id;
          const truncated =
            product.description.length > 120
              ? product.description.slice(0, 120) + "..."
              : product.description;

          return (
            <div key={product.id} className="product-card">
              <Link to={`/products/${product.id}`}>
                <img
                  className="product-image"
                  src={product.image}
                  alt={product.title}
                />
                <h2 className="product-title">{product.title}</h2>
              </Link>

              <p className="product-category">{product.category}</p>
              <p className="product-price">${product.price}</p>

              <p className="product-description">
                {isExpanded ? product.description : truncated}
                <button
                  className="show-more"
                  onClick={() =>
                    setExpandedId(isExpanded ? null : product.id)
                  }
                >
                  {isExpanded ? "Show less..." : "Show more..."}
                </button>
              </p>

              <div className="rating">
                ⭐ {product.rating.rate} ({product.rating.count} reviews)
              </div>

              <div className="quantity-controls">
                <button onClick={() => decrease(product.id)}>-</button>
                <span>{quantities[product.id] || 0}</span>
                <button onClick={() => increase(product.id)}>+</button>
              </div>

              <button
                className="add-to-cart"
                onClick={() => handleAdd(product)}
              >
                Add To Cart
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
