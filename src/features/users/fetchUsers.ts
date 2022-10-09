import axios from 'axios';
import type {API_UsersResponse} from '../types';

const fetchUsers = async (pageNr: number): Promise<API_UsersResponse> => {
    return axios.get(`https://gorest.co.in/public/v1/users?page=${pageNr}`).then((response) => {
        return response.data;
    }).catch((error) => {
        console.error(error);
        throw error;
    });
};

export {fetchUsers};
