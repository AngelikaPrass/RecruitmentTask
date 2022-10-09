import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {getUserPosts} from "../features/users/utils";
import {fetchUser} from "../features/users/fetchUsers";
import {Post, User} from "../features/types";

const UserComponent = () => {
    const {id} = useParams();
    const [user, setUser] = useState<User | null>(null);
    const [posts, setPosts] = useState<Post[]> ([]);
    useEffect(() => {
        fetchUser(Number(id)).then(setUser);
        getUserPosts(Number(id)).then(setPosts);
    }, [id]);

    return (
        <div>
            <h1>User</h1>
            <p>{id}</p>
            <p>{user?.name} </p>
            <p>{user?.email}</p>
            <p> {user?.gender}</p>

            <div>
                {posts.map((post) => (
                    <div key={post.id}>
                        <p>{post.title}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default UserComponent;