

import './Home.css'
import { useEffect } from 'react'
import { setSEO, upsertJsonLd, organizationSchema } from '../../seo'


function Home() {
  useEffect(() => {
    setSEO({
      title: 'Yagnik | Software Development & Taxation Services in Rajkot',
      description: 'Yagnik provides custom software development, website development and taxation services for businesses in Rajkot, Gujarat and across India.',
      path: '/'
    })
    upsertJsonLd(organizationSchema)
  }, [])

  
  return (
    <>
      
      <section class="hero">

        <div class="hero-content">

            
            <div class="trust-badge">
                <span class="dot"></span>
                <span>Trusted by Individuals &amp; Corporates</span>
            </div>


        
            <h1>Software Development &amp; Taxation<br/>
                <span>Services in Rajkot.</span>
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