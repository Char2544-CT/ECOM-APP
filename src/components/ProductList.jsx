import ProductItem from "./ProductItem";
import { useState } from "react";

//Makes Each Product Item a little wider
const style = {
    minWidth: '600px', 
}


function ProductList({ products }) {

    const [filteredProducts , setFilteredProducts] = useState(products);

    const showLaptopsAndTablets = () => {
        setFilteredProducts(products.filter(product => product.name === 'Laptop' || product.name === 'Tablet'));
    };

    const showSmartProducts = () => {
        setFilteredProducts(products.filter(product => product.name === 'Smartphone' || product.name === 'Smartwatch'));
    };

    const showWearables = () => {
        setFilteredProducts(products.filter(product => product.name === 'Smartwatch' || product.name === 'Headphones'));
    };

    // Function to show all products
    const showAllProducts = () => {
        setFilteredProducts(products);
    };

    return (
        <div className="products-container" style={style}>
            <h1>Products We Offer</h1>
            {filteredProducts.map((product) => (
                <ProductItem key={product.id} product={product}/>
            ))}
            <h2>Explore More Products</h2>
                <button className="products-button" onClick={showLaptopsAndTablets}>Laptops and Tablets</button>
                <button className="products-button" onClick={showSmartProducts}>Smart Products</button>
                <button className="products-button" onClick={showWearables}>Wearables</button>
                <button className="products-button" onClick={showAllProducts}>All Products</button>
        </div>
    )
}

export default ProductList;