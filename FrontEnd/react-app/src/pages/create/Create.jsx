import { useState } from "react";
import { Form, useActionData } from 'react-router-dom';
const Create = () => {
    const [title, setTitle] = useState("")
    const [body, setBody] = useState("")
    const [author, setAuthor] = useState("Necko")

    const data = useActionData()

    return (
        <div className="create">
            <h2>Add a new blog</h2>
            <Form method="POST" action="/create">
                <label>Blog title</label>
                <input
                    name="blogTitle"
                    type="text"
                    required
                />
                <label>Blog body</label>
                <textarea
                    name="blogBody"
                    required
                ></textarea>
                <label>Blog author</label>
                <select
                    name="blogAuthor"
                    value={author}
                    onChange={(e)=>setAuthor(e.target.value)}
                >
                    <option value="Necko">Necko</option>
                    <option value="Nemanja">Nemanja</option>
                    <option value="Neca">Neca</option>
                </select>
                <button type="submit">Add blog</button>
                {data && data.error && <p>{data.error}</p>}
            </Form>
        </div>
    );
}

export default Create;
