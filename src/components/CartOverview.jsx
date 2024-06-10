import { useContext } from "react";
import { ProductArray } from "../App.js";


export default function CartOverview() {
    const products = useContext(ProductArray);
    const cart = JSON.parse(localStorage.getItem('cart'));
    const visualcart1 = cart.map(MakeCart);
    const visualcart2 = visualcart1.filter(FilterNull);

    function MakeCart(product, i) {
        if(!cart[i]) return product = null;
        else {
            return (
                product = products[i]
            )
        }
    }

    function FilterNull(product){
        return product !== null;
    }
       

    console.log(visualcart1);

    return (
        <ul class="size-10/12 flex flex-col">
            {visualcart2.map((product, index) => (
                <li key={index} class="box-border h-36 w-96 p-4 border-4 flex flex-row justify-between">
                    <img src={product?.image} alt={product?.title} class="object-contain max-w-28" />
                    <p>{product?.title}</p>
                    <p>{product?.price} Pesetas</p>
                </li>
            ))}
        </ul> 
    )
}