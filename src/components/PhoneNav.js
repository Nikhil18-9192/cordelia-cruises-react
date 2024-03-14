import React, { useContext } from 'react'
import offer from '../assets/offer-icon.svg';
import { RxHamburgerMenu } from "react-icons/rx";
import GlobalContext from './context/CreateContext';

function PhoneNav() {
    const {state, dispatch} = useContext(GlobalContext)
    const menuState = state.toggle
    const menuItems = [
        { img: offer, title: 'Offers' },
        { img: null, title: 'Destinations' },
        { img: null, title: 'Events' },
        { img: null, title: 'Ships' },
        { img: null, title: 'Contacts' },
      ];
  return (
    <div className='phone-nav  h-full bg-white fixed top-0 right-0 z-50 p-4 shadow-lg'>
        <RxHamburgerMenu className='absolute top-8 right-7 text-3xl text-primary font-bold' onClick={() => dispatch({type: "toggle", payload: !menuState})} />  
        <nav className="menu-item flex flex-col  w-full  mt-20">
        {menuItems.map((item, index) => (
          <div className="menu mb-4 flex items-center justify-start" onClick={() => dispatch({type: "toggle", payload: !menuState})} key={index}>
            
            <p className="text-black-700 text-xl font-medium cursor-pointer">{item.title}</p>
            {item.img !== null ? (
              <img src={item.img} alt="menu logo" className="rotate-icon h-6 w-6 ml-4" />
            ) : null}
          </div>
        ))}
      </nav>
      <div className="buttons ">
        <button className="bg-white-200 mb-4 font-poppins border-2 text-primary font-bold border-primary text-lg text-gray-700 px-6 py-2 rounded hover:bg-primary hover:text-white transition duration-300 ease-in-out">
          Find a Cruise
        </button>
        <button className="bg-white-200 font-poppins border-2 text-primary font-bold border-primary text-lg text-gray-700 px-6 py-2 rounded hover:bg-primary hover:text-white transition duration-300 ease-in-out">
          Web Check-In
        </button>
      </div>
    </div>
  )
}

export default PhoneNav