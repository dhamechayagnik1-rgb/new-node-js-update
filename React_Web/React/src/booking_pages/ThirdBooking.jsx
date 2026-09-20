

import { useContext } from 'react'
import './ThirdBooking.css'
import { DisplayContext } from '../context'


function ThirdBooking() {

    const {slide,setSlide,setActive,active, formData, setformData,blogs, setBlogs,handleSubmit} = useContext(DisplayContext)

    return (

        <>

            <div class="booking-page">


                <div class="booking-summary">

                    <h3>Booking Summary</h3>

                    <div class="summary-grid">

                        <div class="summary-item">
                            <span>Service:</span>
                            <strong>{active == 1?"Software Development":"Taxation Advisory"}</strong>
                        </div>

                       

                    </div>

                </div>



                <h2 class="details-title">Your Details</h2>


                <form onSubmit={handleSubmit}>

                    <div class="form-grid">


                        <div class="form-group">
                            <label for="fullname">
                                Full Name <span>*</span>
                            </label>

                            <input
                                type="text"
                                
                                id="fullname"
                                value={formData.name}
                                onChange = {(e) => setformData({
                                    name: e.target.value, 
                                    mobile:formData.mobile,
                                    email:formData.email,
                                    company:formData.company,
                                    content:formData.content
                                })}
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
                                value={formData.email}
                                onChange = {(e) => setformData({
                                    name: formData.name, 
                                    mobile:formData.mobile,
                                    email:e.target.value,
                                    company:formData.company,
                                    content:formData.content
                                })}
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
                                value={formData.mobile}
                                onChange = {(e) => setformData({
                                    name: formData.name, 
                                    mobile:e.target.value,
                                    email:formData.email,
                                    company:formData.company,
                                    content:formData.content
                                })}
                            />
                        </div>



                        <div class="form-group">
                            <label for="company">
                                Company Name
                            </label>

                            <input
                                type="text"
                                id="company"
                                value={formData.company}
                                onChange = {(e) => setformData({
                                    name: formData.name, 
                                    mobile:formData.mobile,
                                    email:formData.email,
                                    company:e.target.value,
                                    content:formData.content
                                })}
                                placeholder="Company name (optional)"
                            />
                        </div>



                        <div class="form-group full-width">

                            <label for="message">
                                What do you need help with?
                            </label>

                            <textarea
                                id="message"
                                value={formData.content}
                                onChange = {(e) => setformData({
                                    name: formData.name, 
                                    mobile:formData.mobile,
                                    email:formData.email,
                                    company:formData.company,
                                    content:e.target.value
                                })}
                                placeholder="Briefly describe what you need help with..."
                            ></textarea>

                        </div>

                    </div>



                    <div class="button-section">

                        <button type="button" class="back-btn" onClick={() => setSlide(0)}>
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