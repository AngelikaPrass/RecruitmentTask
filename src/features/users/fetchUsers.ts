import axios from 'axios';
import type {User} from '../types';

const fetchUsers = async (): Promise<User[]> => {
    return axios.get('https://gorest.co.in/public/v1/users').then((response) => {
        return response.data.data as User[];
    }).catch((error) => {
        console.error(error);
        throw error;
    });
};

export {fetchUsers};
