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
                    <div key={user.id}>
                        <Link to={user.id.toString()}>{user.name}</Link>
                        <p>{user.email}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default UsersList;
