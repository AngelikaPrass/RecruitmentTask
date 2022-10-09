import type {User} from "../types";
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
                        <h3>{user.name}</h3>
                        <p>{user.email}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default UsersList;