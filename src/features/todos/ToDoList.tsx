import type {ToDo} from "../types";

interface ToDoListProps {
    todos: ToDo[];
}

const ToDoList = (props: ToDoListProps) => {
    const {todos} = props;
    return (
        <div>
            <div>
                {todos.map((todos) => (
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