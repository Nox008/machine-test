import React from 'react';
import banner from '../assets/banner.png';

const Middle = () => {
  return (
    <div>
      <div
        className="h-20 text-center flex flex-col justify-center items-center relative"
        style={{
          backgroundImage: `url(${banner})`,
          backgroundPosition: 'center',
        }}
      >
        {/* Overlay for dimming the background */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.8)', // Black with opacity
            zIndex: 1,
          }}
        ></div>

        {/* Buttons and content */}
        <div
          className="flex mt-4 mb-4 space-x-4"
          style={{
            position: 'relative', // Ensure this content stays above the overlay
            zIndex: 2,
          }}
        >
          <button className="px-4 py-2 bg-black text-white border border-blue-500 hover:bg-sky-500">
            Food
          </button>
          <button className="px-4 py-2 bg-black text-white border border-blue-500 hover:bg-sky-500">
            Drinks
          </button>
          <button className="px-4 py-2 bg-black text-white border border-blue-500 hover:bg-sky-500">
            Brunch
          </button>
        </div>
      </div>
    </div>
  );
};

export default Middle;
