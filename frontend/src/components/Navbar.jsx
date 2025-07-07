import React, { useState, useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { AppContext } from "../context/AppContext.jsx";
import { assets } from "../assets/assets.js";

const Navbar = () => {
  const { user, logout } = useContext(AppContext);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  const handleLinkClick = () => {
    setMenuOpen(false);
    window.scrollTo(0, 0);
  };

  return (
    <div className="w-full flex justify-between items-center h-20 px-4 sm:px-8 top-0 sticky z-50 bg-light-grey ">
      {/* Logo */}
      <Link to="/" aria-label="Home">
        <img
          src="/logoTravel.png"
          alt="Logo"
          className="md:w-[180px]"
          loading="lazy"
        />
      </Link>

      {/* Desktop Nav */}
      <div className="hidden sm:flex items-center gap-6">
        <ul className="flex gap-6 text-gray-700">
          <li>
            <Link
              to="/"
              className={`hover:text-teal-500 transition-colors ${
                location.pathname === "/" ? "text-teal-500 font-bold" : ""
              }`}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className={`hover:text-teal-500 transition-colors ${
                location.pathname === "/about" ? "text-teal-500 font-bold" : ""
              }`}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/tours"
              className={`hover:text-teal-500 transition-colors ${
                location.pathname === "/tours" ? "text-teal-500 font-bold" : ""
              }`}
            >
              Tours
            </Link>
          </li>
        </ul>

        {user ? (
          <div className="flex items-center gap-4">
            <div className="relative group">
              <img
                src={user.profilePic || assets.user}
                alt="Profile"
                width={40}
                className="rounded-full drop-shadow-md"
              />
              <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 p-2 bg-black text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-10">
                Hi, {user.name}
              </div>
            </div>
            <button
              onClick={logout}
              className="px-4 py-2 bg-gradient-to-b from-sky-500 to-teal-500 text-white rounded hover:from-sky-800 hover:to-teal-700 transition-all"
            >
              Logout
            </button>
          </div>
        ) : (
          <Link to="/login">
            <button className="px-4 py-2 bg-gradient-to-b from-sky-500 to-teal-500 text-white rounded hover:from-sky-800 hover:to-teal-700 transition-all">
              Login
            </button>
          </Link>
        )}
      </div>

      {/* Mobile Nav Trigger */}
      <div className="flex items-center gap-4 sm:hidden">
        {user && (
          <div className="relative group">
            <img
              src={user.profilePic || assets.user}
              alt="Profile"
              width={32}
              className="drop-shadow-md"
            />
            <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 p-2 bg-black text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-10">
              Hi, {user.name}
            </div>
          </div>
        )}

        <button
          onClick={toggleMenu}
          aria-expanded={menuOpen}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          {menuOpen ? (
            <X className="text-black w-6 h-6" />
          ) : (
            <Menu className="text-black w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black bg-opacity-20 z-40"
            onClick={toggleMenu}
            aria-hidden="true"
          ></div>

          {/* Menu Panel */}
          <div className="sm:hidden absolute top-16 left-0 right-0 w-full bg-sky-100 p-6 z-50 animate-fadeIn">
            <ul className="flex flex-col items-center gap-6 text-lg">
              <li>
                <Link
                  to="/"
                  className={`hover:text-teal-500 transition-colors ${
                    location.pathname === "/" ? "text-teal-500 font-bold" : ""
                  }`}
                  onClick={handleLinkClick}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className={`hover:text-teal-500 transition-colors ${
                    location.pathname === "/about"
                      ? "text-teal-500 font-bold"
                      : ""
                  }`}
                  onClick={handleLinkClick}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/tours"
                  className={`hover:text-teal-500 transition-colors ${
                    location.pathname === "/tours"
                      ? "text-teal-500 font-bold"
                      : ""
                  }`}
                  onClick={handleLinkClick}
                >
                  Tours
                </Link>
              </li>

              {user ? (
                <li>
                  <button
                    onClick={() => {
                      logout();
                      handleLinkClick();
                    }}
                    className="w-full px-6 py-2 bg-gradient-to-b from-sky-500 to-teal-500 text-white rounded hover:from-sky-800 hover:to-teal-700 transition-all"
                  >
                    Logout
                  </button>
                </li>
              ) : (
                <li>
                  <Link
                    to="/login"
                    onClick={handleLinkClick}
                    className="w-full"
                  >
                    <button className="w-full px-6 py-2 bg-gradient-to-b from-sky-500 to-teal-500 text-white rounded hover:from-sky-800 hover:to-teal-700 transition-all">
                      Login
                    </button>
                  </Link>
                </li>
              )}
            </ul>
          </div>
        </>
      )}
    </div>
  );
};

export default Navbar;