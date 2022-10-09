import type {RegisteredUser} from "../types";

const registerUser = (user: RegisteredUser) => {
    const arr = JSON.parse(localStorage.getItem("database") || "[]");
    arr.push(user);
    localStorage.setItem("database", JSON.stringify(arr));
    console.log(localStorage.getItem("database"));
}

const getUser = (email: string, password: string) => {
    const saved = JSON.parse(localStorage.getItem("database") || "[]");
    return (saved.find((user: RegisteredUser) => user.email === email && user.password === password) as RegisteredUser || null);
}

const printDatabase = () => {
    console.log(localStorage.getItem("database"));
}
export {registerUser, getUser, printDatabase};