import React, { useState } from "react";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="text-white px-6 py-2 flex justify-between items-center" style={{ backgroundColor: '#121618' }}>
      <div className="flex items-center space-x-4" style={{ fontFamily: 'Oswald' }}>
        <img src={logo} alt="Logo" className="h-10" />
        {/* <span className="hidden md:inline text-xl font-bold">DEEP</span>
        <span className="hidden md:inline text-xl font-bold">NET</span>
        <span className="hidden md:inline text-xl font-bold">SOFT</span> */}
      </div>

      {/* Hamburger Menu Icon (Mobile Only) */}
      <div className="md:hidden">
        <button onClick={toggleMenu} className="text-white focus:outline-none">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
            />
          </svg>
        </button>
      </div>

      {/* Navigation Links */}
      <ul
        className={`${
          isMenuOpen ? "block" : "hidden"
        } md:flex md:space-x-6 absolute md:static top-16 left-0 w-full md:w-auto bg-gray-800 md:bg-transparent text-center py-4 md:py-0`}
        style={{ fontFamily: 'Oswald' }}
      >
        <li className="my-2 md:my-0">
          <a href="#" className="hover:text-blue-400 block px-4 py-2">Home</a>
        </li>
        <li className="my-2 md:my-0">
          <a href="#" className="hover:text-blue-400 block px-4 py-2">Menu</a>
        </li>
        <li className="my-2 md:my-0">
          <a href="#" className="hover:text-blue-400 block px-4 py-2">Make a Reservation</a>
        </li>
        <li className="my-2 md:my-0">
          <a href="#" className="hover:text-blue-400 block px-4 py-2">Contact Us</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;