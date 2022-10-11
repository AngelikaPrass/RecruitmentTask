import {Link} from "react-router-dom";
import {useContext} from "react";
import {UserContext} from "../App";
import Logout from "./Logout";

const Navbar = () => {
    const userContext = useContext(UserContext);
    return (
        <nav className="flex items-center justify-between flex-wrap bg-sky-900 p-6">

            <div className="block lg:hidden">
                <button
                    className="flex items-center px-3 py-2 border rounded text-sky-100 border-sky-400 hover:text-white hover:border-white">
                    <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/1000/svg">
                        <title>Menu</title>
                        <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/>
                    </svg>
                </button>
            </div>
            <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
                <div className="text-sm lg:flex-grow">
                    <Link to="/" className="block mt-4 lg:inline-block lg:mt-0 text-sky-100 hover:text-white mr-4">
                        Home
                    </Link>
                    <Link to="/users" className="block mt-4 lg:inline-block lg:mt-0 text-sky-100 hover:text-white mr-4">
                        Users
                    </Link>
                    <Link to="/posts"
                          className="block mt-4 lg:inline-block lg:mt-0 text-sky-100 hover:text-white mr-4">
                        Posts
                    </Link>
                    <Link to="/todos"
                          className="block mt-4 lg:inline-block lg:mt-0 text-sky-100 hover:text-white">
                        To-dos
                    </Link>
                </div>
                <div>
                    {/*if user is logged in, show logout button and an option to add a new post, if not, show login and register buttons*/}
                    {userContext!.currentUser == null ? (
                        <>
                            <Link to="/register"
                                  className="block mt-4 lg:inline-block lg:mt-0 text-sky-100 hover:text-white mr-4">Register</Link>
                            <Link to="/login"
                                  className="block mt-4 lg:inline-block lg:mt-0 text-sky-100 hover:text-white mr-4"> Log
                                in </Link>
                        </>
                    ) : (
                        <>
                            <Link to="/posts/new-post"
                                  className="block mt-4 lg:inline-block lg:mt-0 text-sky-100 hover:text-white mr-4">New
                                Post</Link>
                            <Logout/>
                        </>
                    )}
                </div>
            </div>
        </nav>

    );
}

export default Navbar;
