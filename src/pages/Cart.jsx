import React from "react";
import { Link } from "react-router-dom";
import CartOverview from "../components/CartOverview";

export default function Cart() {
        return (
            <main class="h-[70%] flex flex-col items-center justify-around">
                <h1 class="text-2xl">Cart</h1>
                <CartOverview />
                <button><Link to="/checkout">Continue to checkout</Link></button>
            </main>
        );
    
}

    