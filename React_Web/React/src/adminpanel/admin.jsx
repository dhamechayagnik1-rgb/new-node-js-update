import { useContext, useEffect, useState } from 'react'
import './admin.css'
import { DisplayContext } from '../context'
import { collection, getDocs } from "firebase/firestore";
import { db } from '../firebaseinit';
function Admin() {

    const [blognew,setBlognew] = useState([])

    useEffect(() =>{

        async function fetchDate(){
            const snapshot = await getDocs(collection(db, "blogs"))
           
            const blogs = snapshot.docs.map((doc) =>{
                return{
                    id : doc.id,
                    ...doc.data()
                }
            })
            
            setBlognew(blogs)
            console.log(blognew);
            
            
            
        }

        fetchDate()

    },[])



    

    return (
        <>
            <div class="admin-container">

                <div class="admin-header">
                    <h1>Admin Panel</h1>
                    <p>Contact Enquiries</p>
                </div>

                <div class="contact-list">

                    {blognew.map((blog,index) => (
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
                    

                </div>

            </div>
            


        </>
    )
}

export default Admin