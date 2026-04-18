import { useParams } from "react-router-dom";
import useFetch from "../useFetch";
import { useState } from "react";

const BlogDetails = () => {

    const { id } = useParams()

    const [url, setUrl] = useState('http://localhost:8000/blogs/' + id)
    const { data: blog, isPending, error } = useFetch(url)



    return (
        <div className="blog-details">
            <h2>Blog details</h2>
            {error && <div className='message'>Greska pri ucitavanju podataka</div>}
            {isPending && !error && <div className='message'>Loading...</div>}
            {blog && (<article className="blog-details">
                <h2>{blog.title}</h2>
                <p>Writen by {blog.author}</p>
                <div>{blog.body}</div>
            </article>)}


        </div>
    );
}

export default BlogDetails;