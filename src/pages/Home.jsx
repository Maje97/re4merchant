import React from "react";
import homeimg from "../images/game.capcom.manual.re4.jpg";

export default function Home() {
    return (
        <main class="size-full">
            <article class="overflow-y-auto h-full">
                <img class="object-cover h-full" src={homeimg} alt="The merchant ready to sell" />
            </article>
        </main>
    );
}