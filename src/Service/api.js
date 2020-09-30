import axios from 'axios';

const api = axios.create({
    baseURL: 'https://caititu.storkdev.com/',
  });
  
  export default api;