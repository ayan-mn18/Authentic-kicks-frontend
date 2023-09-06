// src/api/userApi.js
import axios from 'axios';

const baseUrl = 'http://localhost:8080/api/v1';

// Create a custom Axios instance for this API
const axiosInstance = axios.create({
    baseURL: baseUrl,
});

// Define functions for different HTTP requests

// POST request
export const createCombinations = (formData) => {
    return axiosInstance.post('/create-combinations', formData);
};