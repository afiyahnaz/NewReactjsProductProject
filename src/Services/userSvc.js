import axios from "./axiosSvc";

const login = (user) => {

    return axios.post('/api/users/login');

};

export default   { login };