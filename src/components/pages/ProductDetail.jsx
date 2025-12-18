import { useState, useEffect } from "react";

import LoadingSpinner from "../LoadingSpinner";
export default function ProductDetail() {

    const [product, setProduct] = useState({});
    const [loading, setLoading] = useState(true);



   useEffect(() => {
    const fetchProduct = async () => {
        setLoading(true)
        try {
        const response = await fetch(`https://fakestoreapi.com/${product.id}`)
        const data = response.json()
        console.log(data)
        setProduct(data.product[0])
        } catch (error) {
            console.error("Error getting product: ", error)
          } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, []);





  useEffect(() => {
    console.log(product);
  }, [product]);

  if (loading) {
    <LoadingSpinner />;
  }

  if (product.length === 0) {
    return <div>Recipe not found</div>;
  }

  return (
    <div>
      <button onClick={() => push("/products")}>
        <FontAwesomeIcon icon="fa-arrow-left" /> Back to Products
      </button>

      <div className="recipe-detail-wrapper">
        <img src={product.image} alt="" />
        <h1>{product.title}</h1>
      
      </div>
    </div>
  );
}
