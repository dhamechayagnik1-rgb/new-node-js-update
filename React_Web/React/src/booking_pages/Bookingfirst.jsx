

import { useContext, useState } from 'react'
import './bookingp.css'
import { DisplayContext, SidebarContext } from '../context'


function FirstBookingPage(props) {


   
    const { slide, setSlide,active,setActive } = useContext(DisplayContext)












    return (
        <>

            <div class="service-section">

                <h2>
                    Select a service
                </h2>


                <div class="service-cards">


                    <div class={active == 1 ? "booking-card selected" : "booking-card"} onClick={() => {
                        if (active == 0 || active == 2) {
                            setActive(1);
                        }
                    }}>

                        <div class="card-top">

                            <div class="division software-division">
                                <span>⌘</span>
                                Software Division
                            </div>


                            <div class={active ==1 ? "check" : "checkenable"}>
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



                    <div class={active == 2 ? "booking-card selected" : "booking-card"} onClick={() => {
                        if (active == 0 || active == 1) {
                            setActive(2);
                        }
                    }}>

                        <div class="card-top">

                            <div class="division taxation-division">
                                <span>▧</span>
                                Taxation Division
                            </div>

                            <div class={active == 2 ? "check" : "checkenable"}>
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




            




            <button class="continue-btn" onClick={() => setSlide(1)}>
                Continue 
            </button>




        </>
    )
}

export default FirstBookingPage






