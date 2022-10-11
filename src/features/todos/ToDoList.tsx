import type {ToDo} from "../types";
import {useEffect, useState} from "react";

interface ToDoListProps {
    todos: ToDo[];
}


const ToDoList = (props: ToDoListProps) => {
    const {todos} = props;
    const [sortingFunction, setSortingFunction] = useState(() => (a: ToDo, b: ToDo) => a.id - b.id);
    const [filterFunction, setFilterFunction] = useState(() => (a: ToDo) => true);

    const noSort = () => {
        setSortingFunction(() => (a: ToDo, b: ToDo) => a.id - b.id);
    }
    const sortByDueDateAscending = () => {
        setSortingFunction(() => (a: ToDo, b: ToDo) => a.due_on.localeCompare(b.due_on));
    }
    const sortByDueDateDescending = () => {
        setSortingFunction(() => (a: ToDo, b: ToDo) => b.due_on.localeCompare(a.due_on));
    }
    const sortByStatusCompletedFirst = () => {
        setSortingFunction(() => (a: ToDo, b: ToDo) => a.status.localeCompare(b.status));
    }
    const sortByStatusPendingFirst = () => {
        setSortingFunction(() => (a: ToDo, b: ToDo) => b.status.localeCompare(a.status));
    }
    const filterCompleted = () => {
        setFilterFunction(() => (a: ToDo) => a.status === "completed");
    }
    const filterPending = () => {
        setFilterFunction(() => (a: ToDo) => a.status === "pending");
    }
    const filterAll = () => {
        setFilterFunction(() => (a: ToDo) => true);
    }

    useEffect(() => {
        console.log("sortingFunction changed");
    }, [sortingFunction]);

    useEffect(() => {
        console.log("filterFunction changed");
    }, [filterFunction]);

    return (
        <div>
            <div className="sort-options">
                <button onClick={sortByDueDateAscending}>Sort by due date ascending</button>
                <button onClick={sortByDueDateDescending}>Sort by due date descending</button>
                <button onClick={sortByStatusCompletedFirst}>Sort by status completed first</button>
                <button onClick={sortByStatusPendingFirst}>Sort by status pending first</button>
                <button onClick={noSort}> reset sorting </button>
            </div>
            <div className="filter-options">
                <button onClick={filterAll}>Show all</button>
                <button onClick={filterCompleted}>Show completed</button>
                <button onClick={filterPending}>Show pending</button>
            </div>
            <div>
                {todos.sort(sortingFunction).filter(filterFunction).map((todos) => (
                    <div key={todos.id}>
                        <h3>{todos.title}</h3>
                        <p> {todos.due_on}</p>
                        <p> {todos.status}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ToDoList;
