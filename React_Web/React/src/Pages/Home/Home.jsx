

import './Home.css'


function Home() {
  
  return (
    <>
      
      <section class="hero">

        <div class="hero-content">

            
            <div class="trust-badge">
                <span class="dot"></span>
                <span>Trusted by Individuals &amp; Corporates</span>
            </div>


        
            <h1> Software. Taxation.<br/>
                <span>Simplified.</span>
            </h1>


            
            <p class="hero-description">
                YAGNIK brings expert custom software development and business
                taxation advisory under one roof — so you can focus on growing,
                not managing complexity.
            </p>


           
            <div class="hero-buttons">

                <a href="/booking" class="btn software-btn">
                    <span class="btn-icon">&lt;/&gt;</span>
                    Book Software Consult
                </a>

                <a href="/booking" class="btn taxation-btn">
                    <span class="btn-icon">▣</span>
                    Book Tax Advisory
                </a>

            </div>

        </div>

    </section>
     
    </>
  )
}

export default Home