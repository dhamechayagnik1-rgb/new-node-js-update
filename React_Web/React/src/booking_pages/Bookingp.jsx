

import './bookingp.css'


function Bookingp() {

    
  
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
                    We'll confirm<br class="desktop-break"/>
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


            <div class="service-section">

                <h2>
                    Select a service
                </h2>


                <div class="service-cards">


                    <div class="booking-card selected">

                        <div class="card-top">

                            <div class="division software-division">
                                <span>⌘</span>
                                Software Division
                            </div>

                            <div class="check">
                                ✓
                            </div>

                        </div>


                        <h3>
                            Software Development
                        </h3>

                        <p>
                            Custom web apps, mobile applications,
                            enterprise systems, and tech consulting.
                        </p>


                        <div class="duration-list">

                            <div>
                                <span>◷</span>
                                30-min Discovery Call
                            </div>

                            <div>
                                <span>◷</span>
                                60-min Project Scoping
                            </div>

                            <div>
                                <span>◷</span>
                                90-min Technical Deep Dive
                            </div>

                        </div>

                    </div>



                    <div class="booking-card ">

                        <div class="card-top">

                            <div class="division taxation-division">
                                <span>▧</span>
                                Taxation Division
                            </div>

                            <div class="check">
                                ✓
                            </div>

                        </div>
                        


                        <h3>
                            Taxation Advisory
                        </h3>

                        <p>
                            GST filing, income tax advisory,
                            compliance support, and financial planning.
                        </p>
                        


                        <div class="duration-list tax-list">

                            <div>
                                <span>◷</span>
                                30-min Tax Query
                            </div>

                            <div>
                                <span>◷</span>
                                60-min Advisory Session
                            </div>

                            <div>
                                <span>◷</span>
                                90-min Compliance Review
                            </div>

                        </div>

                    </div>

                </div>

            </div>


        

            <div class="session-section">

                <h3>
                    Session type
                </h3>

                <div class="session-options">

                    <button class="session-btn">
                        30-min Discovery Call
                    </button>

                    <button class="session-btn active">
                        60-min Project Scoping
                    </button>

                    <button class="session-btn">
                        90-min Technical Deep Dive
                    </button>

                </div>

            </div>


       

            <button class="continue-btn">
                Continue to Date &amp; Time
            </button>


        </div>

    </section>
     
    </>
  )
}

export default Bookingp
