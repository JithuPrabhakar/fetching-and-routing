import React, { useEffect, useState } from "react"
import axios from "axios"
import ProductCard from "../components/ProductCard"

const Products = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => setProducts(res.data))
      .catch((err) => console.log(err))
  }, [])

  return (
    <div className="d-flex gap-3 flex-wrap">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  )
}

export default Products
