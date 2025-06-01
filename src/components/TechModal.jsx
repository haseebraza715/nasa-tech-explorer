
export default function TechModal({ item, onClose }) {
  if (!item) return null;

  return (
    <div className="fixed inset-0 z-50 flex">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/70 backdrop-blur-sm transition-opacity duration-300"
        onClick={onClose}
      ></div>

      {/* Side drawer */}
      <div className="relative ml-auto bg-gray-900 w-full sm:max-w-2xl lg:max-w-3xl h-full shadow-2xl transition-transform duration-300 ease-in-out overflow-y-auto border-l border-gray-700">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 bg-gray-800 hover:bg-gray-700 text-gray-400 hover:text-white rounded-full flex items-center justify-center transition-all duration-200 border border-gray-600"
        >
          <span className="text-xl">×</span>
        </button>

        <div className="p-6 sm:p-8 space-y-6">
          {/* Image */}
          {item.image && (
            <div className="rounded-xl overflow-hidden bg-gray-800 border border-gray-700">
              <img
                src={item.image}
                alt="Preview"
                className="w-full h-48 sm:h-56 object-cover"
              />
            </div>
          )}

          {/* Title */}
          <h2 className="text-2xl sm:text-3xl font-bold text-white leading-tight pr-12">
            {item.title}
          </h2>

          {/* Description */}
          <div className="bg-gray-800 border border-gray-700 rounded-lg p-4 sm:p-6">
            <h3 className="text-lg font-semibold text-white mb-3">Description</h3>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
              {item.description}
            </p>
          </div>

          {/* Info Section */}
          <div className="bg-gray-800 border border-gray-700 rounded-lg p-4 sm:p-6">
            <h3 className="text-lg font-semibold text-white mb-4">Details</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
              <div className="flex flex-col">
                <span className="text-gray-400 text-xs uppercase tracking-wide mb-1">Tech ID</span>
                <span className="text-white font-mono">{item.id}</span>
              </div>
              {item.category && (
                <div className="flex flex-col">
                  <span className="text-gray-400 text-xs uppercase tracking-wide mb-1">Category</span>
                  <span className="text-white">{item.category}</span>
                </div>
              )}
              {item.center && (
                <div className="flex flex-col">
                  <span className="text-gray-400 text-xs uppercase tracking-wide mb-1">NASA Center</span>
                  <span className="text-white">{item.center}</span>
                </div>
              )}
              {item.date && (
                <div className="flex flex-col">
                  <span className="text-gray-400 text-xs uppercase tracking-wide mb-1">Date</span>
                  <span className="text-white">{item.date}</span>
                </div>
              )}
            </div>
          </div>

          {/* Links */}
          {(item.url || item.github) && (
            <div className="pt-2">
              <h3 className="text-lg font-semibold text-white mb-4">Resources</h3>
              <div className="flex flex-col sm:flex-row gap-3">
                {item.url && (
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-600 hover:bg-blue-700 text-white text-center px-6 py-3 rounded-lg transition-colors font-semibold flex items-center justify-center space-x-2"
                  >
                    <span>🔗</span>
                    <span>Visit NASA Page</span>
                  </a>
                )}
                {item.github && (
                  <a
                    href={item.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-700 hover:bg-gray-600 text-white text-center px-6 py-3 rounded-lg transition-colors font-semibold flex items-center justify-center space-x-2"
                  >
                    <span>💻</span>
                    <span>GitHub Repository</span>
                  </a>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
