

import { useContext } from 'react'
import './ThirdBooking.css'
import { DisplayContext } from '../context'


function ThirdBooking() {

    const {slide,setSlide} = useContext(DisplayContext)

    return (

        <>

            <div class="booking-page">


                <div class="booking-summary">

                    <h3>Booking Summary</h3>

                    <div class="summary-grid">

                        <div class="summary-item">
                            <span>Service:</span>
                            <strong>Software Development</strong>
                        </div>

                        <div class="summary-item">
                            <span>Session:</span>
                            <strong>60-min Project Scoping</strong>
                        </div>

                        <div class="summary-item">
                            <span>Date:</span>
                            <strong>Tuesday, 22 September</strong>
                        </div>

                        <div class="summary-item">
                            <span>Time:</span>
                            <strong>10:00 AM</strong>
                        </div>

                    </div>

                </div>



                <h2 class="details-title">Your Details</h2>


                <form>

                    <div class="form-grid">


                        <div class="form-group">
                            <label for="fullname">
                                Full Name <span>*</span>
                            </label>

                            <input
                                type="text"
                                id="fullname"
                                placeholder="Full name"
                            />
                        </div>



                        <div class="form-group">
                            <label for="email">
                                Email Address <span>*</span>
                            </label>

                            <input
                                type="email"
                                id="email"
                                placeholder="Email address"
                            />
                        </div>



                        <div class="form-group">
                            <label for="phone">
                                Phone Number <span>*</span>
                            </label>

                            <input
                                type="tel"
                                id="phone"
                                placeholder="Phone number"
                            />
                        </div>



                        <div class="form-group">
                            <label for="company">
                                Company Name
                            </label>

                            <input
                                type="text"
                                id="company"
                                placeholder="Company name (optional)"
                            />
                        </div>



                        <div class="form-group full-width">

                            <label for="message">
                                What do you need help with?
                            </label>

                            <textarea
                                id="message"
                                placeholder="Briefly describe what you need help with..."
                            ></textarea>

                        </div>

                    </div>



                    <div class="button-section">

                        <button type="button" class="back-btn" onClick={() => setSlide(1)}>
                            Back
                        </button>

                        <button type="submit" class="confirm-btn">
                            Confirm Booking
                        </button>

                    </div>

                </form>

            </div>
        </>
    )

}

export default ThirdBooking