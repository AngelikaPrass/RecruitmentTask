import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {getUserPosts, getUserTodos} from "../features/users/utils";
import {fetchUser} from "../features/users/fetchUsers";
import {Post, ToDo, User} from "../features/types";

const UserComponent = () => {
    const {id} = useParams();
    const [user, setUser] = useState<User | null>(null);
    const [posts, setPosts] = useState<Post[]> ([]);
    const [toDos, setToDos] = useState<ToDo[]>([]);

    useEffect(() => {
        fetchUser(Number(id)).then(setUser);
        getUserPosts(Number(id)).then(setPosts);
        getUserTodos(Number(id)).then(setToDos);
    }, [id]);

    return (
        <div>
            <h1>User</h1>
            <p>{id}</p>
            <p>{user?.name} </p>
            <p>{user?.email}</p>
            <p> {user?.gender}</p>

            <div className="posts">
                <h1> posts of {user?.name} </h1>
                {posts.map((post) => (
                    <div key={post.id}>
                        <p>{post.title}</p>
                        <p>{post.body}</p>
                    </div>
                ))}
            </div>

            <div className="todos">
                <h1> to-do's of {user?.name} </h1>
                {toDos.map((todo: ToDo) => (
                    <div key={todo.id}>
                        <p>{todo.title}</p>
                        <p>{todo.status}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default UserComponent;
