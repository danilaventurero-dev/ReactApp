import axios from 'axios';
import {  API_HOST  } from './config';

const MODULE = 'post';

export const getService = () => {
    return new Promise((resolve, reject) => {
        axios.get(`${API_HOST}/${MODULE}`, {
            headers: {
                //authorization: `bearer ${jwt}`,
            }
        }).then(data => {
            resolve(data.data);
        }).catch(err => reject(err.message));
    })
}

export const deleteService = ( id ) => {
    console.log(id)
    return new Promise((resolve, reject) => {
        const url = `${API_HOST}/${MODULE}/${id}`;
        axios.delete(url, { 
            //headers: { authorization: `bearer ${jwt}` } 
        })
            .then(data => {
                resolve(data);
            }).catch(err => reject(err.message));
    })
}

export const findService = ( id ) => {
    return new Promise((resolve, reject) => {
        axios.get(`${API_HOST}/${MODULE}/${id}`, {
            headers: {
                //authorization: `bearer ${jwt}`,
            }
        }).then(data => {
            resolve(data.data);
        }).catch(err => reject(err.message));
    })
}