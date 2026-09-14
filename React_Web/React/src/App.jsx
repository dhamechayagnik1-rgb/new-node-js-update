

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

function App() {
  const router = createBrowserRouter([
    { path: "/", element: <><Navbar/> <Home/> <Services/> <Why/> <Booking/> <Footer/> </> },
    { path: "/booking", element: <MainBookingp/> },
  ]);




  return (
    <>
      <RouterProvider router={router} />

    </>
  )
}


export default App
