import React from "react";
import logo from "../images/Merchant_Resident_Evil_4_remake.png";

export default function About() {
    return (
        <main class="size-full grid grid-cols-3">
            <section class="row-start-1 row-span-1 col-start-2 col-span-1 place-self-center">
                <h1 class="text-2xl">About</h1>
                <p>The webshop project.</p>
            </section>
            <article class="overflow-y-auto max-h-screen p-4 row-start-2 row-span-2 col-start-1 col-span-3 place-self-start md:col-start-2 md:col-span-2">
                <h2 class="text-xl p-4">A webshop inspired by Resident Evil 4 remake.</h2>
                <p class="p-2">
                    This page was made for the courses "Frontend ramverk/bibliotek" and "Javascript avancerat" 
                    that are part of the program "Fullstack-utvecklare" at Företagsuniversitetet. 
                </p>
                <p class="p-2">
                    The content of this webshop, the products and images, are from the Capcom game Resident Evil 4 remake.
                    Specifically the character in the game only called "The Merchant". It is this character that functions as
                    a shop in game and it is some of the wares he sells that are featured on this website.
                </p>
                <p class="p-2">
                    All assets except for the once referenced in the footer are owned by Capcom and only used for educational purposes
                    in this application.
                </p>
            </article>
            <aside class="row-start-1 row-span-1 col-start-1 col-span-1 place-self-center md:row-span-3">
                <img class="place-self-end max-h-36 object-contain md:max-h-full" src={logo} alt="logo" />
            </aside>
        </main>
    );
}