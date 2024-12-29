import axios from 'axios';

const username = import.meta.env.VITE_APP_USERNAME;
const password = import.meta.env.VITE_APP_PASSWORD;

// Create an Authorization header
const authHeader = `Basic ${btoa(`${username}:${password}`)}`;

// Configure Axios without a baseURL
const apiClient = axios.create({
  headers: {
    Authorization: authHeader,
  },
});

export default apiClient;
