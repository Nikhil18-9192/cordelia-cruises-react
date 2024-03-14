import React, { useState } from 'react'
import { MdLocalOffer } from "react-icons/md";

function PaymentInfo() {
  const [showDetails, setShowDetails] = useState(true)
  
  return (
    <div className='payment-info rounded-lg w-full  bg-white shadow-lg mt-6 cursor-pointer' onClick={()=> setShowDetails(!showDetails)}>
        <div className="top-tab flex justify-between items-center px-6 pt-6 pb-4 border-b border-gray-300">
          <p className='font-medium text-2xl font-poppins capitalize'>Price Details</p>
          <p className='text-bold text-lg font-poppins text-blue-500 capitalize'>{showDetails ? 'Hide' : 'Show'} price Breakup</p>
        </div>
        {
          showDetails ? 
          (
            <div className="middle-tab pt-6 w-full font-poppins">
          <div className="item flex justify-between items-center text-lg px-6 font-medium mb-4 capitalize">
            <p>Ocean View Cabin</p>
            <p>&#x20B9;18260</p>
          </div>
          <div className="item flex justify-between items-center text-lg px-6 font-medium mb-4 capitalize">
            <p>Mini Suite Cabin</p>
            <p>&#x20B9;18260</p>
          </div>
          <div className="item flex justify-between items-center text-lg px-6 font-medium mb-4 capitalize">
            <p>Service Charge and Levies</p>
            <p>&#x20B9;19754</p>
          </div>
          <div className="item flex justify-between items-center text-lg px-6 font-medium mb-4 capitalize">
            <p>Fuel Surcharge</p>
            <p>&#x20B9;4980</p>
          </div>
          <div className="item sale flex justify-between items-center text-lg px-6 font-medium mb-4 text-green-500 capitalize">
            <div className='flex items-center space-x-2'>
              <p>Kids Sail Offer</p>
              <MdLocalOffer className='text-green-500 w-4 h-4' />
            </div>
            
            <p>&#x20B9;5980</p>
          </div>
          <div className="item flex justify-between items-center text-lg px-6 font-medium mb-4 capitalize">
            <p>Sub Total</p>
            <p>&#x20B9;58384</p>
          </div>
          <div className="taxes bg-bg-card px-6 py-4">
          <div className="item flex justify-between items-center text-lg font-medium mb-4 capitalize">
            <p>Taxes</p>
            <p>&#x20B9;14109</p>
          </div>
          <div className="item flex justify-between items-center text-lg font-medium mb-4 capitalize">
            <p>GST</p>
            <p>&#x20B9;14109</p>
          </div>
          </div>
        </div>
          )
          : null
        }
        <div className="total-tab font-poppins p-6">
          <div className={`item flex justify-between items-center font-semibold capitalize ${showDetails ? 'text-3xl' : 'text-xl'}`}>
            <p>Total Fare</p>
            <p className='text-primary'>&#x20B9;67260</p>
          </div>
        </div>
    </div>
  )
}

export default PaymentInfo