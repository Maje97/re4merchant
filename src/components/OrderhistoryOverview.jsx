
export default function OrderhistoryOverview() {
    const orders = JSON.parse(localStorage.getItem('orders'));

    console.log(orders.cart);


    if(!orders[1]) {
        return (
            <main class="size-full flex flex-col items-center">
                <p>{orders.date.toString()}</p>
                <div class="flex flex-row">
                    <ul class="p-2">
                        {orders.cart.map((item, index) => (
                                <li key={index}>{item.title}</li>
                        ))}
                    </ul>
                    <ul class="p-2">
                        {orders.amount.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                </div>
                <p>{orders.sum} Pesetas</p>
            </main>
        )
    } else {
        return (
            <main class="size-full flex flex-col items-center">
                <ul>
                    {orders.map((order, index) => (
                        <li key={index}>
                            <p>{order.date.toString()}</p>
                        <div class="flex flex-row">
                            <ul class="p-2">
                                {order.cart.map((item, index) => (
                                        <li key={index}>{item.title}</li>
                                ))}
                            </ul>
                            <ul class="p-2">
                                {order.amount.map((item, index) => (
                                    <li key={index}>{item}</li>
                                ))}
                            </ul>
                        </div>
                        <p>{order.sum} Pesetas</p>
                    </li>
                    ))}
                </ul>
            </main>
        )
    }
}