import axios from 'axios';

// let serverURL = "https://elprojectr.herokuapp.com";
let serverURL = "http://localhost:8081";

if(process.env.NODE_ENV === 'production'){
    serverURL = process.env.SERVER_URL;
}

const instance = axios.create({
   baseURL: serverURL
});

export default instance;