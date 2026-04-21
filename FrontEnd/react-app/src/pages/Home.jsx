import { useState } from 'react';
import BlogList from './BlogsList';
import { useLoaderData, useNavigation } from 'react-router-dom';
const Home = () => {

    const [url, setUrl] = useState('http://localhost:8000/blogs')

    const blogs = useLoaderData()
    const navigation = useNavigation()

    const isPending = navigation.state === 'loading'

    return (
        <div className="home">
            {isPending && <div className='message'>Loading...</div>}


            {blogs && !isPending && (
                <>
                    <BlogList blogs={blogs} title="All blogs!" />
                    <BlogList
                        blogs={blogs.filter(blog => blog.author === "Neca")}
                        ttile="Neca's Blogs" />
                </>
            )}

        </div>
    );
}


export default Home;
