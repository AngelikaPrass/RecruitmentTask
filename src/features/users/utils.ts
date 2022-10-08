import axios from 'axios';
import type {Post, ToDo, Comment} from '../types';

const getUserPosts = async (userId: number): Promise<Post[]> => {
    return await axios.get(`https://gorest.co.in/public/v1/users/${userId}/posts`).then((response) => {
        return response.data.data as Post[];
    }).catch((error) => {
        console.error(error);
        throw error;
    });
};

const getUserTodos = async (userId: number): Promise<ToDo[]> => {
    return await axios.get(`https://gorest.co.in/public/v1/users/${userId}/todos`).then((response) => {
        return response.data.data as ToDo[];
    }).catch((error) => {
        console.error(error);
        throw error;
    });
};

const getUserComments = async (userId: number): Promise<Comment[]> => {
    return await axios.get(`https://gorest.co.in/public/v1/users/${userId}/comments`).then((response) => {
        return response.data.data as Comment[];
    }).catch((error) => {
        console.error(error);
        throw error;
    });
};

export {getUserPosts, getUserTodos, getUserComments};
