import React, { useState } from 'react'
import mastercard from '../assets/mastercard.svg';
import rupay from '../assets/rupay-logo-icon.svg';
import amex from '../assets/amex.svg';
import visa1 from '../assets/visa1.svg';
import diners from '../assets/diners.svg'
import { LuCalendarDays } from "react-icons/lu";
import { FaCreditCard } from "react-icons/fa";

function Cards() {
    const [cardInfo, setCardInfo] = useState({
        cardNumber: '',
        expiryDate: '',
        cvv: '',
        name:''
    })

    const handleChange = (e) =>{
        setCardInfo({
            ...cardInfo,
            [e.target.name]: e.target.value
        })
    }
  return (
    <div className='cards relative w-full'>
        <h3 className='font-bold text-xl font-poppins '>Enter your Card Details</h3>
        <div className="logos flex space-x-4 items-center justify-start mt-6">
            <img className='w-12 h-10  border rounded' src={mastercard} alt="gpay logo" />
            <img className='w-12 h-10 border rounded' src={amex} alt="bharat logo" />
            <img className='w-12 h-10  border rounded' src={diners} alt="phonepay logo" />
            <img className='w-12 h-10 border rounded' src={visa1} alt="paytm logo" />
            <img className='w-12 h-10 border rounded' src={rupay} alt="rupay logo" />
        </div>
        <div className="card-detail-form w-full">
            <div className="c-number">
                <input type="text" placeholder='Card Number' name='cardNumber' value={cardInfo.cardNumber} onChange={(e)=>handleChange(e)} className='w-full font-poppins h-14 p-4 border-2 rounded-md border-gray-300 mt-12 placeholder:text-gray-500 placeholder:text-lg outline-none text-gray-700' />
            </div>
            <div className="validation flex justify-between items-center w-full space-x-4 mt-4">
                <div className="date w-1/2 relative">
                <input type="date" placeholder='Expiry Date' name='expiryDate' value={cardInfo.expiryDate} onChange={(e)=>handleChange(e)} className='date-input font-poppins relative w-full appearance-none h-14 p-4 border-2 rounded-md border-gray-300 placeholder:text-gray-500 placeholder:text-lg outline-none text-gray-700' />
                <LuCalendarDays className="absolute right-4 top-4 h-5 w-5 text-gray-400 text-md" />
                </div>
                <div className="cvv w-1/2 relative">
                <input type="number" placeholder='CVV' name='cvv' value={cardInfo.cvv} onChange={(e)=>handleChange(e)} className='relative font-poppins w-full h-14 p-4 border-2 rounded-md border-gray-300  placeholder:text-gray-500 placeholder:text-lg outline-none text-gray-700' />
                <FaCreditCard className="absolute right-4 top-4 h-5 w-5 text-gray-400 text-md" />
                </div> 
            </div>
            <div className="name">
                <input type="text" placeholder='Card Holder Name' name='name' value={cardInfo.name} onChange={(e)=>handleChange(e)} className='select-input font-poppins w-full h-14 p-4 border-2 rounded-md border-gray-300 mt-4 placeholder:text-gray-500 placeholder:text-lg outline-none text-gray-700' />
            </div>
        </div>
        <button className= 'absolute font-poppins bottom-0 left-0 tracking-wider payment-btn bg-primary w-full p-5  text-white font-bold text-xl rounded '>Proceed To Payment</button>
    </div>
  )
}

export default Cards