import { useState } from "react";
import usePost from "../usePost";
import { useNavigate } from 'react-router-dom';
const Create = () => {
    const [title, setTitle] = useState("")
    const [body, setBody] = useState("")
    const [author, setAuthor] = useState("Necko")

    const { postData, isLoading, error } = usePost("http://localhost:8000/blogs/")

    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()
        const blog = { title, body, author }
        console.log(`Initiated post ${isLoading}`)
        await postData(blog)
        if(!error){
            navigate('/', { replace: true })
        }
        console.log(`Finished post ${isLoading}, error: ${error}`)

    }

    return (
        <div className="create">
            <h2>Add a new blog</h2>
            <form onSubmit={(e) => handleSubmit(e)}>
                <label>Blog title</label>
                <input
                    type="text"
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <label>Blog body</label>
                <textarea
                    required
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                ></textarea>
                <label>Blog author</label>
                <select
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                >
                    <option value="Necko">Necko</option>
                    <option value="Nemanja">Nemanja</option>
                    <option value="Neca">Neca</option>
                </select>
                {isLoading ? <button type="submit" disabled>Adding blog...</button>
                    : <button type="submit">Add blog</button>}

            </form>
        </div>
    );
}

export default Create;
