import axios from 'axios';

const instance = axios.create({
  baseURL: `http://hw6server-production.up.railway.app:6222/`,
});

export default instance;

// instance.get('/hi').then((data) => console.log(data));
