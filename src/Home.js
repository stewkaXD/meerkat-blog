import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {

    const [blogs, setBlogs] = useState([
        { title: 'First blog ever!', body: 'lorem ipsum idk', author: 'Mario', id: 1 },
        { title: 'Web dev top tips', body: 'lorem ipsum idk too', author: 'Mario', id: 2 },
        { title: 'School is so boring', body: 'lorem ipsum lmao', author: 'Luigi', id: 3 }
    ]);

    const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id);
        setBlogs(newBlogs)
    }

    useEffect(() => {
        console.log('use effect is ran');
        console.log(blogs);
    });
    
    return (
        <div className="home">
            <BlogList blogs={blogs} title="All Blogs!" handleDelete={handleDelete}/>
        </div>
    );
}
 
export default Home;