import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartUpdater } from "../App.js"

export default function ProductCard({ products }) {
    const {cartAmount, setCartAmount} = useContext(CartUpdater);

    const AddtoCart = ({ index }) => {
            const NewCartAmount = cartAmount.map((value, i) => {
                if(i === index) {
                    return value+1
                } else {
                    return value
                }
            });
            setCartAmount(NewCartAmount);
            console.log(cartAmount);
    }

    if (!products) return null;
    else {
        return (
        <ul class="size-10/12 flex flex-row flex-wrap">
                {products.map((product, index) => (
                    <li key={index} class="box-border h-52 w-40 p-4 border-4 flex flex-col justify-center">
                        <Link to={`/product/${index}`}>
                            <img src={product.image} alt={product.title} class="object-contain size-max" />
                            <p>{product.title}</p>
                            <p>{product.price} Pesetas</p>
                        </Link>
                        <button onClick={() => AddtoCart({index})} class="text-xs box-border size-fit p-2 border-solid rounded-3xl border-2 border-stone-500 bg-stone-300">Add to cart</button>
                    </li>
                ))}
            </ul> 
        );
    }
    
}