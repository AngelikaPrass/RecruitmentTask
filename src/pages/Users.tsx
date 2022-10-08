import {useState, useEffect} from "react";
import type {User} from "../features/types";
import {fetchUsers} from "../features/users/fetchUsers";

const Users = () => {
    const [users, setUsers] = useState<User[]>([]);
    const [loading, setLoading] = useState <boolean>(true);

    useEffect(() => {
        fetchUsers().then(setUsers);
        setLoading(false);
    }, []);

    return (
        <div>
            <h1>Users</h1>
            {
                loading ? (<span> Loading users...</span>)
                :
                <div>
                    {users.map(user => (
                         <div key={user.id}>
                            <h2>{user.name}</h2>
                             <p>{user.email}</p>
                         </div>
                    ))}
                </div>
            }
        </div>
    )
}

export default Users;
