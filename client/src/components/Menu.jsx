import React, { useEffect, useState } from 'react';
import axios from 'axios';
import banner from '../assets/banner.png';
import middleBackground from '../assets/midbanner.png';

const Menu = () => {
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/menu')
      .then(response => setMenuItems(response.data))
      .catch(error => console.error('Error fetching menu items:', error));
  }, []);

  return (
    <div className="flex flex-col lg:flex-row h-full min-h-screen">
      {/* Import Fonts in Global CSS */}
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@200..700&family=Outfit:wght@100..900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Prata&display=swap');
          @import url('https://fonts.googleapis.com/css2?family=Kelly+Slab&family=Oswald:wght@200..700&family=Outfit:wght@100..900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Prata&display=swap');
        `}
      </style>

      {/* Left Section - Hidden on small screens, visible on larger screens */}
      <div className="hidden lg:block lg:w-[10%] flex items-center justify-center relative">
        <div 
          className="absolute inset-0 bg-black opacity-90"
          style={{
            backgroundImage: `url(${banner})`,
            backgroundPosition: 'center',
            opacity: '1',
            filter: 'brightness(0.2) grayscale(100%)'
          }}
        ></div>
      </div>

      {/* Middle Section - Full width on small screens, 80% on larger screens */}
      <div 
        className="w-full lg:w-[80%] flex flex-col items-center justify-center relative py-4 lg:py-24"
        style={{
          backgroundImage: `url(${middleBackground})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          minHeight: '100vh' // Ensure the middle section takes full height
        }}
      >
        {/* Dark overlay for the middle section */}
        <div className="absolute inset-0 bg-black opacity-70"></div>

        {/* Inner Border (White) with Background Image */}
        <div 
          className="relative w-full h-[80vh] lg:h-full max-w-4xl mx-auto border-2 border-white p-4 lg:p-6"
          style={{
            backgroundImage: `url(${middleBackground})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover'
          }}
        >
          {/* Dark overlay for the inner border */}
          <div className="absolute inset-0 bg-black opacity-70"></div>

          {/* Heading with Straight Lines on Left and Right */}
          <div className="relative z-10 flex items-center justify-center mb-4 lg:mb-8">
            <hr className="border-t-2 border-white w-4 lg:w-8 mx-2" />
            <h2 className="text-2xl lg:text-4xl font-extrabold text-white" style={{ fontFamily: 'Oswald', textShadow: "2px 3px 4px #800020" }}>
              BRUNCH COCKTAILS
            </h2>
            <hr className="border-t-2 border-white w-4 lg:w-8 mx-2" />
          </div>

          {/* Menu Items */}
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-4 w-full">
            {menuItems.map(item => (
              <div key={item._id} className="text-white">
                {/* Item Name and Price */}
                <div className="flex justify-between items-center">
                  <h3 className="text-xl lg:text-3xl" style={{ fontFamily: 'Oswald' }}>{item.name}</h3>
                  <div className="flex items-center">
                    <span>....................................</span>
                    <p className="text-lg lg:text-xl font-bold ml-2">${item.price}</p>
                  </div>
                </div>
                {/* Item Description */}
                <p className="text-sm lg:text-base text-gray-300 mt-1" style={{ fontFamily: 'Kelly Slab' }}>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right Section - Hidden on small screens, visible on larger screens */}
      <div className="hidden lg:block lg:w-[10%] flex items-center justify-center relative">
        <div 
          className="absolute inset-0 bg-black opacity-90"
          style={{
            backgroundImage: `url(${banner})`,
            backgroundPosition: 'center',
            opacity: '1',
            filter: 'brightness(0.2) grayscale(100%)'
          }}
        ></div>
      </div>
    </div>
  );
};

export default Menu;