import React from 'react';
import { FaArrowLeftLong } from "react-icons/fa6";
import PaymentMethodSelection from './PaymentMethodSelection';
import SeatInfo from './SeatInfo';
import PaymentInfo from './PaymentInfo';
import Upi from './Upi';
import Cards from './Cards';
import Bank from './Bank';

function Home() {
  return (
    <div className='px-4 sm:px-6 md:px-8 lg:px-10 xl:px-20 2xl:px-40 my-10 sm:my-16 md:my-20 lg:my-24 xl:my-32 2xl:my-40'>
      <div className='flex items-center space-x-4 justify-start sm:relative lg:static md:fixed lg:fixed xl:fixed 2xl:fixed w-full'>
        <FaArrowLeftLong className='font-bold text-4xl' />
        <p className='font-bold text-2xl sm:text-3xl md:text-3xl lg:text-3xl xl:text-4xl 2xl:text-4xl'>Select Payment Method</p>
      </div>
      <div className="payment-details flex flex-col sm:flex-row justify-between items-start w-full space-y-8 sm:space-y-0 sm:space-x-4 lg:pt-16 sm:pt-0 lg:pt-6 xl:pt-16 2xl:pt-16 md:pt-8">
        <div className="left w-full sm:w-2/3">
          <PaymentMethodSelection/>
        </div>
        <div className="right w-full sm:w-1/3">
          <SeatInfo />
          <PaymentInfo />
          <div className="payment-options-phone">
            <h1 className='font-bold text-xl my-6'>Payment Options</h1>
            <Upi />
            <Cards />
            <Bank />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
