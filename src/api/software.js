import axios from 'axios';
const BASE_URL = 'https://api.nasa.gov/techtransfer/software';
const API_KEY = import.meta.env.VITE_NASA_API_KEY;

export const fetchSoftware = async (query) => {
  try {
    const res = await axios.get(`${BASE_URL}/`, {
      params: { api_key: API_KEY, q: query },
    });
    return res.data.results.map((item) => ({
      id: item[1],
      title: item[2],
      description: item[3],
      url: `https://software.nasa.gov/software/${item[1]}`,
      category: item[5],
      center: item[9],
      github: item[8],
    }));
  } catch (err) {
    console.error('Software API Error:', err);
    return [];
  }
};