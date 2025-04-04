import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage'; // Pour stocker le token

const api = axios.create({
  baseURL:'http://192.168.1.23:3000/arfy/api', // Ou une autre méthode pour charger l'URL
  headers: {
    'Content-Type': 'application/json',
  },
});

// Intercepteur des requêtes
api.interceptors.request.use(
  async (config: any) => {
    const token = await AsyncStorage.getItem('token'); // AsyncStorage remplace localStorage
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error: any) => {
    return Promise.reject(error);
  }
);

// Intercepteur des réponses
api.interceptors.response.use(
  (response: any) => response,
  (error: any) => {
    const message =
      error.response?.data?.msg ||
      error.response?.data?.message ||
      error.message ||
      'An unknown error occurred.';

    return Promise.reject({
      ...error,
      message,
    });
  }
);

export default api;
