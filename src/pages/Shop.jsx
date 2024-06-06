import FetchAPI from "../hooks/fetchAPI.js";
import ProductCard from "../components/ProductCard.jsx";

export default function Shop() {
    const { data } = FetchAPI("https://666014e35425580055b211d0.mockapi.io/api/v1/Products"); //Fetching products from API.

    return(
        <main class="size-full grid grid-cols-3">
            <article class="row-start-1 row-span-3 col-start-2 col-span-2 place-self-center">
                <h1>All products</h1>
                <ProductCard products={ data }/>
            </article>
            <aside class="bg-gray-400 col-start-1 row-span-3">
                <h1>Hej</h1>
            </aside>
        </main>
    );
}