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
}
