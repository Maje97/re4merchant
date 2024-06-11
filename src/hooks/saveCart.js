export default function SaveCart({ index }) {
    let cartarray = [];
    let localCart = localStorage.getItem('cart');

    if(!localCart) {
        cartarray[index] = 1;
        localStorage.setItem('cart', JSON.stringify(cartarray));
    } else {
        let items = JSON.parse(localStorage.getItem('cart'));
        if(!items[index]) items[index] = 1; else items[index] ++;
        localStorage.setItem('cart', JSON.stringify(items));
    }

    console.log(JSON.parse(localStorage.getItem('cart')));
}