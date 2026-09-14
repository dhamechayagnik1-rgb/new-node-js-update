

import { useState } from 'react'
import './bookingp.css'


function FirstBookingPage(props) {


    const [change, setChange] = useState(false)
    const [changen, setChangen] = useState(false)
    const [Active1, setActive1] = useState(false)
    const [Active2, setActive2] = useState(false)
    const [Active3, setActive3] = useState(false)





    const changeActive1 = () => {
        setActive1(!Active1)
        setActive2(false)
        setActive3(false)
    }
    const changeActive2 = () => {
        setActive1(false)
        setActive2(!Active2)
        setActive3(false)
    }
    const changeActive3 = () => {
        setActive1(false)
        setActive2(false)
        setActive3(!Active3)
    }




    const changetoggle = () => {
        setChange(!change);
        setChangen(false);
    };

    const newtoggle = () => {
        setChangen(!changen);
        setChange(false);
    };


    return (
        <>

            <div class="service-section">

                <h2>
                    Select a service
                </h2>


                <div class="service-cards">


                    <div class={change ? "booking-card selected" : "booking-card"} onClick={() => changetoggle()}>

                        <div class="card-top">

                            <div class="division software-division">
                                <span>⌘</span>
                                Software Division
                            </div>


                            <div class={change ? "check" : "checkenable"}>
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



                    <div class={changen ? "booking-card selected" : "booking-card"} onClick={() => newtoggle()}>

                        <div class="card-top">

                            <div class="division taxation-division">
                                <span>▧</span>
                                Taxation Division
                            </div>

                            <div class={changen ? "check" : "checkenable"}>
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

                    <button class={Active1 ? "session-btn active" : "session-btn"} onClick={() => changeActive1()}>
                        30-min Discovery Call
                    </button>

                    <button class={Active2 ? "session-btn active" : "session-btn"} onClick={() => changeActive2()}>
                        60-min Project Scoping
                    </button>

                    <button class={Active3 ? "session-btn active" : "session-btn"} onClick={() => changeActive3()}>
                        90-min Technical Deep Dive
                    </button>

                </div>

            </div>




            <button class="continue-btn">
                Continue to Date &amp; Time
            </button>




        </>
    )
}

export default FirstBookingPage






