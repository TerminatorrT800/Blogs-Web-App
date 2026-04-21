import { useState } from 'react';
import request from './request.js';

const usePost = (url) => {
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)

    const postData = async (body) => {
        setIsLoading(true)
        setError(null)

        try {
            const data = await request(url, { method: "POST", body })
            
            setIsLoading(false)
            return data;


        } catch (error) {
            setError(error)
            setIsLoading(false)
        }
    }

    return { postData, isLoading, error }
}

export default usePost;