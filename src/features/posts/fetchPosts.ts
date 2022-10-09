import axios from 'axios';
import type {Post} from '../types';
import type {Comment} from '../types';
import type {API_PostsResponse} from '../types';


const fetchPosts = async ( pageNr: number) : Promise<API_PostsResponse> => {
    return axios.get(`https://gorest.co.in/public/v1/posts?page=${pageNr}`).then((response) => {
        return response.data;
    }).catch((error) => {
        console.error(error);
        throw error;
    });
};

const fetchPost = async ( postId: number ): Promise<Post> => {
    return axios.get(`https://gorest.co.in/public/v1/posts/${postId}`).then((response) => {
        return response.data.data as Post;
    }).catch((error) => {
        console.error(error);
        throw error;
    });
}

const fetchPostComments = async ( postId: number ): Promise<Comment[]> => {
    return axios.get(`https://gorest.co.in/public/v1/posts/${postId}/comments`).then((response) => {
        return response.data.data as Comment[];
    }).catch((error) => {
        console.error(error);
        throw error;
    });
};

export {fetchPosts, fetchPost, fetchPostComments};
