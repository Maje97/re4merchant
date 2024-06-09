import { useParams } from "react-router-dom";
import { useContext } from "react";
import { ProductArray } from "../App.js";

export default function Product() {
    const { index } = useParams();
    const products = useContext(ProductArray);

    const check = (a) => {
        console.log(a);
    }

    return(
        <main class="size-full grid grid-cols-3">
            <article class="row-start-1 row-span-3 col-start-2 col-span-2 place-self-center flex flex-col ">
                <h1 class="self-center p-8 text-4xl font-bold underline">{products[index].title}</h1>
                <img src={products[index].image} alt={products[index].title} class="self-center max-w-3xl hover:scale-[2.0]" />
                <p class="self-center box-content max-w-96 p-4">{products[index].description}</p>
                <button onClick={() => check(index)} class="self-center text-s box-border size-fit p-2 border-solid rounded-3xl border-2 border-stone-500 bg-stone-300 hover:animate-bounce">Add to cart</button>
            </article>
            <aside class="bg-gray-400 col-start-1 row-span-3">
                <h1>Hej</h1>
            </aside>
        </main>
    );
}