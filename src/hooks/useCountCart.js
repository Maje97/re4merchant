import { useContext, useEffect, useState } from "react";
import { ProductArray, CartUpdater } from "../App.js";

export default function useCountCart() {
    const products = useContext(ProductArray);
    const { cartAmount } = useContext(CartUpdater);
    const [amount, setAmount] = useState([]);
    const [cart, setCart] = useState([]);
        
    useEffect(() => {
        const cart1 = cartAmount.map((product, i) => {
            if(cartAmount[i] === 0) return product = null;
            else {
                return (
                    product = products[i]
                )
            }
        });
        const newcart = cart1.filter(
            (value) => { return value !== null; }
        );
        setCart(newcart);
        localStorage.setItem('cartitems', JSON.stringify(newcart));
        console.log("useeffect cart");
    }, [cartAmount, products])
  
    useEffect(() => {
        const newamount = cartAmount.filter(
            (value) => { return value !== 0; }
        );
        setAmount(newamount);
        localStorage.setItem('amount', JSON.stringify(newamount));
        console.log("useeffect amount");
    }, [cartAmount])

    return { amount, setAmount, cart };
}