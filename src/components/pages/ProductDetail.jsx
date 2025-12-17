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
          setLoading(false)
        }
    }
   })
}