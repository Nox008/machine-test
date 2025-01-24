import React from 'react';
import logo from '../assets/logo.png';

const ContactInfo = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center space-y-8 md:space-y-0 md:space-x-8 p-8 bg-black">
      <div className="flex flex-col items-center justify-center p-4 border-2 border-gray-600 rounded-lg w-full md:w-96 h-36 bg-black">
        <h2 className="text-lg mb-1 text-blue-400 font-oswald">CONNECT WITH US</h2>
        <p className="text-sm text-gray-500">+91 9567843340</p>
        <p className="text-sm text-gray-500">info@deepnetsoft.com</p>
      </div>

      <div className="flex flex-col items-center justify-center p-4 border-2 border-gray-600 rounded-lg w-full md:w-96 h-36 bg-black">
        <img
          src={logo}
          alt="Deep Net Soft Logo"
          className="w-30 h-12 mb-1"
        />
        <h1 className="text-3xl">
          <span className="text-blue-400 font-oswald">DEEP</span>
          <span className="text-white font-oswald">NET</span>
          <span className="text-gray-400 font-oswald">SOFT</span>
        </h1>
      </div>

      <div className="flex flex-col items-center justify-center p-4 border-2 border-gray-600 rounded-lg w-full md:w-96 h-36 bg-black">
        <h2 className="text-lg mb-1 text-blue-400 font-oswald">FIND US</h2>
        <p className="text-sm text-gray-300 text-center">
          First floor, Geo infopark, Infopark EXPY, Kakkanad
        </p>
      </div>
    </div>
  );
};

export default ContactInfo;