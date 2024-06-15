import { useState, useEffect } from "react";

export default function useFetchAPI(URL) {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            const response = await fetch(URL);
            const jsonData = await response.json();
            setData(jsonData);
            setIsLoading(false);
        }
        fetchData();
    },[URL]);

    return { data, isLoading };
}
