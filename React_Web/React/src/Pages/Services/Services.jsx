

import './Services.css'


function Services() {
  
  return (
    <>
      
     <section class="services" id="services">

    <div class="services-container">

        <div class="section-label">
            WHAT WE DO
        </div>


        <div class="services-grid">


            <div class="service-card software-card">

                <div class="service-tag software-tag">
                    <span>⚙</span>
                    Software Division
                </div>

                <h2>
                    Custom Software Builds
                </h2>

                <p class="service-description">
                    From idea to deployment — we build web apps, mobile
                    applications, and enterprise systems tailored to your exact
                    requirements.
                </p>


                <div class="service-list">

                    <div>
                        <span>○</span>
                        Web &amp; Mobile Application Development
                    </div>

                    <div>
                        <span>○</span>
                        Enterprise Software Solutions
                    </div>

                    <div>
                        <span>○</span>
                        API Design &amp; System Architecture
                    </div>

                    <div>
                        <span>○</span>
                        Tech Stack Consulting
                    </div>

                </div>


                <a href="/booking" class="service-btn software-btn">
                    Book Software Consult
                    <span>→</span>
                </a>

            </div>



            

            <div class="service-card taxation-card">

                <div class="service-tag taxation-tag">
                    <span>◉</span>
                    Taxation Division
                </div>

                <h2>
                    Business Taxation<br/>
                    Advisory
                </h2>

                <p class="service-description">
                    Navigate GST, income tax, and compliance with confidence.
                    Our advisors simplify the complex so your business stays
                    compliant and optimised.
                </p>


                <div class="service-list">

                    <div>
                        <span>○</span>
                        GST Registration &amp; Filing
                    </div>

                    <div>
                        <span>○</span>
                        Business Income Tax Advisory
                    </div>

                    <div>
                        <span>○</span>
                        Compliance &amp; Audit Support
                    </div>

                    <div>
                        <span>○</span>
                        Financial Planning &amp; Structuring
                    </div>

                </div>


                <a href="/booking" class="service-btn taxation-btn">
                    Book Tax Advisory
                    <span>→</span>
                </a>

            </div>

        </div>

    </div>

</section>

     
    </>
  )
}

export default Services
