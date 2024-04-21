import { useState, useEffect } from "react";

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // console.log('use effect ran');

        const abortCont = new AbortController();

        setTimeout(() => {
            fetch(url, {signal: abortCont.signal})
                .then(res => {
                    if(!res.ok){
                        throw Error('Couldnt fetch data for that resource.');
                    }
                    else if(res.ok){
                        console.log('Data fetched successfully!');;
                        setIsPending(true);
                    }
                    return res.json();
                })
                .then(data => {
                    setData(data);
                    setIsPending(false);
                    setError(null);
                })
                .catch(err => {
                    if (err.name === 'AbortError') {
                        console.log('Abort Fetched.');
                    } else {
                        setIsPending(false);
                        setError(err.message);
                    }
                    
                })
            }, 1200);

            return() => abortCont.abort();
      }, [url]);

      return {data, isPending, error}
}

export default useFetch;