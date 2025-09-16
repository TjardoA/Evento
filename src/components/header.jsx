import { Link } from "react-router-dom";
import { useState } from "react";

const NavItems = ["Home", "Concerts", "Up-Coming", "VIP", "Recommended"];

export default function Navbar() {
  const [search, setSearch] = useState("");
  return (
    <header className="bg-black/40 shadow-lg ">
      <div className="flex flex-col md:flex-row items-center justify-between px-8 py-6 bg-black/60 rounded-b-1xl shadow-lg">
        {/* Logo/Brand */}
        <Link
          to="/"
          className="text-3xl font-extrabold text-sky-400 mb-2 md:mb-0 tracking-wide drop-shadow-lg"
        >
          EventManager
        </Link>
        {/* Search */}
        <div className="flex-1 flex justify-center">
          <div className="relative w-full max-w-xs">
            <input
              className="bg-white px-4 py-2 pl-10 rounded-full w-full text-gray-800 shadow focus:outline-none focus:ring-2 focus:ring-sky-400 transition"
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Zoek tickets, artiesten..."
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
        {/* Login & Tickets */}
        <div className="flex items-center space-x-3">
          <Link
            to="/tickets"
            className="bg-sky-400 text-white px-4 py-2 rounded-full font-semibold shadow hover:bg-sky-500 transition"
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
                d="M5.121 17.804A13.937 13.937 0 0112 15c2.5 0 4.847.655 6.879 1.804M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
          </Link>
        </div>
      </div>
      <nav className="bg-[#14213d]/80 px-8 py-4 flex items-center justify-center rounded-b-2xl shadow">
        <div className="flex flex-wrap gap-6">
          {NavItems.map((item, i) => (
            <Link
              key={i}
              to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
              className={`relative px-4 py-2 rounded-full font-medium transition shadow-sm ${
                item === "Home"
                  ? "bg-sky-400 text-white hover:bg-sky-500"
                  : "bg-gray-800 text-gray-200 hover:bg-sky-400 hover:text-white"
              }`}
            >
              {item}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
