import axios from 'axios';
import type {API_ToDosResponse} from '../types';

const fetchToDos = async (pageNr: number): Promise<API_ToDosResponse[]> => {
    return axios.get(`https://gorest.co.in/public/v1/todos?page=${pageNr}`, {
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

// function to convert the date from the datatype provided by API to a more readable format
const dateConverter = (date: string) => {
    const converted: Date = new Date(Date.parse(date));
    return converted.toLocaleDateString();
}

export {fetchToDos, dateConverter};
