import axios from 'axios';
import type {ToDo} from '../types';

const fetchToDos = async (): Promise<ToDo[]> => {
    return axios.get('https://gorest.co.in/public/v1/todos').then((response) => {
        return response.data.data as ToDo[];
    }).catch((error) => {
        console.error(error);
        throw error;
    });
};

export {fetchToDos};
