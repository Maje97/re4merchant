import { useState } from "react";
let amount = JSON.parse(localStorage.getItem('amount'));

function HandleIncrease(index) {
    const [amountstate, setAmount] = useState(amount);
    const nextAmount = amountstate.map((value, i) => {
        if(i !== index) {
            return value;
        } else {
            return value + 1;
        }
    });
    setAmount(nextAmount);
    localStorage.setItem('amount', JSON.stringify(amountstate));
}

function HandleDecrease(index) {
    const [amountstate, setAmount] = useState(amount);
    const nextAmount = amountstate.map((value, i) => {
        if(i !== index) {
            return value;
        } else {
            return value - 1;
        }
    });
    setAmount(nextAmount);
    localStorage.setItem('amount', JSON.stringify(amountstate));
}

export { HandleIncrease, HandleDecrease}