import ProductCard from "../components/ProductCard.jsx";
import { useContext } from "react";
import { ProductArray } from "../App.js";

export default function Shop() {
    const products = useContext(ProductArray);

    return(
        <main class="size-full grid grid-cols-3">
            <article class="overflow-y-scroll max-h-[80%] row-start-1 row-span-3 col-start-2 col-span-2">
                <h1>All products</h1>
                <ProductCard products={products} />
            </article>
            <aside class="bg-gray-400 col-start-1 row-span-3">
                <h1>Hej</h1>
            </aside>
        </main>
    );
}