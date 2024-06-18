import React from "react";
import homeimg from "../images/game.capcom.manual.re4.jpg";

export default function Home() {
    return (
        <main class="h-full w-screen bg-black">
            <article class="overflow-hidden grid-cols-1 grid-rows-1 place-items-center size-full">
                <img class="h-full object-cover" src={homeimg} alt="The merchant ready to sell" />
            </article>
        </main>
    );
}