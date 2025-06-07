import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Outlet } from 'react-router-dom'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Footer from './components/Footer'
import Metapixel from './components/Metapixel'

function App() {

  useEffect(() => {
  AOS.init({
   offset: 120,
  delay: 200,
  duration: 1000,
  easing: 'ease-in-out',
  once: true,
  mirror: false,
  });
}, []);


  return (
    <>
    
    <Outlet/>
    <Footer/>
    </>
  )
}

export default App
