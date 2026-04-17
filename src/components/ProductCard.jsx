import Button from "react-bootstrap/Button"
import Card from "react-bootstrap/Card"
import { useNavigate } from "react-router-dom"

function ProductCard({ product }) {
  const navigate = useNavigate()
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={product.image} />
      <Card.Body>
        <Card.Title>{product.title}</Card.Title>
        <Card.Text>{product.description}</Card.Text>
        <Card.Text>{product.price}</Card.Text>
        <Button
          variant="primary"
          onClick={() => navigate(`/${product.id}`, { state: product })}
        >
          Go to details
        </Button>
      </Card.Body>
    </Card>
  )
}

export default ProductCard
