import { BrowserRouter, Routes, Route } from "react-router-dom"
import Products from "./pages/Products"
import SingleProduct from "./pages/SingleProduct"

function App() {
  return (
    <BrowserRouter>
      <h1>Routing and fetching</h1>
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/:id" element={<SingleProduct />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
