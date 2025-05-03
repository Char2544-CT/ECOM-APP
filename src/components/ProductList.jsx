import ProductItem from "./ProductItem";

//Makes Each Product Item a little wider
const style = {
    minWidth: '600px', 
}

function ProductList({ products }) {

    return (
        <div className="products-container" style={style}>
            <h1>Products We Offer</h1>
            {products.map((product) => (
                <ProductItem key={product.id} product={product}/>
            ))}
        </div>
    )
}

export default ProductList;