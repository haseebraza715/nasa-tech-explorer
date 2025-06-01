import { useState } from 'react';
import TechCard from '../components/TechCard';
import TechSearchBar from '../components/TechSearchBar';
import TechModal from '../components/TechModal';
import { fetchPatents } from '../api/patents';
import { fetchSoftware } from '../api/software';


export default function Home() {
  const [selectedType, setSelectedType] = useState('patent');
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [searched, setSearched] = useState(false);

  const handleSearch = async (query) => {
    setLoading(true);
    setSearched(true);
    let results = [];
    if (selectedType === 'patent') results = await fetchPatents(query);
    else if (selectedType === 'software') results = await fetchSoftware(query);
    setData(results);
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gray-900">
      <div className="px-4 sm:px-6 lg:px-8 py-8 sm:py-12 max-w-7xl mx-auto">
        
        {/* Header */}
        <header className="text-center mb-8 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4">
            NASA Tech Explorer
          </h1>
          <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto px-4">
            Discover and explore NASA technology patents and software solutions
          </p>
        </header>

        {/* Selector Tabs */}
        <div className="flex justify-center mb-8 sm:mb-10">
          <div className="inline-flex bg-gray-800 border border-gray-700 rounded-lg p-1 shadow-lg w-full sm:w-auto max-w-sm sm:max-w-none">
            {["patent", "software"].map((type) => (
              <button
                key={type}
                onClick={() => setSelectedType(type)}
                className={`flex-1 sm:flex-none px-4 sm:px-6 py-2 sm:py-3 rounded-md text-sm font-medium transition-all duration-200 ${
                  selectedType === type
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'text-gray-300 hover:text-white hover:bg-gray-700'
                }`}
              >
                <span className="hidden sm:inline">
                  {type.charAt(0).toUpperCase() + type.slice(1)}
                </span>
                <span className="sm:hidden">
                  {type === 'patent' ? '📄 Patents' : '💻 Software'}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Search */}
        <div className="mb-8 sm:mb-10">
          <TechSearchBar onSearch={handleSearch} />
        </div>

        {/* Loading */}
        {loading && (
          <div className="text-center py-8 sm:py-12">
            <div className="inline-flex items-center space-x-3">
              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-blue-500"></div>
              <p className="text-gray-300 font-medium text-sm sm:text-base">
                Searching NASA database...
              </p>
            </div>
          </div>
        )}

        {/* Empty State */}
        {!loading && searched && data.length === 0 && (
          <div className="text-center py-12 sm:py-16 px-4">
            <div className="text-gray-600 text-4xl sm:text-5xl mb-4">🔍</div>
            <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">No Results Found</h3>
            <p className="text-gray-400 text-sm sm:text-base max-w-md mx-auto">
              No {selectedType}s found matching your search criteria. Try different keywords.
            </p>
          </div>
        )}

        {/* Results Count */}
        {data.length > 0 && (
          <div className="mb-4 sm:mb-6 px-2">
            <p className="text-gray-400 text-sm">
              Showing {data.length} result{data.length !== 1 ? 's' : ''} for {selectedType}s
            </p>
          </div>
        )}

        {/* Results Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 mb-8">
          {data.map((item) => (
            <TechCard key={item.id} item={item} onClick={setSelectedItem} />
          ))}
        </div>

        {/* Welcome State */}
        {!searched && (
          <div className="text-center py-8 sm:py-12 px-4">
            <h3 className="text-xl sm:text-2xl font-semibold text-white mb-4">
              Welcome to NASA Tech Explorer
            </h3>
            <p className="text-gray-400 text-sm sm:text-base max-w-xl mx-auto mb-8 leading-relaxed">
              Search through NASA's collection of patents and software to discover innovative technologies and solutions.
            </p>
            
            {/* Feature Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
              <div className="bg-gray-800 border border-gray-700 rounded-lg p-4 sm:p-6 text-center hover:bg-gray-750 transition-colors">
                <div className="text-2xl sm:text-3xl mb-3">📄</div>
                <h4 className="font-semibold text-white mb-2 text-sm sm:text-base">Patents</h4>
                <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                  NASA inventions and breakthrough technologies
                </p>
              </div>
              <div className="bg-gray-800 border border-gray-700 rounded-lg p-4 sm:p-6 text-center hover:bg-gray-750 transition-colors">
                <div className="text-2xl sm:text-3xl mb-3">💻</div>
                <h4 className="font-semibold text-white mb-2 text-sm sm:text-base">Software</h4>
                <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                  Open-source tools and applications
                </p>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="mt-8 sm:mt-12 grid grid-cols-2 sm:grid-cols-3 gap-4 max-w-lg mx-auto">
              <div className="text-center">
                <div className="text-lg sm:text-xl font-bold text-blue-400">1000+</div>
                <div className="text-xs sm:text-sm text-gray-500">Patents</div>
              </div>
              <div className="text-center">
                <div className="text-lg sm:text-xl font-bold text-green-400">500+</div>
                <div className="text-xs sm:text-sm text-gray-500">Software Tools</div>
              </div>
              <div className="text-center col-span-2 sm:col-span-1">
                <div className="text-lg sm:text-xl font-bold text-purple-400">50+</div>
                <div className="text-xs sm:text-sm text-gray-500">Categories</div>
              </div>
            </div>
          </div>
        )}

        {/* Modal */}
        <TechModal item={selectedItem} onClose={() => setSelectedItem(null)} />
      </div>
    </div>
  );
}