import { Link } from "react-router-dom";
import {useContext} from "react";
import {UserContext} from "../App";
import Logout from "./Logout";

const Navbar = () => {
    const userContext = useContext(UserContext);
    return (
        <nav>
            <div className="nav-wrapper">
                <Link to="/" className="brand-logo">Logo</Link>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/users">Users</Link></li>
                    <li><Link to="/posts">Posts</Link></li>
                    <li><Link to="/todos">Todos</Link></li>

                    {userContext!.currentUser == null ? (
                            <>
                                <li><Link to="/register">Register</Link></li>
                                <li><Link to="/login"> Log in </Link></li>
                            </>
                        ) :
                        ( <>
                                <li><Link to="/posts/new-post"> New Post</Link></li>
                                <li><Link to={"/users/" + userContext!.currentUser!.id}>Profile</Link></li>
                                <Logout />
                            </>
                        )
                    }
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
