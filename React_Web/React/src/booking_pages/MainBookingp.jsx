

import { useState } from 'react'
import FirstBookingPage from './Bookingfirst'
import './bookingp.css'
import { DisplayContext } from '../context'


import ThirdBooking from './ThirdBooking'
import { date, Time } from './day'



function MainBookingp(props) {

    const [slide, setSlide] = useState(0)
    const [active, setActive] = useState(0)
    const [formData, setformData] = useState({ name: "", mobile: "", email: "", company: "", content: "" })
    const [blogs, setBlogs] = useState([]);
    const [Text, setText] = useState("")
    const isAdmin = window.location.pathname === "/admin";


    function handleSubmit(e) {
        console.log(active);

        let text

        if (active === 1) {
            text = "Software Development"
        } else {
            text = "Taxation Advisory"
        }
        setText(text)

        e.preventDefault();

        setBlogs([{
            name: formData.name, mobile: formData.mobile
            , email: formData.email, company: formData.company
            , content: formData.content
        }, ...blogs]);
        console.log(blogs);
        setformData({ text: "", name: "", mobile: "", email: "", company: "", content: "" });

    }





    return (


        <>


            <section class="booking-page">

                <div class="booking-container">



                    <div class="booking-header">

                        <h1>
                            Book Your Consultation
                        </h1>

                        <p>
                            Choose the service you need and pick a time that works for you.
                            We'll confirm<br class="desktop-break" />
                            your appointment within 2 hours.
                        </p>

                    </div>



                    <div class="steps">

                        <div class={slide == 0 ? "step active" : "step"}>
                            <span class="step-number">1</span>
                            <strong>Service</strong>
                        </div>

                        <span class="step-arrow">›</span>

                        <div class={slide == 1 ? "step active" : "step"}>
                            <span class="step-number">2</span>
                            <span>Date &amp; Time</span>
                        </div>



                    </div>
                    <DisplayContext.Provider value={{ handleSubmit, slide, setSlide, active, setActive, formData, setformData, blogs, setBlogs }} >
                        {slide == 1 ? <ThirdBooking /> : slide == 0 ? <FirstBookingPage /> : null}
                        {isAdmin ? (
                            <Admin />
                        ) :null}

                    </DisplayContext.Provider>




                </div>

            </section>

        </>
    )
}

export default MainBookingp






