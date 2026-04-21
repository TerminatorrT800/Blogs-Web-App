import { useState } from 'react';
import request from "./request";

const useDelete = (url) => {
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)

    const deleteData = async (id) => {
        setIsLoading(true)
        setError(null)

        try{
            const response = await request(`${url}/${id}`, {method:'DELETE'})
            setIsLoading(false)
            return response

        }catch(error){
            setError(error)
            setIsLoading(false)
        }
    }

    return {deleteData, isLoading, error}

}

export default useDelete;