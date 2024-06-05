import FetchAPI from "./fetchAPI.js";

export default function SaveProducts() {
    if(localStorage.getItem('products') && true) return localStorage.getItem('products');

    let productsarray = FetchAPI("https://666014e35425580055b211d0.mockapi.io/api/v1/Products");

    let stringedproducts = JSON.stringify(productsarray);

    localStorage.setItem('products', stringedproducts);
}