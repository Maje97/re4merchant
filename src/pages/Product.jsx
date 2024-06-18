import { useParams } from "react-router-dom";
import { useContext } from "react";
import { ProductArray } from "../App.js";
import { CartUpdater } from "../App.js";

export default function Product() {
    const { index } = useParams();
    const products = useContext(ProductArray);
    const {cartAmount, setCartAmount} = useContext(CartUpdater);

    const AddtoCart = ({ index }) => {
        let a = Number(index);
        const NewCartAmount = cartAmount.map((value, i) => {
            if(i === a) {
                return value+=1;
            } else {
                return value;
            }
        });
        setCartAmount(NewCartAmount);
        console.log(cartAmount);
    }

    return(
        <main class="h-[70%]">
            <article class="flex flex-col">
                <h1 class="self-center p-8 text-4xl font-bold underline">{products[index].title}</h1>
                <img src={products[index].image} alt={products[index].title} class="self-center max-w-3xl hover:scale-[2.0]" />
                <p class="self-center box-content max-w-96 p-4">{products[index].description}</p>
                <button onClick={() => AddtoCart({ index })} class="self-center text-s box-border size-fit p-2 border-solid rounded-3xl border-2 border-stone-500 bg-stone-300 active:bg-stone-500">Add to cart</button>
            </article>
        </main>
    );
}