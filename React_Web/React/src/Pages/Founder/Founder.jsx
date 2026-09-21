import React from "react";
import "./Founder.css";
import profile from "./images/profile.jpeg";

function Founder() {
    return (
        <div className="founder-page">

            {/* ================= HERO ================= */}
            <section className="founder-hero">

                <div className="hero-contents">

                    <div className="hero-text">
                        <p className="small-title">
                            WEB • TAX • SOFTWARE
                        </p>

                        <h1>
                            Dhamecha<br />
                            Yagnik
                        </h1>

                        <h3>
                            Founder & Entrepreneur
                        </h3>

                        <p className="hero-description">
                            Building digital solutions and professional
                            services with a focus on quality, trust and
                            long-term relationships.
                        </p>

                        <button className="hero-btn">
                            LET'S WORK TOGETHER
                        </button>
                    </div>

                    <div className="hero-image">
                        <img
                            src={profile}
                            alt="Dhamecha Yagnik Kamleshbhai"
                        />
                    </div>

                    <div className="hero-side-text">
                        <span>FOUNDED</span>
                        <strong>2024</strong>

                        <span>BASED IN</span>
                        <strong>RAJKOT</strong>
                    </div>

                </div>

            </section>


            {/* ================= WHO THIS IS FOR ================= */}
            <section className="who-section">

                <div className="section-title">
                    <p>WHO THIS IS FOR</p>
                    <h2>
                        Who I <i>work</i> with
                    </h2>
                </div>

                <div className="who-grid">

                    <div className="who-item">
                        <span>01</span>
                        <h3>STARTUPS</h3>
                        <p>
                            Businesses looking for a strong digital
                            presence and reliable technology solutions.
                        </p>
                    </div>

                    <div className="who-item">
                        <span>02</span>
                        <h3>SMALL BUSINESS</h3>
                        <p>
                            Helping growing businesses build websites,
                            software and professional systems.
                        </p>
                    </div>

                    <div className="who-item">
                        <span>03</span>
                        <h3>PROFESSIONALS</h3>
                        <p>
                            Individual professionals who need modern
                            websites and digital solutions.
                        </p>
                    </div>

                </div>

            </section>


            {/* ================= HOW I WORK ================= */}
            <section className="work-section">

                <div className="work-heading">

                    <p>HOW I WORK</p>

                    <h2>
                        Simple process.<br />
                        <i>Clear results.</i>
                    </h2>

                </div>


                <div className="work-cards">

                    <div className="work-card">

                        <span className="card-number">
                            01
                        </span>

                        <h3>
                            DISCOVER
                        </h3>

                        <p>
                            Understand your business,
                            requirements and goals.
                        </p>

                        <div className="card-line"></div>

                        <strong>
                            REQUIREMENTS
                        </strong>

                    </div>


                    <div className="work-card active">

                        <span className="card-number">
                            02
                        </span>

                        <h3>
                            BUILD
                        </h3>

                        <p>
                            Design and develop a solution
                            according to your requirements.
                        </p>

                        <div className="card-line"></div>

                        <strong>
                            DEVELOPMENT
                        </strong>

                    </div>


                    <div className="work-card">

                        <span className="card-number">
                            03
                        </span>

                        <h3>
                            DELIVER
                        </h3>

                        <p>
                            Test, deploy and provide support
                            after delivery.
                        </p>

                        <div className="card-line"></div>

                        <strong>
                            DELIVERY
                        </strong>

                    </div>

                </div>

            </section>


            {/* ================= FAMILY / STORY ================= */}
            <section className="story-section">

                <div>
                    <p className="story-label">
                        THE BEGINNING
                    </p>

                    <h2>
                        Started in <span>2024.</span>
                    </h2>
                </div>

                <div className="story-text">

                    <p>
                        My name is
                        <strong> Dhamecha Yagnik Kamleshbhai</strong>.
                        My entrepreneurial journey started in 2024 with
                        a simple vision — to build something of my own
                        through hard work, learning and dedication.
                    </p>

                    <p>
                        With the support and blessings of my father
                        <strong> Kamleshbhai Jamanbhai Dhamecha</strong>
                        and my mother
                        <strong> Parulben Kamleshbhai Dhamecha</strong>,
                        I continue to move forward and build for the future.
                    </p>

                </div>

            </section>

        </div>
    );
}

export default Founder;