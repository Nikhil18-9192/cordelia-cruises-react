import React, { useState } from 'react'
import hdfc from '../assets/hdfc.png';
import icici from '../assets/icici.png';
import sbi from '../assets/sbi.png';
import axis from '../assets/axis.png';
import baroda from '../assets/baroda.png';

function Bank() {
    const banks = ['ICICI Bank', 'HDFC Bank', 'SBI Bank', 'Axis Bank', 'Baroda Bank']
    const [bank, setBank] = useState('')
  return (
    <div className='bank relative w-full'>
        <h3 className='font-bold text-xl font-poppins '>Select Your Bank</h3>
        <div className="logos flex space-x-4 items-center justify-start flex-wrap -m-2 mt-6">
            <div className="item flex space-x-2 items-center justify-center border rounded p-2 m-2">
                <img className='w-8 h-8' src={icici} alt="hdfc logo" />
                <p className='text-sm text-black font-bold font-poppins'>ICICI Bank</p>
            </div>
            <div className="item flex space-x-2 items-center justify-center border rounded p-2 m-2">
                <img className='w-8 h-8' src={hdfc} alt="hdfc logo" />
                <p className='text-sm text-black font-bold font-poppins'>HDFC Bank</p>
            </div>
            <div className="item flex space-x-2 items-center justify-center border rounded p-2 m-2">
                <img className='w-8 h-8' src={axis} alt="hdfc logo" />
                <p className='text-sm text-black font-bold font-poppins'>Axix Bank</p>
            </div>
            <div className="item flex space-x-2 items-center justify-center border rounded p-2 m-2">
                <img className='w-8 h-8' src={sbi} alt="hdfc logo" />
                <p className='text-sm text-black font-bold font-poppins'>State Bank of India</p>
            </div>
            <div className="item flex space-x-2 items-center justify-center border rounded p-2 m-2">
                <img className='w-8 h-8' src={baroda} alt="hdfc logo" />
                <p className='text-sm text-black font-bold font-poppins'>Bank of Baroda</p>
            </div>  
        </div>
        <div className="select-bank mt-6 relative">
            <select name="bank" id="bank" value={bank} onChange={(e) => setBank(e.target.value)} className='w-full text-xl text-gray-500 font-medium font-poppins h-16 p-4 border-2 rounded-md border-gray-300 mt-4 outline-none bg-white'>
                <option value="" disabled>Select Your Bank</option>
                {banks.map((bank) => (
                    <option key={bank} value={bank}>{bank}</option>
                ))}
            </select>
        </div>
        <button className= 'absolute font-poppins bottom-0 left-0 tracking-wider payment-btn bg-primary w-full p-5  text-white font-bold text-xl rounded '>Proceed To Payment</button>

    </div>
  )
}

export default Bank