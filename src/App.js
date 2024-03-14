import './App.scss';
import Header from './components/Header';
import Home from './components/Home';
import PhoneHeader from './components/PhoneHeader';
import {CSSTransition } from "react-transition-group";
import PhoneNav from './components/PhoneNav';
import { useContext } from 'react';
import GlobalContext from './components/context/CreateContext';

function App() {
  const {state} = useContext(GlobalContext)
  return (
    <div className="App">
      <Header />
      <PhoneHeader />
      {state.toggle ? 
         <CSSTransition
         in={true}
         timeout={300} // Duration of the transition in milliseconds
         classNames="phone-navbar"
         unmountOnExit
       >
        <PhoneNav />
        </CSSTransition>
        : null}
      <Home />
    </div>
  );
}

export default App;
