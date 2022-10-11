import {useEffect, useState} from "react";
import {Link, useParams} from "react-router-dom";
import {getUserPosts, getUserTodos} from "../features/users/utils";
import {fetchUser} from "../features/users/fetchUsers";
import {Post, ToDo, User} from "../features/types";
import {dateConverter} from "../features/todos/fetchToDos";

const UserComponent = () => {
    const {id} = useParams();
    const [user, setUser] = useState<User | null>(null);
    const [posts, setPosts] = useState<Post[]>([]);
    const [toDos, setToDos] = useState<ToDo[]>([]);

    useEffect(() => {
        fetchUser(Number(id)).then(setUser);
        getUserPosts(Number(id)).then(setPosts);
        getUserTodos(Number(id)).then(setToDos);
    }, [id]);

    return (
        <div className="grid place-items-center mt-1">
            <h2 className="text-2xl font-bold text-center"> User information </h2>
            <div>
                <p> id: {id} </p>
                <p> name: {user?.name} </p>
                <p>email: {user?.email}</p>
                <p>gender: {user?.gender}</p>
            </div>


            <div className="h-8"></div>

            <div className="grid place-items-center mt-1">
                <h2 className="text-2xl font-bold text-center"> Posts of {user?.name}: </h2>
                {posts.map((post) => (
                    <div key={post.id} className="mt-1">
                        <ul className="list-disc">
                            <li><Link to={"/posts/" + post.id.toString()}
                                      className="font-light text-lg cursor-pointer hover:underline">{post.title}</Link>
                            </li>
                        </ul>
                    </div>
                ))}
            </div>

            <div className="h-8"></div>
            <div className="grid place-items-center mt-1">
                <h2 className="text-2xl font-bold text-center"> To-do's of {user?.name}: </h2>
                {toDos.map((todo: ToDo) => (
                    <ul className="list-disc">
                        <li>
                            <div key={todo.id} className="grid place-items-center mt-1">
                                <p className="font-light text-lg">{todo.title}</p>
                                <p className="font-light text-md">due: {dateConverter(todo.due_on)} </p>
                                <p className="font-light text-md">status: {todo.status}</p>
                            </div>
                        </li>
                    </ul>
                ))}
            </div>
        </div>
    );
}

export default UserComponent;
