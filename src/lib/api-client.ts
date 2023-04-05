import Axios from 'axios';

import { CONSTANTS } from '@/constants';
import { notificationsStore } from '@/stores/notifications';

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

    notificationsStore.getState().showNotification({
      type: 'error',
      title: 'Error',
      duration: 5000,
      message,
    });

    return Promise.reject(error);
  }
);
