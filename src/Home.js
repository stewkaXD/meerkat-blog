import { useState } from "react";

const Home = () => {

    const [blogs, setBlogs] = useState([
        { title: 'First blog ever!', body: 'lorem ipsum idk', author: 'Mario', id: 1 },
        { title: 'Web dev top tips', body: 'lorem ipsum idk too', author: 'Yoshi', id: 2 },
        { title: 'School is so boring', body: 'lorem ipsum lmao', author: 'Luigi', id: 3 }
    ]);
    return ( 
        <div className="home">
            {blogs.map((blog) =>(
                <div className="blog-preview" key={blog.id}>
                    <h2>{ blog.title }</h2>
                    <p>Written by { blog.author }</p>
                </div>
            ))}
        </div>
     );
}
 
export default Home;