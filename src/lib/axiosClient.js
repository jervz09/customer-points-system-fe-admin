import axios from 'axios';
import toast from 'react-hot-toast';

const axiosClient = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:5000/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

axiosClient.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

axiosClient.interceptors.response.use(
  (response) => response,
  (error) => {
    const status = error.response?.status;
    const message =
      error.response?.data?.message || error.message || 'Something went wrong.';

    // Log the full error response in dev
    if (import.meta.env.DEV) {
      console.error('[AXIOS ERROR]', {
        status,
        url: error.config?.url,
        method: error.config?.method,
        response: error.response?.data,
      });
      console.log(error);
    }

    // Show toast
    toast.error(`Error ${status || ''}: ${message}`);

    return Promise.reject(error);
  }
);

export default axiosClient;
