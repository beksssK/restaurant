import axios from 'axios';

const axiosDishes = axios.create({
    baseURL: 'https://homework-a3501.firebaseio.com/'
});

export default axiosDishes;
