import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://reactburger-20fb9.firebaseio.com/'
})

export default instance;