import axios from 'axios';

const instance = axios.create({
  baseURL: `https://104.196.232.237:6222/`,
});

export default instance;

// instance.get('/hi').then((data) => console.log(data));
