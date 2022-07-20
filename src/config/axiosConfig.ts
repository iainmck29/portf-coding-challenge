import axios from 'axios';

const apiAxios = axios.create({
    baseURL: "https://api.punkapi.com/v2/beers"
})

export default apiAxios