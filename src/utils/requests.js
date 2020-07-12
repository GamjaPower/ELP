import axios from 'axios';
import queryString from 'query-string';

export function getData(method, url) { 
    return axios.get(url)
        .then(response => {
            return response.data;
        })
        .catch(function (error) {
            console.log(error); 
        });
}