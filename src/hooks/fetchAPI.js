import { useState, useEffect } from "react";

export default function FetchAPI(URL) {
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(URL);
            const jsonData = await response.json();
            setData(jsonData);
        }
        fetchData();
    },[URL]);

    return { data };

    /*fetch('https://666014e35425580055b211d0.mockapi.io/api/v1/Products')
        .then(res => res.json())
        .then(data => console.log(data))
        .catch(error => console.log('ERROR')) */
}
