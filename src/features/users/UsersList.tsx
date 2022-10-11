import type {User} from "../types";
import {Link} from "react-router-dom";

interface UsersListProps {
    users: User[];
}

const UsersList = (props: UsersListProps) => {
    const {users} = props;
    return (
        <div>
            <div>
                {users.map((user) => (
                    <div key={user.id} className="border rounded-lg border-gray-300 px-5 py-2 mx-7 my-4">
                        <Link to={user.id.toString()}
                              className="font-medium text-2xl cursor-pointer hover:underline">{user.name}</Link>
                        <p>{user.email}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default UsersList;
