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
    <div className="flex h-screen">
        <style>
        @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@200..700&family=Outfit:wght@100..900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Prata&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Kelly+Slab&family=Oswald:wght@200..700&family=Outfit:wght@100..900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Prata&display=swap');
      </style>
      {/* Left Section - 10% width */}
      <div className="w-[10%] flex items-center justify-center relative">
        <div 
          className="absolute inset-0 bg-black opacity-90" // Very dark overlay
          style={{
            backgroundImage: `url(${banner})`,
            backgroundPosition: 'center',
            opacity: '1', // Adjust opacity of the background image
            filter: 'brightness(0.2) grayscale(100%)' // Much darker and desaturated
          }}
        ></div>
      </div>

      {/* Middle Section - 80% width with background image */}
      <div 
        className="w-[80%] overflow-y-auto p-6 flex flex-col items-center justify-center relative"
        style={{
          backgroundImage: `url(${middleBackground})`, // Set background image
          backgroundPosition: 'center',
          backgroundSize: 'cover'
        }}
      >
        {/* Dark overlay for the middle section */}
        <div className="absolute inset-0 bg-black opacity-70"></div>

        {/* Inner Border (White) with Background Image */}
        <div 
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[90%] aspect-[3/1.2] border-2 border-white p-6"
          style={{
            backgroundImage: `url(${middleBackground})`, // Set background image
            backgroundPosition: 'center',
            backgroundSize: 'cover'
          }}
        >
          {/* Dark overlay for the inner border */}
          <div className="absolute inset-0 bg-black opacity-70"></div>

          {/* Heading with Straight Lines on Left and Right */}
          <div className="relative z-10 flex items-center justify-center mb-8"> {/* Increased margin-bottom */}
            <hr className="border-t-2 border-white w-8 mx-2 pb-5" /> {/* Left line */}
            <h2 className="text-4xl font-extrabold text-white pb-15 pt-10" style={{fontFamily:'oswald',textShadow: "2px 3px 4px #800020"}}>BRUNCH COCKTAILS</h2> {/* Bigger and bolder heading */}
            <hr className="border-t-2 border-white w-8 mx-2 pb-5" /> {/* Right line */}
          </div>

          {/* Menu Items */}
          <div className="relative z-10 grid grid-cols-2 gap-4 w-full h-full overflow-y-auto">
            {menuItems.map(item => (
              <div key={item._id} className="text-white"> {/* Transparent background and white text */}
                {/* Item Name and Price */}
                <div className="flex justify-between items-center">
                  <h3 className="text-3xl " style={{fontFamily:'oswald'}}>{item.name}</h3> {/* Larger text for item name */}
                  <div className="flex items-center">
                    <span>....................................</span> {/* Dots separator (no margin) */}
                    <p className="text-xl font-bold ml-2">${item.price}</p> {/* Price on the right */}
                  </div>
                </div>
                {/* Item Description */}
                <p className="text-base text-gray-300 mt-1" style={{fontFamily:'kelly slab'}}>{item.description}</p> {/* Larger text for description */}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right Section - 10% width */}
      <div className="w-[10%] flex items-center justify-center relative">
        <div 
          className="absolute inset-0 bg-black opacity-90" // Very dark overlay
          style={{
            backgroundImage: `url(${banner})`,
            backgroundPosition: 'center',
            opacity: '1', // Adjust opacity of the background image
            filter: 'brightness(0.2) grayscale(100%)' // Much darker and desaturated
          }}
        ></div>
      </div>
    </div>
  );
};

export default Menu;