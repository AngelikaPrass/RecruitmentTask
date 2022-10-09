import axios from 'axios';
import type {API_ToDosResponse} from '../types';

const fetchToDos = async (pageNr: number): Promise<API_ToDosResponse[]> => {
    return axios.get(`https://gorest.co.in/public/v1/todos?page=${pageNr}`).then((response) => {
        return response.data;
    }).catch((error) => {
        console.error(error);
        throw error;
    });
};

export {fetchToDos};
