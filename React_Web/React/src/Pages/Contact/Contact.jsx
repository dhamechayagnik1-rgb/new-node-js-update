

import './Contact.css'


function Contact() {

    return (
        <>
            <section class="contact-section">

             

                <div class="contact-hero">

                    <span class="contact-badge">
                        <span>←</span> Contact
                    </span>

                    <h1>Get in Touch</h1>

                    <p>
                        Whether you have a software project in mind or need taxation guidance,
                        we're here to help. Reach out and we'll respond within one business day.
                    </p>

                </div>


               

                <div class="contact-layout">


                   

                    <div class="contact-left">



                        <div class="info-card">

                            <div class="info-icon">
                                ✉
                            </div>

                            <div class="info-content">

                                <span class="info-title">
                                    EMAIL US
                                </span>

                                <h3>
                                    dhamechayagnik1@gmail.com
                                </h3>

                                <p>
                                    For general enquiries and project discussions
                                </p>

                            </div>

                        </div>



                        <div class="info-card">

                            <div class="info-icon">
                                ☎
                            </div>

                            <div class="info-content">

                                <span class="info-title">
                                    CALL US
                                </span>

                                <h3>
                                    +91 96381 31881
                                </h3>

                                <p>
                                    Mon–Sat, 9 AM – 6 PM IST
                                </p>

                            </div>

                        </div>



                        <div class="info-card">

                            <div class="info-icon">
                                ◎
                            </div>

                            <div class="info-content">

                                <span class="info-title">
                                    LOCATION
                                </span>

                                <h3>
                                    India
                                </h3>

                                <p>
                                    Serving clients across India and globally
                                </p>

                            </div>

                        </div>



                        <div class="booking-card">

                            <h2>
                                Prefer to book a consultation directly?
                            </h2>

                            <p>
                                Skip the back-and-forth — pick a time that works for you.
                            </p>

                            <button class="booking-btn">
                                Book an Appointment
                                <span>→</span>
                            </button>

                        </div>

                    </div>


                   

                    <div class="contact-form-card">

                        <div class="form-heading">

                            <h2>
                                Send us a message
                            </h2>

                            <p>
                                Fill in the form and we'll get back to you within one business day.
                            </p>

                        </div>



                        <div class="form-group">

                            <label>
                                Enquiry type
                            </label>

                            <div class="enquiry-buttons">

                                <button>
                                    Software Development
                                </button>

                                <button>
                                    Taxation Advisory
                                </button>

                                <button class="active">
                                    General Enquiry
                                </button>

                                <button>
                                    Partnership
                                </button>

                                <button>
                                    Other
                                </button>

                            </div>

                        </div>



                        <div class="form-row">

                            <div class="form-group">

                                <label>
                                    Full Name <span>*</span>
                                </label>

                                <input
                                    type="text"
                                    placeholder="Your full name"
                                />

                            </div>


                            <div class="form-group">

                                <label>
                                    Email Address <span>*</span>
                                </label>

                                <input
                                    type="email"
                                    placeholder="you@company.com"
                               / >

                            </div>

                        </div>



                        <div class="form-group">

                            <label>
                                Phone Number
                            </label>

                            <input
                                type="text"
                                placeholder="+91 XXXXX XXXXX"
                            />

                        </div>



                        <div class="form-group">

                            <label>
                                Message <span>*</span>
                            </label>

                            <textarea
                                placeholder="Tell us what you're working on or what you need help with..."
                            ></textarea>

                        </div>



                        <button class="send-btn">

                            <span>➤</span>

                            Send Message

                        </button>

                    </div>

                </div>

            </section>


        </>
    )
}

export default Contact