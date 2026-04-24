import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://api.autotruck.com',
  timeout: 10000,
});
