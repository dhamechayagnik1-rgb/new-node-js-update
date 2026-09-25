

import { useState } from 'react'
import FirstBookingPage from './Bookingfirst'
import './bookingp.css'
import { DisplayContext } from '../context'


import ThirdBooking from './ThirdBooking'
import { date, Time } from './day'
import Admin from '../adminpanel/admin'
import { db } from '../firebaseinit'
import { collection, addDoc } from "firebase/firestore";




function MainBookingp(props) {

    const [slide, setSlide] = useState(0)
    const [active, setActive] = useState(0)
    const [formData, setformData] = useState({ name: "", mobile: "", email: "", company: "", content: "" })
    const [blogs, setBlogs] = useState([]);
    const [Text, setText] = useState("")
    const isAdmin = window.location.pathname === "/admin";
    const [loading, setLoading] = useState(false);


    async function handleSubmit(e) {

        setLoading(true);
        e.preventDefault();

        try {
            // Yaha tumhara Firebase / API wala code
            setBlogs([{
                name: formData.name, mobile: formData.mobile
                , email: formData.email, company: formData.company
                , content: formData.content
            }, ...blogs]);
            // Add a new document with a generated id.
            const docRef = await addDoc(collection(db, "blogs"), {
                name: formData.name,
                mobile: formData.mobile
                , email: formData.email,
                company: formData.company
                , content: formData.content,
                createdon: new Date()
            });
            //console.log("Document written with ID: ", docRef.id);
            console.log(blogs);
            setformData({ text: "", name: "", mobile: "", email: "", company: "", content: "" });

        } catch (error) {
            console.error(error);

        } finally {
            setLoading(false);
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
                    <DisplayContext.Provider value={{ handleSubmit, loading, setLoading, slide, setSlide, active, setActive, formData, setformData, blogs, setBlogs }} >
                        {slide == 1 ? <ThirdBooking /> : slide == 0 ? <FirstBookingPage /> : null}
                        {isAdmin ? (
                            <Admin />
                        ) : null}

                    </DisplayContext.Provider>




                </div>

            </section>

        </>
    )
}

export default MainBookingp






