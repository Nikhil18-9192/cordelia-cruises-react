import React from 'react';
import logo from '../assets/cordelia-new-logo.svg';
import offer from '../assets/offer-icon.svg';

const Header = () => {
  const menuItems = [
    { img: offer, title: 'Offers' },
    { img: null, title: 'Destinations' },
    { img: null, title: 'Events' },
    { img: null, title: 'Ships' },
    { img: null, title: 'Contacts' },
  ];

  return (
    <header className="header bg-white shadow-md flex items-center justify-between px-56 sm:px-20 md:px-20 lg:px-20 xl:px-40 py-6 fixed top-0 z-10 w-full">
      <div className="logo w-1/5 h-16">
        <img src={logo} alt="logo" />
      </div>
      <nav className="menu-item flex space-x-9 w-2/5">
        {menuItems.map((item, index) => (
          <div className="menu flex items-center space-x-2 justify-center" key={index}>
            {item.img !== null ? (
              <img src={item.img} alt="menu logo" className="rotate-icon h-6 w-6 mr-2" />
            ) : null}
            <p className="text-black-700 text-xl font-medium cursor-pointer">{item.title}</p>
          </div>
        ))}
      </nav>
      <div className="buttons flex space-x-2 w-2/5 flex justify-end">
        <button className="bg-white-200 font-poppins border-2 text-primary font-bold border-primary text-lg text-gray-700 px-6 py-2 rounded hover:bg-primary hover:text-white transition duration-300 ease-in-out">
          Find a Cruise
        </button>
        <button className="bg-white-200 font-poppins border-2 text-primary font-bold border-primary text-lg text-gray-700 px-6 py-2 rounded hover:bg-primary hover:text-white transition duration-300 ease-in-out">
          Web Check-In
        </button>
      </div>
    </header>
  );
};

export default Header;