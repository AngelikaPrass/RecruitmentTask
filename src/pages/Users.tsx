import {useState} from "react";
import {fetchUsers} from "../features/users/fetchUsers";
import Pagination from "../UI/Pagination";
import UsersList from "../features/users/UsersList";
import {useSearchParams} from "react-router-dom";
import type {User} from "../features/types";

const Users = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const page: number = Number(searchParams.get("page") || "1");
    const [users, setUsers] = useState<User[]>([]);

    const handlePageChange = (page: number) => {
        setSearchParams({page: page.toString()});
    }

    return (
        <div>
            <h1>Users</h1>
            <Pagination page={page} fetchFunction={fetchUsers} setDisplay={setUsers} handlePageChange={handlePageChange}>
                <UsersList users={users} />
            </Pagination>
        </div>
    )
}

export default Users;
