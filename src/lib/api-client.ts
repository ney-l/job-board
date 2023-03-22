import Axios from 'axios';

import CONSTANTS from '@/constants';

export const apiClient = Axios.create({
  baseURL: CONSTANTS.API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

apiClient.interceptors.response.use(
  (response) => response.data,
  (error) => {
    const message =
      error.response?.data?.message || error.message;
    console.error(message);
    return Promise.reject(error);
  }
);
