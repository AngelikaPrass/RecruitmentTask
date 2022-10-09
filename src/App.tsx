import {Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Users from "./pages/Users";
import Posts from "./pages/Posts";
import Todos from "./pages/Todos";
import PostComponent from "./pages/Post";
import NewPost from "./pages/NewPost";
import UserComponent from "./pages/UserComponent";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Logout from "./UI/Logout";
import {createContext, useState} from "react";
import {RegisteredUser} from "./features/types";

interface UserContextType {
    currentUser: RegisteredUser | null;
    setCurrentUser: (user: RegisteredUser | null) => void;
}
export const UserContext = createContext<UserContextType | null>(null);

function App() {

    const [currentUser, setCurrentUser] = useState<RegisteredUser | null>(null);
    const val = {
        currentUser,
        setCurrentUser: (user: RegisteredUser | null) => setCurrentUser(user)};

    return (

        <UserContext.Provider value={val}>
        <div className="App">
            <Logout />
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
