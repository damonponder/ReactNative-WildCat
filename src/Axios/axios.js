import axios from 'axios'

const instance = axios.create({
    baseURL: 'http://3.129.246.176:8080'
});

instance.defaults.headers.post["Content-Type"] = "application/json";

export default instance;
