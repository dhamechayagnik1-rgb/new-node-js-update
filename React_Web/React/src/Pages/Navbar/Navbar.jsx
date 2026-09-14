

import './Navbar.css'

function Navbar() {

    return (
        <>
            <nav class="navbar">

                <div class="logo">
                    <div class="logo-icon">Y</div>
                    <span>YAGNIK</span>
                </div>

               
                <div class="nav-links">

                    <a href="#home">Home</a>
                    <a href="#services">Services</a>
                    <a href="/booking">Booking</a>
                    <a href="#about">About</a>
                    <a href="#contact">Contact</a>

                    <a href="#booking" class="book-btn">
                        Book Now
                    </a>

                </div>

            </nav>

        </>
    )
}

export default Navbar
