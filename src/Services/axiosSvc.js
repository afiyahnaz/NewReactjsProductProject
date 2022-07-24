import axios from 'axios';


const host = 'https://new-products-project.herokuapp.com';

const instance = axios.create({
    baseURL: host
});

export default instance;