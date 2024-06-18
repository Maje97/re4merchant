import React from "react";
import { Link } from "react-router-dom";
import CheckoutOverview from "../components/CheckoutOverview";
import CheckoutForm from "../components/CheckoutForm";

export default function Checkout() {
    return (
        <main class="size-full flex flex-col items-center justify-around">
            <h1 class="text-2xl">Checkout</h1>
            <div class="flex flex-col md:flex-row items-center">
                <CheckoutOverview />
                <CheckoutForm />
            </div>
            <button class="self-center text-s box-border size-fit p-2 border-solid rounded-3xl border-2 border-stone-500 bg-stone-300 hover:animate-bounce"><Link to="/orderconfirmation">Place order</Link></button>
        </main>
    );
}