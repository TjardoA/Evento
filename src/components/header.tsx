import { Link } from "react-router-dom";
import { useState } from "react";

const NavItems: string[] = [
  "Home",
  "Concerts",
  "Up-Coming",
  "VIP",
  "Recommended",
];

export default function Navbar() {
  const [search, setSearch] = useState<string>("");

  return (
    <header className="w-full z-50">
      <div className="flex items-center justify-between px-8 py-4 bg-black/70 backdrop-blur-md shadow-lg">
        {/* Logo */}
        <Link
          to="/"
          className="text-3xl font-extrabold text-sky-400 tracking-wide drop-shadow-lg"
        >
          EventManager
        </Link>

        {/* Search */}
        <div className="hidden md:flex flex-1 justify-center px-6">
          <div className="relative w-full max-w-sm">
            <input
              className="bg-gray-900/80 text-white px-4 py-2 pl-10 rounded-full w-full shadow-inner focus:outline-none focus:ring-2 focus:ring-sky-400 transition"
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search tickets, artists..."
            />
            <span className="absolute left-3 top-2.5 text-gray-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z"
                />
              </svg>
            </span>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex items-center space-x-3">
          <Link
            to="/tickets"
            className="bg-sky-400 text-white px-5 py-2 rounded-full font-semibold shadow hover:bg-sky-500 transition"
          >
            Tickets
          </Link>
          <Link
            to="/login"
            className="flex items-center justify-center bg-gray-800 text-sky-400 rounded-full w-10 h-10 hover:bg-sky-400 hover:text-white transition shadow"
            title="Login/Sign up"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5.121 17.804A13.937 13.937 0 
                0112 15c2.5 0 4.847.655 6.879 
                1.804M15 11a3 3 0 11-6 0 3 3 
                0 016 0z"
              />
            </svg>
          </Link>
        </div>
      </div>

      {/* Nav */}
      <nav className="bg-black/80 backdrop-blur-sm px-8 py-3 flex items-center justify-center shadow-md">
        <div className="flex gap-6">
          {NavItems.map((item, i) => (
            <Link
              key={i}
              to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
              className="relative text-gray-200 hover:text-sky-400 font-medium transition after:content-[''] after:block after:w-0 after:h-[2px] after:bg-sky-400 after:transition-all hover:after:w-full after:mt-1"
            >
              {item}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
