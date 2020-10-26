import axios from 'axios';

export const axiosIntance = axios.create({
  baseURL: process.env.REACT_APP_URL_BASE,
  timeout: 50000,
  headers: {'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
            'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'}
});
