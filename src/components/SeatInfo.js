import React, { useState } from 'react'
import { FaShip } from "react-icons/fa";
import { IoIosBed } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import {CSSTransition } from "react-transition-group";

function SeatInfo() {
  const [showDetails, setShowDetails] = useState(true)
  const cabinInfo = [{name:"Ocean view cabin", guest: "04"}, {name:"Mini Suite cabin", guest:"04"}]
  return (
    <>
    <div className='seat-info w-full bg-bg-card pt-6 rounded-tr-lg rounded-tl-lg shadow-lg'>
        <h1 className='font-bold text-xl font-poppins px-6'>Mumbai - At Sea - Mumbai</h1>
        <div className="duration flex justify-between items-center px-6 mt-4 border-b border-gray-300 pb-4">
          <div className="duration-from w-1/3 text-center">
            <p className='text-lg font-bold font-poppins'>Feb 15,2024</p>
            <p className='text-sm font-bold mt-2 text-gray-500 font-poppins'>Saturday 06:30 PM</p>
          </div>
          <div className="center-icon w-1/3 flex items-center justify-center">
           
            <span>-----</span>
            <div className="ship-icon  p-2 rounded-full bg-primary w-8 h-8 flex items-center justify-center ">
            <FaShip className='w-6 h-6 text-white ' />
            </div>
            
            <span>-----</span>
            </div> 
          
          <div className="duration-to w-1/3 text-center">
            <p className='text-lg font-bold font-poppins'>Feb 15,2024</p>
            <p className='text-sm font-bold mt-2 text-gray-500 font-poppins'>Saturday 06:30 PM</p>
          </div>
        </div>
        {showDetails && (
  <CSSTransition
    in={showDetails}
    timeout={300} // Duration of the transition in milliseconds
    classNames="fade"
    unmountOnExit
  >
    <div className="cabin-info px-6">
      {cabinInfo.map((cabin, index) => (
        <div key={index} className="cabin border-b border-gray-300 py-4 flex justify-between items-center">
          <div className="c-left">
            <p className='font-light font-poppins text-lg flex items-center space-x-2 '><IoIosBed className='w-6 h-6 text-primary mr-2' /> CABIN {index}</p>
            <p className='font-poppins font-medium text-lg mt-2'>{cabin.name}</p>
          </div>
          <div className="c-right text-right">
            <p className='font-poppins text-lg font-light '>GUEST No</p>
            <p className='font-poppins text-lg font-medium text-primary'>{cabin.guest}</p>
          </div>
        </div>
      ))}
    </div>
  </CSSTransition>
)}
        
        
    </div>
    <div onClick={() => setShowDetails(!showDetails)} className="toggle-tab bg-white w-full h-14 border border-gray-300 border-t-0 flex justify-center items-center cursor-pointer text-blue-500 rounded-bl-lg rounded-br-lg">
              <p className='text-lg font-poppins font-bold mr-2'>{showDetails ? "Hide" : "Show"} Details</p>
              {showDetails ? <IoIosArrowDown className='w-6 h-6 font-bold text-lg rotate-180' /> : <IoIosArrowDown className='w-6 h-6 font-bold text-lg ' />}
        </div>
    </>
  )
}

export default SeatInfo