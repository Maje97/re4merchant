
export default function usePlaceOrder() {
    const PersonalInfo = JSON.parse(localStorage.getItem('userinfo'));
    const cart = JSON.parse(localStorage.getItem('cartitems'));
    const amount = JSON.parse(localStorage.getItem('amount'));
    const sum = JSON.parse(localStorage.getItem('sum'));
    const orders = JSON.parse(localStorage.getItem('orders'));

    const date = new Date();
    const a = date.getFullYear();
    const b = date.getMonth() +1;
    const c = date.getDate();
    const orderdate = [a, b, c];
    let orderobj = [{
        date: orderdate,
        cart: cart,
        amount: amount,
        sum: sum
    }]

    if(PersonalInfo && cart && amount && sum) {
        if(!orders){
            localStorage.clear();
            localStorage.setItem('orders', JSON.stringify(orderobj));
            return [alert("Your first order has been placed!")];
        } else {
            orders.push(orderobj);
            localStorage.clear();
            localStorage.setItem('orders', JSON.stringify(orders));
            return alert("Your order has been placed!")
        }
    } else {
        return alert("Adress required before placing order!");
    }
}