import axios from 'axios';



const BASE_URL = 'https://youtube-v31.p.rapidapi.com'

const options = {
  url: BASE_URL,
  headers: {
    'x-rapidapi-key': String(import.meta.env.VITE_RAPIDAPI_KEY || ''),
    'x-rapidapi-host': 'youtube-v31.p.rapidapi.com'
  }
};

try {
	const response = await axios.request(options);
	console.log(response.data);
} catch (error) {
	console.error(error);
}



export const fetchFromApi = async(url: string) => {
   const { data } =  await axios.get(`${BASE_URL}/${url}`,options);

   return data
}