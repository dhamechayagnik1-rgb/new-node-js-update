import { useContext } from 'react'
import './admin.css'
import { DisplayContext } from '../context'
function Admin() {
    const {blogs, setBlogs,slide} = useContext(DisplayContext)

    console.log(slide);
    console.log(blogs);
    

    return (
        <>
            <div class="admin-container">

                <div class="admin-header">
                    <h1>Admin Panel</h1>
                    <p>Contact Enquiries</p>
                </div>

                <div class="contact-list">
                    {blogs?.map((blog,index) =>(
                        <div class="contact-card">

                        <div class="contact-info">

                            <div class="info-box">
                                <span>Name</span>
                                <h3>{blog.name}</h3>
                            </div>

                            <div class="info-box">
                                <span>Email</span>
                                <p>{blog.email}</p>
                            </div>

                            <div class="info-box">
                                <span>Mobile</span>
                                <p>{blog.mobile}</p>
                            </div>

                            <div class="info-box">
                                <span>Company Name</span>
                                <p>{blog.company}</p>
                            </div>

                            <div class="info-box content-box">
                                <span>Content</span>
                                <p>
                                    {blog.content}
                                </p>
                            </div>

                        </div>

                        <button class="remove-btn">
                            Remove
                        </button>

                    </div>
                    ))}

                    <div class="contact-card">

                        <div class="contact-info">

                            <div class="info-box">
                                <span>Name</span>
                                <h3>Yagnik Dhamecha</h3>
                            </div>

                            <div class="info-box">
                                <span>Email</span>
                                <p>yagnik@gmail.com</p>
                            </div>

                            <div class="info-box">
                                <span>Mobile</span>
                                <p>9638131881</p>
                            </div>

                            <div class="info-box">
                                <span>Company Name</span>
                                <p>Yagnik Software</p>
                            </div>

                            <div class="info-box content-box">
                                <span>Content</span>
                                <p>
                                    I need a website for my company.
                                    Please contact me for further discussion.
                                </p>
                            </div>

                        </div>

                        <button class="remove-btn">
                            Remove
                        </button>

                    </div>


                    <div class="contact-card">

                        <div class="contact-info">

                            <div class="info-box">
                                <span>Name</span>
                                <h3>Rahul Patel</h3>
                            </div>

                            <div class="info-box">
                                <span>Email</span>
                                <p>rahul@gmail.com</p>
                            </div>

                            <div class="info-box">
                                <span>Mobile</span>
                                <p>9876543210</p>
                            </div>

                            <div class="info-box">
                                <span>Company Name</span>
                                <p>Patel Enterprise</p>
                            </div>

                            <div class="info-box content-box">
                                <span>Content</span>
                                <p>
                                    We need an ecommerce website
                                    for our business.
                                </p>
                            </div>

                        </div>

                        <button class="remove-btn">
                            Remove
                        </button>

                    </div>


                    <div class="contact-card">

                        <div class="contact-info">

                            <div class="info-box">
                                <span>Name</span>
                                <h3>Amit Shah</h3>
                            </div>

                            <div class="info-box">
                                <span>Email</span>
                                <p>amit@gmail.com</p>
                            </div>

                            <div class="info-box">
                                <span>Mobile</span>
                                <p>9988776655</p>
                            </div>

                            <div class="info-box">
                                <span>Company Name</span>
                                <p>Shah Infotech</p>
                            </div>

                            <div class="info-box content-box">
                                <span>Content</span>
                                <p>
                                    I want to discuss a software
                                    development project.
                                </p>
                            </div>

                        </div>

                        <button class="remove-btn">
                            Remove
                        </button>

                    </div>

                </div>

            </div>
            


        </>
    )
}

export default Admin