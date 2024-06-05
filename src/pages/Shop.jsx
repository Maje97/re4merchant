import FetchAPI from "../hooks/fetchAPI.js";

export default function Shop() {
    const products = FetchAPI("https://666014e35425580055b211d0.mockapi.io/api/v1/Products");
    const stringifiedprod = JSON.stringify(products);
    localStorage.setItem('products', stringifiedprod);
    
    return(
        <main class="size-full grid grid-cols-3">
            <article class="row-start-1 row-span-3 col-start-2 col-span-2 place-self-center">
            </article>
            <aside class="bg-gray-400 col-start-1 row-span-3">
                <h1>Hej</h1>
            </aside>
        </main>
    );
}