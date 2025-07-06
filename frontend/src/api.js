import axios from 'axios';

const api = axios.create({
  baseURL: 'https://sondrebolland.com/django',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;