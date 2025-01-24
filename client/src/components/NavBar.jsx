import React from "react";
import logo from "../assets/logo.png"

const Navbar = () => {
  return (
    <nav className="text-white px-6 py-2 flex justify-between items-center" style={{backgroundColor: '#121618'}}>
        <style>
         @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@200..700&family=Outfit:wght@100..900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Prata&display=swap');
        </style>
      <div className="flex items-center space-x-4" style={{fontFamily: 'Oswald'}}>
        <img src={logo} alt="Logo" className="h-10" />
        <span className="text-xl font-bold">DEEP</span>
        <span className="text-xl font-bold">NET</span>
        <span className="text-xl font-bold">SOFT</span>
      </div>
      <ul className="flex space-x-6" style={{fontFamily: 'Oswald'}}>
        <li><a href="#" className="hover:text-blue-400">Home</a></li>
        <li><a href="#" className="hover:text-blue-400">Menu</a></li>
        <li><a href="#" className="hover:text-blue-400">Make a Reservation</a></li>
        <li><a href="#" className="hover:text-blue-400">Contact Us</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
