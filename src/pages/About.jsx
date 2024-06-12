import React from "react";

export default function About() {
    return (
        <main class="size-full grid grid-cols-3">
            <section class="row-start-1 row-span-1 col-span-3 place-self-center">
                <h1 class="text-2xl">About</h1>
                <p>The webshop project.</p>
            </section>
            <article class="overflow-y-scroll max-h-screen row-start-2 row-span-2 col-span-3 place-self-center">
                <h2 class="text-xl">A bigger project than I thought.</h2>
                <p>This page will not have much content since I missjudged the size of this project.</p>
            </article>
        </main>
    );
}