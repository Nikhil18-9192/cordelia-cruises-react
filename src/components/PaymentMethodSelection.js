import React, { useState } from 'react'
import upi from '../assets/upi-icon.svg'
import cards from '../assets/visa.svg'
import bank from '../assets/net-banking-icon.svg'
import Upi from './Upi'
import Cards from './Cards'
import Bank from './Bank'

function PaymentMethodSelection() {
    const [activeTab, setActiveTab] = useState('upi')
    const handleTabClick = (tab) => {
        setActiveTab(tab)
    }
    const renderPaymentOption = ()=>{
        switch(activeTab){
            case 'upi':
                return( <Upi />)
            case 'cards':
                return (<Cards />)
            case 'bank':
                return (<Bank />)
            default:
                return null;
        }
    }
  return (
    <div className='payment-method-selection rounded-lg w-full  bg-white p-6 shadow-lg flex justify-between items-center'>
        <div className="tabs flex justify-between items-start flex-col w-1/3 ">
            <button onClick={()=> handleTabClick('upi')} className={`tab w-full h-28 border-b-2 border-gray-400 bg-gray-100 rounded-tl-md rounded-tr-md flex items-start p-4 justify-between ${activeTab === 'upi' ? 'active-tab' : ''}`} > 
            <img src={upi} alt="upi logo" className='w-1/5 h-6' /> 
            <div className="text flex flex-col justify-start items-start w-4/5">
            <p className='font-bold text-base font-poppins'>UPI Options</p>
            <p className='text-sm text-left mt-2 font-poppins'>Pay directly from your bank account</p></div>
            </button>

            <button onClick={()=> handleTabClick('cards')} className={`tab w-full h-28 border-b-2 border-gray-400 bg-gray-100  flex items-start p-4 justify-between ${activeTab === 'cards' ? 'active-tab' : ''}`}>
            <img src={cards} alt="upi logo" className='w-1/5 h-6' /> 
            <div className="text flex flex-col justify-start items-start w-4/5">
            <p className='font-bold text-base font-poppins'>Credit/Debit Cards</p>
            <p className='text-sm text-left mt-2 font-poppins'>Visa, MasterCard, AMEX,Rupay and Dinnerclub</p></div>
            </button>

            <button onClick={()=> handleTabClick('bank')} className={`tab w-full h-28 border-b-2 border-gray-400 bg-gray-100  flex items-start p-4 justify-between ${activeTab === 'bank' ? 'active-tab' : ''}`}>
            <img src={bank} alt="upi logo" className='w-1/5 h-6' /> 
            <div className="text flex flex-col justify-start items-start w-4/5">
            <p className='font-bold text-base font-poppins'>Netbanking</p>
            <p className='text-sm text-left mt-2 font-poppins'>All Major banks available</p></div>
            </button>

            <button className='w-full h-28  bg-gray-100 rounded-bl-md rounded-br-md flex items-start p-4 justify-between'></button>
        </div>
        <div className="payment-methods w-2/3 ml-6 relative h-full">
            <div className="payment-option">{renderPaymentOption()}</div>
            {/* <button className=' absolute bottom-0 left-0 tracking-wider payment-btn bg-primary w-full p-5  text-white font-bold text-xl rounded '>Proceed To Payment</button> */}
        </div>
    </div>
  )
}

export default PaymentMethodSelection