import { defineNuxtPlugin } from '#app';
import axios from 'axios';

export default defineNuxtPlugin((nuxtApp) => {
  // Create an Axios instance
  const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL, 
  });

  // Inject the instance into the Nuxt app context as $axios
  nuxtApp.provide('axios', axiosInstance);
});
