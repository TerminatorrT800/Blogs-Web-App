import { useState, useEffect } from 'react';
import request from './request.js';

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        const controller = new AbortController();
        const fetchData = async () => {
            try {
                const data = await request(url, { signal: controller.signal })
                setData(data)
                setIsPending(false)
                setError(null)
            } catch (error) {
                if (error.name === 'AbortError') { console.log("Fetch aborted") }
                else {
                    setError(error)
                    setIsPending(false)
                }
            }
        }
        fetchData()
        return () => controller.abort()

    }, [url])

    return { data, isPending, error }
}

export default useFetch;