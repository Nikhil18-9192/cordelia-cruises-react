import React, { useState } from 'react'
import gpay from '../assets/gpay.png';
import bharat from '../assets/bhim.png';
import phonepay from '../assets/phonepay.png';
import paytm from '../assets/paytm.png'

function Upi() {
    const [upiId, setUpiId] = useState('')
    const instructions = ['Enter your UPI ID and click on Pay', 
        'You will receive a request from payment gateway in your UPI app', 
        'Login to UPI app by entering your mpin & authorize payment']
  return (
    <div className='upi relative  w-full'>
        <h3 className='font-bold text-xl font-poppins '>Pay using UPI</h3>
        <div className="logos flex  space-x-4 items-center justify-start mt-8">
            <img className='logo-img w-24 h-14  border rounded' src={gpay} alt="gpay logo" />
            <img className='logo-img  w-24 h-14 border rounded' src={bharat} alt="bharat logo" />
            <img className='logo-img w-24 h-14  border rounded' src={phonepay} alt="phonepay logo" />
            <img className=' logo-img w-24 h-14 border rounded' src={paytm} alt="paytm logo" />
        </div>
        <div className="input">
            <input onChange={(e)=> setUpiId(e.target.value)} value={upiId} type="text" placeholder='Enter UPI ID' className='w-full font-poppins h-14 p-4 border-2 rounded-md border-gray-300 mt-12 placeholder:text-gray-500 placeholder:text-lg outline-none text-gray-700' />
        </div>
        <div className="rules mt-6">
            {instructions.map((instruction, index) => (
               <div key={index} className='rule flex items-center justify-start space-x-2 my-3 '><span className='inline-block bg-blue-500 text-white font-bold rounded-full h-6 w-6 flex items-center justify-center font-poppins'>{index+1}</span> <p key={index} className='text-sm text-black-500 font-poppins'>{instruction}</p></div>
            ))}
        </div>
        <button className= 'absolute font-poppins bottom-0 left-0 tracking-wider payment-btn bg-primary w-full p-5  text-white font-bold text-xl rounded-bl-lg rounded-br-lg '>Proceed To Payment</button>
    </div>
  )
}

export default Upi