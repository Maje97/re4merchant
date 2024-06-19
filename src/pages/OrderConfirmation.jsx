export default function OrderConfirmation() {
    const cart = JSON.parse(localStorage.getItem('cartitems'));
    const amount = JSON.parse(localStorage.getItem('amount'));
    const sum = JSON.parse(localStorage.getItem('sum'));
    const userinfo = JSON.parse(localStorage.getItem('userinfo'));

    return (
        <main class="size-full flex flex-col items-center justify-around">
            <h1 class="text-2xl">Thank you for ordering!</h1>
            <div class="overflow-y-auto max-h-[60%] flex flex-col items-center">
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
            </div>
            <p>Total cost: {sum} Pesetas</p>
            <div class="flex flex-col items-center">
                    <p>{userinfo.name}</p>
                    <p>{userinfo.email}</p>
                    <p>{userinfo.adress}</p>
                    <p>{userinfo.postalcode}</p>
                    <p>{userinfo.city}</p>
            </div>
        </main>
    );
}