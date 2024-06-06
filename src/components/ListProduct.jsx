
export default function ListProduct() {
    let productListOne = localStorage.getItem('products');
    let productList = JSON.parse(productListOne);

    if (!productList) return null;

     return (
        <ul>
        {productList.map((product, index) => (
            <li key={index}>
            {product.title}: {product.price}
            </li>
        ))}
        </ul>
    );
};