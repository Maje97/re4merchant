import React from "react";
import CheckoutOverview from "../components/CheckoutOverview";
import CheckoutForm from "../components/CheckoutForm";
import PlaceOrder from "../hooks/PlaceOrder";

export default function Checkout() {
    return (
        <main class="size-full flex flex-col items-center justify-around">
            <h1 class="text-2xl">Checkout</h1>
            <CheckoutOverview />
            <CheckoutForm />
            <button onClick={() => PlaceOrder()}>Place order</button>
        </main>
    );
}