import axios from 'axios';
import type {Comment, Post, ToDo} from '../types';

const getUserPosts = async (userId: number): Promise<Post[]> => {
    return await axios.get(`https://gorest.co.in/public/v1/users/${userId}/posts`,
        {
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "Authorization": "Bearer a9bf67b3b593f9fbdca800d03c42bd3c626e6d12cfba8839a66f615eeaf3cbd0"
            }
        }).then((response) => {
        return response.data.data as Post[];
    }).catch((error) => {
        console.error(error);
        throw error;
    });
};

const getUserTodos = async (userId: number): Promise<ToDo[]> => {
    return await axios.get(`https://gorest.co.in/public/v1/users/${userId}/todos`, {
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": "Bearer a9bf67b3b593f9fbdca800d03c42bd3c626e6d12cfba8839a66f615eeaf3cbd0"
        }
    }).then((response) => {
        return response.data.data as ToDo[];
    }).catch((error) => {
        console.error(error);
        throw error;
    });
};
//get all comments by a given user
const getUserComments = async (userId: number): Promise<Comment[]> => {
    return await axios.get(`https://gorest.co.in/public/v1/users/${userId}/comments`, {
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": "Bearer a9bf67b3b593f9fbdca800d03c42bd3c626e6d12cfba8839a66f615eeaf3cbd0"
        }
    }).then((response) => {
        return response.data.data as Comment[];
    }).catch((error) => {
        console.error(error);
        throw error;
    });
};


export {getUserPosts, getUserTodos, getUserComments};
