
//Example of inline styling with React
const style = {
    backgroundColor: 'lightgray',
    border: '1px solid black',
    borderRadius: '15px',
    margin: '20px',
    padding: '20px',
}

function ProductItem({ product }) {
    return (
        <div className="product-item" style={style}>
            <h2>{product.name}</h2>
            <p>{product.price}</p>
            <p>{product.description}</p>
            <img src={product.image} alt={product.name}/>
        </div>
    )
}

export default ProductItem;