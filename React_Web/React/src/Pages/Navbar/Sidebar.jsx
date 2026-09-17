

import { useContext } from 'react'
import './Navbar.css'
import { DisplayContext, SidebarContext } from '../../context'

function Sidebar() {

     const { sidebar, setSidebar } = useContext(SidebarContext)

   


    return (
        <>
        
        
            

                <div class="sidebar" id="sidebar">

                    <button class="close-btn" onClick={() => setSidebar(false)}>
                        ×
                    </button>

                    <div class="mobile-logo">
                        <div class="logo-icon">Y</div>
                        <span>YAGNIK</span>
                    </div>

                    <a href="#home" o>Home</a>
                    <a href="#services" >Services</a>
                    <a href="/booking" >Booking</a>
                    <a href="#about">About</a>
                    <a href="#contact" >Contact</a>

                    <a href="#booking" class="mobile-book-btn" >
                        Book Now
                    </a>

                </div>

                <div class="overlay" id="overlay" ></div>

            

        </>
    )
}

export default Sidebar
