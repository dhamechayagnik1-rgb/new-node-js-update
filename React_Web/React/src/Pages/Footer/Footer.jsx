

import './Footer.css'


function Footer() {
  
  return (
    <>
      
      <footer class="footer">

        <div class="footer-container">

            <div class="footer-brand">

                <div class="logo">
                    <div class="logo-icon">Y</div>
                    <span>YAGNIK</span>
                </div>

                <p class="description">
                    Expert software builds and business taxation
                    advisory — making complex solutions simple
                    for individuals and corporates.
                </p>

                <div class="contact-info">

                    <div class="contact-item">
                        <span class="icon">✉</span>
                        <span>hello@yagnik.in</span>
                    </div>

                    <div class="contact-item">
                        <span class="icon">📞</span>
                        <span>+91 98765 43210</span>
                    </div>

                    <div class="contact-item">
                        <span class="icon">📍</span>
                        <span>India</span>
                    </div>

                </div>

            </div>


            <div class="footer-column">

                <h3 class="software-title">SOFTWARE</h3>

                <a href="#">Custom Software Builds</a>
                <a href="#">Web Development</a>
                <a href="#">Mobile Applications</a>
                <a href="#">Tech Consulting</a>
                <a href="#">Book Software Consult</a>

            </div>


            <div class="footer-column">

                <h3 class="tax-title">TAXATION</h3>

                <a href="#">Business Tax Advisory</a>
                <a href="#">GST & Compliance</a>
                <a href="#">Tax Filing</a>
                <a href="#">Financial Planning</a>
                <a href="#">Book Tax Advisory</a>

            </div>


            <div class="footer-column">

                <h3 class="company-title">COMPANY</h3>

                <a href="#">About YAGNIK</a>
                <a href="#">Book Appointment</a>
                <a href="#">Contact Us</a>
                <a href="#">Privacy Policy</a>

            </div>

        </div>

    </footer>
     
    </>
  )
}

export default Footer
