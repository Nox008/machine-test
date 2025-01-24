import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <div className="text-sm text-gray-400 mb-4 md:mb-0">
          © 2024 Deepnetsoft Solutions. All rights reserved.
        </div>

        <div className="flex space-x-6">
          <a href="#" className="text-sm text-gray-400 hover:text-blue-400 transition duration-300">
            Terms and Conditions
          </a>
          <a href="#" className="text-sm text-gray-400 hover:text-blue-400 transition duration-300">
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;