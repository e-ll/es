import axios from 'axios';

let serverURL = "https://elprojectr.herokuapp.com";

if(process.env.NODE_ENV === 'production'){
    serverURL = process.env.SERVER_URL;
}

const instance = axios.create({
   baseURL: serverURL
});

export default instance;