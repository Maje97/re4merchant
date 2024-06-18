import ProductCard from "../components/ProductCard.jsx";
import { useContext } from "react";
import { ProductArray } from "../App.js";

export default function Shop() {
    const products = useContext(ProductArray);

    return(
        <main class="h-[60%] flex flex-col md:h-[70%]">
            <article class="overflow-y-scroll max-h-full">
                <h1 class="text-2xl">All products</h1>
                <ProductCard products={products} />
            </article>
        </main>
    );
}