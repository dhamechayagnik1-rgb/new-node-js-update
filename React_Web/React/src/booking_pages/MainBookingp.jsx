

import FirstBookingPage from './Bookingfirst'
import './bookingp.css'



function MainBookingp(props) {

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

                        <div class="step active">
                            <span class="step-number">1</span>
                            <strong>Service</strong>
                        </div>

                        <span class="step-arrow">›</span>

                        <div class="step">
                            <span class="step-number">2</span>
                            <span>Date &amp; Time</span>
                        </div>

                        <span class="step-arrow">›</span>

                        <div class="step">
                            <span class="step-number">3</span>
                            <span>Your Details</span>
                        </div>

                    </div>

                    <FirstBookingPage/>


                </div>

            </section>

        </>
    )
}

export default MainBookingp






