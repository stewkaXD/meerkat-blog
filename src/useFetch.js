import { useState, useEffect } from "react";

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const abortCont = new AbortController();

        setTimeout(() => {
            fetch(url)
                .then(res => {
                    if(!res.ok) { // throw error if server returned error
                        throw Error('Could not fetch the data!')
                    }
                    return res.json();
                })
                .then(data => {
                    setData(data);
                    setIsPending(false); // after data are shown, take down loading screen
                    setError(null);
                })
                .catch((err) => {
                    if (err.name === 'AbortError') {
                        console.log('fetch aborted');
                    } else {
                        setError(err.message);
                        setIsPending(false); // make Loading... go away    
                    }
                });
        }, 2000);

        return () => abortCont.abort();
    }, [url]);

    return {data, isPending, error};
}

export default useFetch;