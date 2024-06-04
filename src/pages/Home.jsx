import React from "react";

export default function Home() {
    return (
        <main class="size-full grid grid-cols-3">
            <section class="row-start-1 row-span-1 col-span-2 place-self-center">
                <h1>Home</h1>
            </section>
            <article class="row-start-2 row-span-2 col-span-2 place-self-center">
                <h1>Hej</h1>
            </article>
            <aside class="bg-gray-400 col-start-3 row-span-3">
                <h1>Hej</h1>
            </aside>
        </main>
    );
}