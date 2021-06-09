function Products() {
    const products = ["item1", "item2", "item3"];
    const listProducts = products.map((product) => <li key={product.toString}>{product}</li>);
    return (
        <div>
            <h2>List of Products</h2>
            <ul>{listProducts}</ul>
        </div>
    );
}

export default Products;