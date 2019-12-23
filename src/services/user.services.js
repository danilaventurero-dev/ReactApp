import axios from 'axios';
import {  API_HOST  } from './config';

const MODULE = 'user';

export const getService = () => {
    return new Promise((resolve, reject) => {
        axios.get(`${API_HOST}/${MODULE}`, {
            headers: {
                
            }
        }).then(data => {
            resolve(data.data);
        }).catch(err => reject(err.message));
    })
}