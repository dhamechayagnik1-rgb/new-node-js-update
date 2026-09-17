

import { useState } from 'react'
import './Navbar.css'
import Sidebar from './Sidebar'
import { DisplayContext , SidebarContext} from '../../context'

function Navbar() {
    const [sidebar, setSidebar] = useState(false)

    const openchange = () => {
        setSidebar(!sidebar)
    }
    

    return (
        <>
            <nav class="navbar">

                <div class="logo">
                    <div class="logo-icon">Y</div>
                    <span>YAGNIK</span>
                </div>


                <div class="nav-links">

                    <a href="/">Home</a>
                    <a href="/Services">Services</a>
                    <a href="/booking">Booking</a>
                    <a href="/About">About</a>
                    <a href="/Contact">Contact</a>

                    <a href="/booking" class="book-btn">
                        Book Now
                    </a>


                </div>


                <SidebarContext.Provider value={{sidebar, setSidebar}}>
                    <button class="menu-btn" onClick={() => openchange()}>
                        ☰
                    </button>
                    {sidebar? <Sidebar/>:null}
                </SidebarContext.Provider>

                




            </nav>

        </>
    )
}

export default Navbar
