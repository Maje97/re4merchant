import React from "react";
import { Link } from "react-router-dom";
import CartOverview from "../components/CartOverview";

export default function Cart() {
    if(!localStorage.getItem('cartitems')) {
        return (
            <main class="h-[70%] flex flex-col items-center">
                <h1 class="text-2xl">Cart</h1>
                <p>Empty cart</p>
            </main>
        );
    } else {
        return (
            <main class="h-[70%] flex flex-col items-center justify-around">
                <h1 class="text-2xl">Cart</h1>
                <CartOverview />
                <button><Link to="/checkout">Continue to checkout</Link></button>
            </main>
        );
    }
}

    