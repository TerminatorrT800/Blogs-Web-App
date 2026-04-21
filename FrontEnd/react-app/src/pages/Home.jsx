import { useState } from 'react';
import BlogList from './BlogsList';
import { useLoaderData } from 'react-router-dom';
const Home = () => {

    const [url, setUrl] = useState ('http://localhost:8000/blogs')
    const controller = new AbortController();

    const blogs = useLoaderData()

    
    return (
        <div className="home">
            {/* {error && <div className='message'>Greska pri ucitavanju podataka</div>}
            {isPending && !error && <div className='message'>Loading...</div>} */}
            {blogs && <BlogList {...{ blogs, title: 'All blogs!' }} />}
            {blogs && <BlogList {...{ blogs: blogs.filter(blog => blog.author === "Neca"), title: "Neca's blogs!" }} />}
        </div>
    );
}


export default Home;
