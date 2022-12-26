import axios from 'axios';

const instance = axios.create({
  baseURL: `https://hw6server-production.up.railway.app/`,
});

export default instance;

// instance.get('/hi').then((data) => console.log(data));
