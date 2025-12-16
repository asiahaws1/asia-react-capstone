import { useState, useEffect } from "react";



export default function ProductDetail() {

    const [product, setProduct] = useState({})



   useEffect(() => {
    const getProduct = async () => {
        try {
        const response = await fetch(`https://fakestoreapi.com/${product.id}`)
        const data = response.json()
        console.log(data)
        setProduct(data.product[0])
        } catch (error) {
            console.error("Error getting product: ", error)
        } finally {

        }
    }
   })
}