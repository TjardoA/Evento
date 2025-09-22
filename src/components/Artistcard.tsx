export default function ArtistCard() {
  return (
    <article className="bg-white rounded-2xl shadow-lg overflow-hidden transition transform hover:-translate-y-2 hover:shadow-2xl max-w-sm mx-auto">
      {/* Image */}
      <div className="relative h-56 w-full overflow-hidden">
        <img
          src="/sabrina.jpg"
          alt="Artist"
          className="w-full h-full object-cover"
        />
        <span className="absolute top-3 left-3 bg-red-600 text-white text-xs font-semibold px-3 py-1 rounded-full shadow">
          Live Concert
        </span>
      </div>

      {/* Content */}
      <div className="p-6">
        <h2 className="text-gray-900 font-bold text-2xl mb-2">Sabrina</h2>
        <p className="text-gray-600 text-sm leading-relaxed mb-4">
          Join Sabrina live on stage for an unforgettable night of music and
          fun!
        </p>

        {/* Concert Info */}
        <div className="mb-4">
          <p className="text-gray-700 font-medium text-sm">
            <span className="font-semibold">Date:</span> Sept 25, 2025
          </p>
          <p className="text-gray-700 font-medium text-sm">
            <span className="font-semibold">Time:</span> 8:00 PM
          </p>
          <p className="text-gray-700 font-medium text-sm">
            <span className="font-semibold">Location:</span> Amsterdam Arena
          </p>
        </div>

        {/* Actions */}
        <div className="flex items-center justify-between">
          <a
            href="#"
            className="inline-flex items-center px-4 py-2 bg-red-600 text-white text-sm font-medium rounded-full hover:bg-red-700 transition shadow"
          >
            Buy Tickets
            <svg
              className="ml-2 h-4 w-4"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 
                1 0 010 1.414l-6 6a1 1 0 
                01-1.414-1.414L14.586 11H3a1 
                1 0 110-2h11.586l-4.293-4.293a1 
                1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </a>
          <span className="text-xs text-gray-500 italic">
            Limited seats available
          </span>
        </div>
      </div>
    </article>
  );
}
