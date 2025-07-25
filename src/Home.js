import { useState } from "react";

const Home = () => {

    const [name, setName] = useState('Bryan');
    const [age, setAge] = useState(22);

    const handleClick = () => {
        setName('Titus');
        setAge(300)
    }

    return ( 
        <div className="home">
            <h2>Homepage!</h2>
            <p>My name is { name } and I'm { age } years old</p>
            <button onClick={handleClick}>Click to change name</button>
        </div>
     );
}
 
export default Home;