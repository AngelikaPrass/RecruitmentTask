import {Route, Routes} from 'react-router-dom';
import Home from './pages/Home';
import Users from "./pages/Users";
import Posts from "./pages/Posts";
import Todos from "./pages/Todos";
import PostComponent from "./pages/Post";
import NewPost from "./pages/NewPost";
import UserComponent from "./pages/UserComponent";
import Register from "./pages/Register";
import Login from "./pages/Login";
import {createContext, useEffect, useState} from "react";
import {RegisteredUser} from "./features/types";
import Navbar from "./UI/Navbar";

import './input.css';


interface UserContextType {
    currentUser: RegisteredUser | null;
    setCurrentUser: (user: RegisteredUser | null) => void;
}

// new context to handle being logged in vs logged out
// null user means logged out
export const UserContext = createContext<UserContextType | null>(null);

function App() {

    const [currentUser, setCurrentUser] = useState<RegisteredUser | null>(null);
    const val = {
        currentUser,
        setCurrentUser: (user: RegisteredUser | null) => setCurrentUser(user)
    };

    useEffect(() => {
        const user = localStorage.getItem("user");
        if (user) {
            setCurrentUser(JSON.parse(user));
        }
    }, []);

    return (
        <UserContext.Provider value={val}>
        <div className="App">
            <Navbar />
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/users" element={<Users/>}/>
                <Route path="/users/:id" element={<UserComponent/>}/>
                <Route path="/posts" element={<Posts/>}/>
                <Route path="/posts/:id" element={<PostComponent/>}/>
                <Route path="/posts/new-post" element={<NewPost/>}/>
                <Route path="/register" element={<Register/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/todos" element={<Todos/>}/>
                <Route path="*" element={<h1>404</h1>}/>
            </Routes>
        </div>
        </UserContext.Provider>

    );

}

export default App;
