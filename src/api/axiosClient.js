import axios from "axios";
import firebase from 'firebase';

const api = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    responseType: "json",
    headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
        "X-Requested-With": "XMLHttpRequest",
    },

    async: true,
    crossDomain: true,
});

// Add a request interceptor
api.interceptors.request.use(async (config) => {
    const currentUser = firebase.auth().currentUser;
    if (currentUser) {
        const token = await currentUser.getIdToken();
        config.headers.Authorization = token;
    }

    return config;
});

export default api;
