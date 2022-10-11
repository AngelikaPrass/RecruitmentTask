import type {ToDo} from "../types";
import {ChangeEvent, useEffect, useState} from "react";
import {dateConverter} from "./fetchToDos";

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

    // we want to reload the component every time the sorting or filtering function changes
    useEffect(() => {

    }, [sortingFunction, filterFunction]);


    const sortType = (element: ChangeEvent<HTMLSelectElement>) => {
        if (element.target.value === "noSort") {
            noSort()
        }
        if (element.target.value === "sortByDueDateAscending") {
            sortByDueDateAscending()
        }
        if (element.target.value === "sortByDueDateDescending") {
            sortByDueDateDescending()
        }
        if (element.target.value === "sortByStatusCompletedFirst") {
            sortByStatusCompletedFirst()
        }
        if (element.target.value === "sortByStatusPendingFirst") {
            sortByStatusPendingFirst()
        }
    }
    const filterType = (element: ChangeEvent<HTMLSelectElement>) => {
        if (element.target.value === "filterCompleted") {
            filterCompleted()
        }
        if (element.target.value === "filterPending") {
            filterPending()
        }
        if (element.target.value === "filterAll") {
            filterAll()
        }
    }

    return (
        <div>
            <div className="inline-block relative w-64">
                <select
                    className="
                    block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
                    onChange={(e) => sortType(e)} defaultValue={"noSort"}>
                    <option value="noSort">Don't sort</option>
                    <option value="sortByDueDateAscending">Sort by due date ascending</option>
                    <option value="sortByDueDateDescending">Sort by due date descending</option>
                    <option value="sortByStatusCompletedFirst">Sort by status completed first</option>
                    <option value="sortByStatusPendingFirst">Sort by status pending first</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
                    </svg>
                </div>
            </div>
            <div className="inline-block relative w-5">
            </div>
            <div className="inline-block relative w-64">
                <select
                    className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
                    onChange={(e) => filterType(e)} defaultValue={"filterAll"}>
                    <option value="filterAll">Show all</option>
                    <option value="filterCompleted">Show completed</option>
                    <option value="filterPending">Show pending</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
                    </svg>
                </div>
            </div>
            <div className="flex flex-col sm:grid grid-cols-3">
                {todos.sort(sortingFunction).filter(filterFunction).map((todos) => (
                    <div key={todos.id} className="
                    border rounded border-gray-400 hover:border-gray-500 shadow sm:w-48 lg:w-72 p-3 my-3 mr-5">
                        <h3 className="text-md font-semibold">{todos.title}</h3>
                        <p> due: {dateConverter(todos.due_on)}</p>
                        <p> status: {todos.status}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ToDoList;
