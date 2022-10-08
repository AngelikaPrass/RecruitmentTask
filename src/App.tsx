import {Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Users from "./pages/Users";
import Posts from "./pages/Posts";
import Todos from "./pages/Todos";

function App() {

  return (
      <div className="App">
        <h1> Hi </h1>

        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/users" element={<Users/>}/>
          <Route path="/posts" element={<Posts/>}/>
          <Route path="/todos" element={<Todos/>}/>
        </Routes>
      </div>
  );

}

export default App;
