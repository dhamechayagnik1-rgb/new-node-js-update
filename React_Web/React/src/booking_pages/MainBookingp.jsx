

import { useState } from 'react'
import FirstBookingPage from './Bookingfirst'
import './bookingp.css'
import { DisplayContext } from '../context'

import Secondpage from './Second'
import ThirdBooking from './ThirdBooking'



function MainBookingp(props) {
    const [button1, setButton1] = useState(false)
    const [slide, setSlide] = useState(0)


    const changename = (chan) => {
        switch (chan) {
            case 1:
                setSlide(1)
                break;
            
            case 2:
                setSlide(2)
                break;

            case 3:
                setSlide(3)
                break;


        
            default:
                break;
        }
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

                        <div class={slide == 0?"step active":"step"}>
                            <span class="step-number">1</span>
                            <strong>Service</strong>
                        </div>

                        <span class="step-arrow">›</span>

                        <div class={slide == 1?"step active":"step"}>
                            <span class="step-number">2</span>
                            <span>Date &amp; Time</span>
                        </div>

                        <span class="step-arrow">›</span>

                        <div class={slide == 2?"step active":"step"}>
                            <span class="step-number">3</span>
                            <span>Your Details</span>
                        </div>

                    </div>
                    <DisplayContext.Provider value={{button1, setButton1,slide,setSlide}} >
                    {slide == 1? <Secondpage/>:slide == 0?<FirstBookingPage/>: slide == 2?<ThirdBooking/>:null}

                    
                    </DisplayContext.Provider>

                   


                </div>

            </section>

        </>
    )
}

export default MainBookingp






