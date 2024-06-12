import React from "react";
import OrderhistoryOverview from "../components/OrderhistoryOverview";

export default function Account() {
    if(!localStorage.getItem('orders')) {
        return (
            <main class="flex flex-col md:flex-row items-center">
                <h1 class="text-2xl">Order history</h1>
                <p>No order history</p>
            </main>
        );
    } else {
        return (
            <main class="flex flex-col md:flex-row items-center justify-around">
                <h1>Account</h1>
                <OrderhistoryOverview />
            </main>
        );
    }  
}