interface Comment {
    id: number;
    post_id: number;
    name: string;
    email: string;
    body: string;
}

interface Post {
    id: number;
    user_id: number;
    title: string;
    body: string;
}

interface User {
    id: number;
    name: string;
    email: string;
    gender: "male" | "female";
    status: "active" | "inactive";
}

interface ToDo {
    id: number;
    user_id: number;
    title: string;
    due_on: date;
    status: "pending" | "completed";
}

export type {Comment, Post, User, ToDo};
