import useCountCart from "../hooks/useCountCart.js";

export default function CartOverview() {
    const { amount, setAmount, cart } = useCountCart();
    let sum = 0;

    function handleClick(index) {
        const nextAmount = amount.map((value, i) => {
            if(i !== index) {
                return value;
            } else {
                return value +1;
            }
        });
        setAmount(nextAmount);
        localStorage.setItem('amount', JSON.stringify(nextAmount));
    }

    function handleDecrease(index) {
        const nextAmount = amount.map((value, i) => {
            if(i !== index) {
                return value;
            } else {
                if(value < 1) return 0;
                else return value -1;
            }
        });
        setAmount(nextAmount);
        localStorage.setItem('amount', JSON.stringify(nextAmount));
    }

    function SumofCart() {
        for(let i=0; i<amount.length; i++) {
            sum += amount[i] * cart[i].price;
        }
        localStorage.setItem('sum', JSON.stringify(sum));
    }
    SumofCart();

    return (
        <article class="max-h-[80%]">
            <ul class="max-h-[90%] w-full overflow-y-auto size-10/12 flex flex-col">
                {cart.map((product, index) => (
                    <li key={index} class="box-border h-36 w-96 p-4 border-4 flex flex-row justify-between">
                        <img src={product?.image} alt={product?.title} class="object-contain max-w-28" />
                        <div class="flex flex-col justify-center">
                            <p>{product?.title}</p>
                            <p>{product?.price} Pesetas</p>
                        </div>
                        <div class="flex flex-col justify-center">
                            <button onClick={() => handleClick(index)}>+</button>
                            <p>{amount[index]}</p>
                            <button onClick={() => handleDecrease(index)}>-</button>
                        </div>
                    </li>
                ))}
            </ul> 
            <p>Total cost: {sum}</p>
        </article>
    )
}