import { useParams } from "react-router-dom";
import useFetch from "../useFetch";
import { useState } from "react";
import useDelete from "../useDelete";
import { useNavigate } from "react-router-dom";
import NotFound from "./NotFound";


const BlogDetails = () => {
    const navigate = useNavigate();
    const { id } = useParams()

    const [url, setUrl] = useState('http://localhost:8000/blogs')
    const { data: blog, isPending, error } = useFetch(`${url}/${id}`)

    const { deleteData, isLoading, error: deleteError } = useDelete(url)

    const handleClick = async () => {
        await deleteData(id)
        while (isLoading) { }
        if (deleteError) {
            console.log(`Error deleting blog: ${deleteError}`)
            return
        }
        navigate('/', { replace: true })
    }


    if (!blog && !isPending && error) {
        return <NotFound></NotFound>
    }

    return (
        <div className="blog-details">
            <h2>Blog details</h2>
            {error && <div className='message'>Greska pri ucitavanju podataka</div>}
            {isPending && !error && <div className='message'>Loading...</div>}
            {blog && (<article>
                <h2>{blog.title}</h2>
                <p>Writen by {blog.author}</p>
                <div>{blog.body}</div>
                {isLoading && !deleteError && <div className='message'>Deleting...</div>}
                {!isLoading ? <button onClick={() => handleClick()}>Delete</button> : <button disabled>Deleting...</button>}
            </article>)}
        </div>
    );
}

export default BlogDetails;