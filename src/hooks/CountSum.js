let amount = JSON.parse(localStorage.getItem('amount'));
let cart2 = JSON.parse(localStorage.getItem('cartitems'));

export default function SumofCart() {
    let sum = 0;

    for(let i=0; i<amount.length; i++) {
        sum += amount[i] * cart2[i].price;
    }

    localStorage.setItem('sum', JSON.stringify(sum));
}