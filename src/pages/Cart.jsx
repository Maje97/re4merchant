import React from "react";
import CartOverview from "../components/CartOverview";

export default function Cart() {
    return (
        <main class="size-full grid grid-cols-3">
            <article class="overflow-y-scroll max-h-screen row-start-1 row-span-2 col-span-2 place-self-center">
                <h1>Cart</h1>
                <CartOverview />
            </article>
            <aside class="bg-gray-400 col-start-3 row-span-3">
                <h1>Hej</h1>
            </aside>
        </main>
    );
}