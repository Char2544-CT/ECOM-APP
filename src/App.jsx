import { useState } from 'react'
import './App.css'
import ProductList from './components/ProductList';

function App() {
  const [products] = useState([
    { id: 1, name: "Laptop", price: "$999", description: "High performance laptop"},
    { id: 2, name: "Phone", price: "$499", description: "Latest smartphone" },
    { id: 3, name: "Headphones", price: "$199", description: "Noise-cancelling headphones" }
  ]);

  return (
    <>
      <ProductList products={products} />
    </>
  )
}

export default App
