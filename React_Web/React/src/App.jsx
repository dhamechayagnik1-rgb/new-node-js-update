

import { Component } from 'react'
import React from 'react'
import './App.css'
import MainBookingp from './booking_pages/MainBookingp'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Booking from './Pages/Booking/Booking'
import Footer from './Pages/Footer/Footer'
import Home from './Pages/Home/Home'
import Navbar from './Pages/Navbar/Navbar'
import Services from './Pages/Services/Services'
import Why from './Pages/Why/Why'
import Main from './Pages/Main';
import About from './Pages/About/About';
import Contact from './Pages/Contact/Contact';

function App() {
  const router = createBrowserRouter([
    { path: "/", element: <><Main /></> },
    { path: "/booking", element: <MainBookingp /> },
    { path: "/About", element: <About/> },
    { path: "/Services", element: <Services/> },
    { path: "/Contact", element: <Contact/> },
  ]);




  return (
    <>
      <Navbar />
      <RouterProvider router={router} />
      <Footer />

    </>
  )
}


export default App
