import {Link} from "react-router-dom";
import {useContext, useState} from "react";
import {UserContext} from "../App";
import Logout from "./Logout";

const Navbar = () => {
    const userContext = useContext(UserContext);
    const [navbarOpen, setNavbarOpen] = useState(false);
    return (
        <nav className="flex items-center justify-between flex-wrap bg-sky-900 p-6">

            <div className="block lg:hidden">
                <button
                    onClick={() => setNavbarOpen(!navbarOpen)}
                    className="flex items-center px-3 py-2 border rounded text-sky-100 border-sky-400 hover:text-white hover:border-white">
                    {navbarOpen ? (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-6 h-6"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path
                                fillRule="evenodd"
                                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                clipRule="evenodd"
                            />
                        </svg>
                    ) : (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-6 h-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        </svg>
                    )}
                </button>
            </div>
            <div className={`w-full  flex-grow lg:flex lg:items-center lg:w-auto${
                navbarOpen ? "block" : " hidden"
            }`}>
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
