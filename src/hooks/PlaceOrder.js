
export default function PlaceOrder() {
    const PersonalInfo = JSON.parse(localStorage.getItem('userinfo'));
    const cart = JSON.parse(localStorage.getItem('cartitems'));
    const amount = JSON.parse(localStorage.getItem('amount'));
    const sum = JSON.parse(localStorage.getItem('sum'));
    const orders = JSON.parse(localStorage.getItem('orders'));

    const date = new Date();
    const a = date.getFullYear();
    const b = date.getMonth();
    const c = date.getDate();
    const orderdate = [a, b, c];

    if(PersonalInfo && cart && amount && sum) {
        orderdate.push(cart);
        orderdate.push(amount);
        orderdate.push(sum);
    } else {
        return alert("Something is missing!");
    }

    if(!orders){
        localStorage.clear();
        localStorage.setItem('orders', JSON.stringify(orderdate));
        return alert("Your first order has been placed!")
    } else {
        localStorage.clear();
        orders.push(orderdate);
        localStorage.setItem('orders', JSON.stringify(orders));
        return alert("Your order has been placed!")
    }
}