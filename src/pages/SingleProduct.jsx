import React from "react"
import { useLocation } from "react-router-dom"

const SingleProduct = () => {
  const location = useLocation()
  const product = location.state
  return (
    <div>
      <h1>{product.title}</h1>
      <img src={product.image} alt={product.title} width={"100px"} />
      <p>{product.description}</p>
      <h4>{product.price}</h4>
      <h5>{product.category}</h5>
      <p>
        Rating : {product.rating.rate} from {product.rating.count} users
      </p>
    </div>
  )
}

export default SingleProduct
