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

interface API_PostsResponse {
    meta: {
        pagination: {
            total: number;
            pages: number;
            page: number;
            limit: number;
            links: {
                previous: string;
                current: string;
                next: string;
            }
        }
    }
    data: Post[];
}

interface API_UsersResponse {
    meta: {
        pagination: {
            total: number;
            pages: number;
            page: number;
            limit: number;
            links: {
                previous: string;
                current: string;
                next: string;
            }
        }
    }
    data: User[];
}

interface API_ToDosResponse {
    meta: {
        pagination: {
            total: number;
            pages: number;
            page: number;
            limit: number;
            links: {
                previous: string;
                current: string;
                next: string;
            }
        }
    }
    data: ToDo[];
}

interface RegisteredUser {
    id: number;
    email: string;
    password: string;
}

export type {Comment, Post, User, ToDo, API_PostsResponse, API_UsersResponse, API_ToDosResponse, RegisteredUser};
