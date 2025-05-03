import { useState } from 'react'
import './App.css'
import ProductList from './components/ProductList';
import Laptop from './assets/Images/laptop.jpg'
import Phone from './assets/Images/phone.jpg'
import Headphones from './assets/Images/headphones.jpg'
import Watch from './assets/Images/watch.jpg'
import Tablet from './assets/Images/tablet.jpg'

function App() {
  const [products] = useState([
    { id: 1, name: "Laptop", price: "$999", description: "High-performance laptop for gaming", image: Laptop },
    { id: 2, name: "Smartphone", price: "$699", description: "Latest smartphone with advanced features", image: Phone },
    { id: 3, name: "Headphones", price: "$199", description: "Noise-cancelling over-ear headphones", image: Headphones },
    { id: 4, name: "Smartwatch", price: "$299", description: "Smartwatch with fitness tracking", image: Watch },
    { id: 5, name: "Tablet", price: "$399", description: "Portable tablet for work and play", image: Tablet },
  ]);

  return (
    <>
      <ProductList products={products} />
    </>
  )
}

export default App
