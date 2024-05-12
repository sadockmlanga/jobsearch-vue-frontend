import axios from 'axios';

axios.defaults.baseURL = 'http://127.0.0.1:8090/api'; 

axios.interceptors.request.use((config) => {
    const token = localStorage.getItem('token'); 
    if (token) {
      const parsedToken = JSON.parse(token); 
      config.headers.Authorization = `Bearer ${parsedToken}`;
      console.log('hello sdk,', parsedToken);
      
      config.headers.Authorization = `Bearer ${parsedToken}`;
    }
    return config;
  }, (error) => {
    return Promise.reject(error);
  });

export default axios;
