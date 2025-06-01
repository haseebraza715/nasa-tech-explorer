// components/TechSearchBar.js
import { useState } from 'react';

export default function TechSearchBar({ onSearch }) {
  const [query, setQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault(); 
    if (query.trim() !== '') {
      onSearch(query.trim());
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-4xl mx-auto">
      <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4">
        <div className="relative flex-1 w-full">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search NASA technology, software, or innovations..."
            className="w-full px-5 sm:px-6 py-3 sm:py-4 rounded-xl bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-sm sm:text-base"
          />
          <div className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500">
            <span className="text-lg">🔍</span>
          </div>
        </div>
        <button
          type="submit"
          className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl transition-all duration-200 font-semibold shadow-lg hover:shadow-xl text-sm sm:text-base whitespace-nowrap"
        >
          Search Database
        </button>
      </div>
    </form>
  );
}
