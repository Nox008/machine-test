import React from "react";
import bgimg from "../assets/bg.jpg";

const Header = () => {
  return (
    <div>
    <header
      className="relative bg-cover bg-center h-100 text-center flex flex-col justify-center items-center"
      style={{
        backgroundImage: `url(${bgimg}), linear-gradient(to bottom, rgba(0, 0, 0, 0) 71%, rgba(0, 0, 0, 0) 50%)`,
        backgroundPosition: "top left", 
        backgroundRepeat: "no-repeat",     
        backgroundSize: "cover",       
      }}
    >
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@200..700&family=Outfit:wght@100..900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Prata&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Kelly+Slab&family=Oswald:wght@200..700&family=Outfit:wght@100..900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Prata&display=swap');
      </style>
      <h1
        className="text-6xl font-bold text-white"
        style={{
          textShadow: "2px 3px 4px #800020",
          fontFamily: "Oswald",
        }}
      >
        MENU
      </h1>
      <p
        className="mt-2"
        style={{
          fontFamily: "Kelly Slab",
          color: "#BBBBBB",
        }}
      >
        Please take a look at our menu featuring food, drinks, and brunch. 
        To place an order, use the "Order Online" button below.
      </p>
    </header>
    </div>
  );
};

export default Header;
