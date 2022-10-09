import ToDoList from "../features/todos/ToDoList";
import {fetchToDos} from "../features/todos/fetchToDos";
import { useSearchParams } from "react-router-dom";
import Pagination from "../UI/Pagination";
import {useState} from "react";
import type {ToDo} from "../features/types";

const ToDos = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const page: number = Number(searchParams.get("page") || "1");
    const [todos, setToDos] = useState<ToDo[]>([]);


    const handlePageChange = (page: number) => {
        setSearchParams({page: page.toString()});
    };

    return (
        <div>
            <h1>ToDos</h1>
            <Pagination page={page} fetchFunction={fetchToDos} setDisplay={setToDos} handlePageChange={handlePageChange}>
                <ToDoList todos={todos} />
            </Pagination>
        </div>
    );
}

export default ToDos;