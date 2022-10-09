import {Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Users from "./pages/Users";
import Posts from "./pages/Posts";
import Todos from "./pages/Todos";
import PostComponent from "./pages/Post";

function App() {

    return (
        <div className="App">
            <h1> Hi </h1>

            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/users" element={<Users/>}/>
                <Route path="/posts" element={<Posts/>} />
                <Route path="/posts/:id" element={<PostComponent />} />
                <Route path="/todos" element={<Todos/>}/>
                <Route path="*" element={<h1>404</h1>}/>
            </Routes>
        </div>
    );

}

export default App;
