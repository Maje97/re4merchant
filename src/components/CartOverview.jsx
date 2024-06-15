import { useState, useEffect } from "react";
import useCountCart from "../hooks/useCountCart.js";

export default function CartOverview() {
    const { amount, cart2 } = useCountCart();
    const [amountstate, setAmount] = useState(amount);
    let sum = 0;

    function handleClick(index) {
        const nextAmount = amountstate.map((value, i) => {
            if(i !== index) {
                return value;
            } else {
                return value +1;
            }
        });
        setAmount(nextAmount);
    }

    function handleDecrease(index) {
        const nextAmount = amountstate.map((value, i) => {
            if(i !== index) {
                return value;
            } else {
                if(value < 1) return 0;
                else return value -1;
            }
        });
        setAmount(nextAmount);
    }

    useEffect(() => {
        localStorage.setItem('amount', JSON.stringify(amountstate));
    },[amountstate])

    function SumofCart() {
        for(let i=0; i<amount.length; i++) {
            sum += amountstate[i] * cart2[i].price;
        }
        localStorage.setItem('sum', JSON.stringify(sum));
    }
    SumofCart();

    return (
        <article class="overflow-y-auto max-h-screen">
            <ul class="size-10/12 flex flex-col">
                {cart2.map((product, index) => (
                    <li key={index} class="box-border h-36 w-96 p-4 border-4 flex flex-row justify-between">
                        <img src={product?.image} alt={product?.title} class="object-contain max-w-28" />
                        <div class="flex flex-col justify-center">
                            <p>{product?.title}</p>
                            <p>{product?.price} Pesetas</p>
                        </div>
                        <div class="flex flex-col justify-center">
                            <button onClick={() => handleClick(index)}>+</button>
                            <p>{amountstate[index]}</p>
                            <button onClick={() => handleDecrease(index)}>-</button>
                        </div>
                    </li>
                ))}
            </ul> 
            <p>Total cost: {sum}</p>
        </article>
    )
}