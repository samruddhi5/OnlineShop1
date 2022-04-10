import axios from 'axios';

export default axios.create({
  baseURL: 'http://localhost:3000/api/product/',
  headers: {
    'Content-Type': 'application/json',
  },
});