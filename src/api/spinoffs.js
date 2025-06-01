import axios from 'axios';
const BASE_URL = 'https://api.nasa.gov/techtransfer/Spinoff';
const API_KEY = import.meta.env.VITE_NASA_API_KEY;

export const fetchSpinoffs = async (query) => {
  try {
    const res = await axios.get(`${BASE_URL}/`, {
      params: { api_key: API_KEY, q: query },
    });

    console.log("Raw spinoff data:", res.data);

    return res.data.results.map((item) => ({
      id: item[0],
      title: item[1] || "Untitled Spinoff",
      description: item[2] || "No description available.",
      url: item[6] ? `https://spinoff.nasa.gov/${item[6]}` : "#",
      image: item[3] || "",
    }));
  } catch (err) {
    console.error('Spinoff API Error:', err);
    return [];
  }
};
