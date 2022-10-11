import axios from 'axios';
import type {API_UsersResponse, User} from '../types';

const fetchUsers = async (pageNr: number): Promise<API_UsersResponse> => {
    return axios.get(`https://gorest.co.in/public/v1/users?page=${pageNr}`, {
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

const fetchUser = async (id: number): Promise<User> => {
    return axios.get(`https://gorest.co.in/public/v1/users/${id}`, {
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": "Bearer a9bf67b3b593f9fbdca800d03c42bd3c626e6d12cfba8839a66f615eeaf3cbd0"
        }
    })
        .then((response) => {
            return response.data.data as User;
        }).catch((error) => {
            console.error(error);
            throw error;
        });
}
export {fetchUsers, fetchUser};
