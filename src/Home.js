import { useState } from "react";
import BlogList from "./BlogList";

const Home = () => {

    const [blogs, setBlogs] = useState([
        { title: 'First blog ever!', body: 'lorem ipsum idk', author: 'Mario', id: 1 },
        { title: 'Web dev top tips', body: 'lorem ipsum idk too', author: 'Yoshi', id: 2 },
        { title: 'School is so boring', body: 'lorem ipsum lmao', author: 'Luigi', id: 3 }
    ]);

    return ( 
        <div className="home">
            <BlogList blogs={ blogs } title="All Blogs!"/>
        </div>
     );
}
 
export default Home;