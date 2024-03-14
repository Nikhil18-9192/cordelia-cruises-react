import React, { useContext } from 'react'
import logo from '../assets/cordelia-new-logo.svg'
import { RxHamburgerMenu } from "react-icons/rx";
import GlobalContext from './context/CreateContext';


function PhoneHeader() {
    const {state, dispatch} = useContext(GlobalContext)
    const menuState = state.toggle
  return (
    <div className='phone-header flex items-center justify-between px-6 border-b border-gray-300'>
        <img src={logo} className='w-40 h-24' alt="logo" />
        <RxHamburgerMenu className='text-3xl text-primary font-extrabold' onClick={() => dispatch({type: "toggle", payload: !menuState})} />  
    </div>
    
    
  )
}

export default PhoneHeader