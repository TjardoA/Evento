export default function ArtistCard() {  
  return (
    <article className="bg-white/90 backdrop-blur-md shadow-2xl border border-gray-200 rounded-2xl overflow-hidden max-w-md mx-auto transition hover:shadow-blue-200">
      <img
        className="w-full h-64 object-cover"
        src="https://placehold.co/600x400"
        alt="Artist"
      />
      <div className="p-6">
        <h2 className="text-gray-900 font-extrabold text-2xl mb-3 tracking-tight">
          Artist Name
        </h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          Description for artist. Engaging, short and to the point.
        </p>
        <div className="flex justify-between items-center">
          <a
            href="#"
            className="inline-flex items-center px-5 py-2 bg-blue-700 text-white font-medium rounded-full shadow hover:bg-blue-800 transition"
          >
            More info
            <svg
              className="ml-2 h-5 w-5"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 
                1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 
                11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 
                0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </a>
          <span className="text-sm text-gray-500 italic">Upcoming concert</span>
        </div>
      </div>
    </article>
  );
}
