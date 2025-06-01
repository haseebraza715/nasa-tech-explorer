// src/pages/ExploreAllRawData.jsx
import { useState } from 'react';
import axios from 'axios';

const BASE_URL = "https://api.nasa.gov/techtransfer";
const API_KEY = import.meta.env.VITE_NASA_API_KEY;

export default function ExploreAllRawData() {
  const [results, setResults] = useState({});
  const [query, setQuery] = useState("engine");
  const [loading, setLoading] = useState(false);

  const endpoints = ["patent", "software", "Spinoff"];

  const fetchAll = async () => {
    setLoading(true);
    const data = {};

    for (const type of endpoints) {
      try {
        const res = await axios.get(`${BASE_URL}/${type}/`, {
          params: {
            api_key: API_KEY,
            q: query,
          },
        });
        data[type] = res.data;
      } catch (error) {
        data[type] = { error: true, message: error.message };
      }
    }

    setResults(data);
    setLoading(false);
  };

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h1 className="text-2xl font-bold text-center mb-4">📦 Explore All NASA TechTransfer Data</h1>

      <div className="flex gap-2 justify-center mb-4">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="border px-4 py-2 rounded w-1/2"
          placeholder="Search keyword..."
        />
        <button
          onClick={fetchAll}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Fetch All
        </button>
      </div>

      {loading && <p className="text-center">Loading all endpoints...</p>}

      {Object.entries(results).map(([type, data]) => (
        <div key={type} className="mb-6">
          <h2 className="text-xl font-semibold mb-2 capitalize">{type}</h2>
          <pre className="bg-black text-green-200 text-sm p-4 rounded overflow-auto max-h-[400px]">
            {JSON.stringify(data, null, 2)}
          </pre>
        </div>
      ))}
    </div>
  );
}