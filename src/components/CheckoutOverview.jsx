
export default function CheckoutOverview() {
    const cart = JSON.parse(localStorage.getItem('cartitems'));
    const amount = JSON.parse(localStorage.getItem('amount'));
    const sum = JSON.parse(localStorage.getItem('sum'));

    return (
        <article class="overflow-y-auto max-h-screen">
            <h1>Order summary</h1>
            <ul class="size-10/12 flex flex-col">
                {cart.map((product, index) => (
                    <li key={index} class="box-border h-36 w-96 p-4 border-4 flex flex-row justify-between">
                        <img src={product?.image} alt={product?.title} class="object-contain max-w-28" />
                        <div class="flex flex-col justify-center">
                            <p>{product?.title}</p>
                            <p>{product?.price} Pesetas</p>
                            <p>Amount: {amount[index]}</p>
                        </div>
                    </li>
                ))}
            </ul> 
            <p>Total cost: {sum}</p>
        </article>
    )
}