import axios from 'axios';

export const apiClient = axios.create({
  baseURL: 'https://api.autotruck.com',
  timeout: 10000,
});
