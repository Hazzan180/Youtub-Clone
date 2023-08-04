import axios from 'axios';

const BASE_URL = 'https://youtube-v31.p.rapidapi.com'

const options = {
    params: { 
      maxResults: '50'
    },
    headers: {
        'X-RapidAPI-Key': '47ca7487a6msh50ab277f738fe64p182299jsn1d2d1003056b',
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
};

export const fetchFromAPI = async (url) => {
   const {data} = await axios.get(`${BASE_URL}/${url}`, options);

   return data; 
}