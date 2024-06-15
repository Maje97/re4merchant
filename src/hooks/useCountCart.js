import { useContext } from "react";
import { ProductArray } from "../App.js";

export default function useCountCart() {
    const products = useContext(ProductArray);
    const cart = JSON.parse(localStorage.getItem('cart'));
    let amount = JSON.parse(localStorage.getItem('amount'));
    const cart1 = cart.map(MakeCart);
    let cart2 = JSON.parse(localStorage.getItem('cartitems'));

    if(!cart) {
        return null;
    }

    if(!amount) {
        let newamount = cart.filter(FilterNull);
        localStorage.setItem('amount', JSON.stringify(newamount));
        amount = JSON.parse(localStorage.getItem('amount'));
    }

    if(!cart2) {
        let newcart2 = cart1.filter(FilterNull);
        localStorage.setItem('cartitems', JSON.stringify(newcart2));
        cart2 = JSON.parse(localStorage.getItem('cartitems'));
    }

    function MakeCart(product, i) {
        if(!cart[i]) return product = null;
        else {
            return (
                product = products[i]
            )
        }
    }

    function FilterNull(value){
        return value !== null;
    }

    console.log(amount);
    console.log(cart2);

    return { amount, cart2 };
}