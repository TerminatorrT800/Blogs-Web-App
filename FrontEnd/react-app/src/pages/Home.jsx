import { useState } from 'react'
import BlogList from '../BlogsList';
import useFetch from '../useFetch';
const Home = () => {

    const [url, setUrl] = useState ('http://localhost:8000/blogs')

    const {data: blogs, isPending, error} = useFetch(url)



    return (
        <div className="home">
            {error && <div className='message'>Greska pri ucitavanju podataka</div>}
            {isPending && !error && <div className='message'>Loading...</div>}
            {blogs && <BlogList {...{ blogs, title: 'All blogs!' }} />}
            {blogs && <BlogList {...{ blogs: blogs.filter(blog => blog.author === "Neca"), title: "Neca's blogs!" }} />}
        </div>
    );
}


export default Home;
