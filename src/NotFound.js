import { Link } from "react-router-dom/cjs/react-router-dom.min";

const NotFound = () => {
    return (
        <div className="not-found">
            <h1>404</h1>
            <p>Sorry! Nobody here but us chickens</p>
            <Link to="/">
                <button>Take me back home</button>
            </Link>
        </div>
    );
}
 
export default NotFound;