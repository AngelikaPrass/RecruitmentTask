import axios from 'axios';
import type {API_PostsResponse, Comment, Post, User} from '../types';

//all fetching functions for posts & related things

const fetchPosts = async ( pageNr: number) : Promise<API_PostsResponse> => {
    return axios.get(`https://gorest.co.in/public/v1/posts?page=${pageNr}`,
        {
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "Authorization": "Bearer a9bf67b3b593f9fbdca800d03c42bd3c626e6d12cfba8839a66f615eeaf3cbd0"
            }
        }).then((response) => {
        return response.data;
    }).catch((error) => {
        console.error(error);
        throw error;
    });
};

const fetchPost = async ( postId: number ): Promise<Post> => {
    return axios.get(`https://gorest.co.in/public/v1/posts/${postId}`, {
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": "Bearer a9bf67b3b593f9fbdca800d03c42bd3c626e6d12cfba8839a66f615eeaf3cbd0"
        }
    }).then((response) => {
        return response.data.data as Post;
    }).catch((error) => {
        console.error(error);
        throw error;
    });
}

const fetchPostAuthor = async (userId: number): Promise<User> => {
    return axios.get(`https://gorest.co.in/public/v1/users/${userId}`, {
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": "Bearer a9bf67b3b593f9fbdca800d03c42bd3c626e6d12cfba8839a66f615eeaf3cbd0"
        }
    }).then((response) => {
        return response.data.data as User;
    }).catch((error) => {
        console.error(error);
        throw error;
    });
}

const fetchPostComments = async (postId: number): Promise<Comment[]> => {
    return axios.get(`https://gorest.co.in/public/v1/posts/${postId}/comments`, {
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

export {fetchPosts, fetchPost, fetchPostAuthor, fetchPostComments};
