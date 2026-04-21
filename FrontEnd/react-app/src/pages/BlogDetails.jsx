import { useParams } from "react-router-dom";
import useDelete from "../useDelete";
import { useNavigate, useLoaderData } from "react-router-dom";
import NotFound from "./NotFound";
const API_URL = import.meta.env.VITE_API_URL



const BlogDetails = () => {
    const navigate = useNavigate();
    const isPending = navigate.state === 'loading'

    const { id } = useParams()

    const blog  = useLoaderData()

    const { deleteData, isLoading, error: deleteError } = useDelete(`${API_URL}/blogs`)

    const handleClick = async () => {
        await deleteData(id)
        while (isLoading) { }
        if (deleteError) {
            console.log(`Error deleting blog: ${deleteError}`)
            return
        }
        navigate('/', { replace: true })
    }


    if (!blog) {
        return <NotFound></NotFound>
    }

    return (
        <div className="blog-details">
            <h2>Blog details</h2>
            {isPending &&  <div className='message'>Loading...</div>}
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