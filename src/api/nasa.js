import axios from 'axios';

const BASE_URL = "https://api.nasa.gov/techtransfer";
const API_KEY = import.meta.env.VITE_NASA_API_KEY;

export const fetchNASAData = async (type, query) => {
  try {
    const res = await axios.get(`${BASE_URL}/${type}/`, {
      params: {
        api_key: API_KEY,
        q: query,
      },
    });
    return res.data.results;
  } catch (error) {
    console.error(`Error fetching ${type}:`, error);
    return [];
  }
};