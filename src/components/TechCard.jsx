// components/TechCard.js
export default function TechCard({ item, onClick }) {
  return (
    <div
      onClick={() => onClick(item)}
      className="bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-700 cursor-pointer p-5 sm:p-6 flex flex-col justify-between h-full hover:border-gray-600 hover:bg-gray-750 group"
    >
      {/* Title */}
      <h2 className="text-lg sm:text-xl font-semibold text-white mb-3 leading-snug line-clamp-2 group-hover:text-blue-300 transition-colors">
        {item.title}
      </h2>

      {/* Description */}
      <p className="text-sm text-gray-400 line-clamp-3 mb-4 leading-relaxed flex-grow">
        {item.description}
      </p>

      {/* Metadata */}
      <div className="flex items-center justify-between mt-auto pt-3 border-t border-gray-700">
        <span className="text-xs font-medium text-white bg-blue-600 px-3 py-1 rounded-full hover:bg-blue-500 transition-colors">
          {item.center || 'NASA'}
        </span>
        <span className="text-xs text-gray-500 font-mono">{item.id}</span>
      </div>
    </div>
  );
}
