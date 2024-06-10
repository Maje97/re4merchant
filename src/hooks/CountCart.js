import { useState, useEffect } from "react";

export default function CountCart() {
    const [items, setItems] = useState(null);

    useEffect(() => {
        const counter = {};
        let CountArray = JSON.parse(localStorage.getItem('cart'));
        CountArray.forEach(ele => {
            if (counter[ele]) {
                counter[ele] += 1;
            } else {
                counter[ele] = 1;
            }
        });
        setItems(counter);
    },[])

    return { items };
}