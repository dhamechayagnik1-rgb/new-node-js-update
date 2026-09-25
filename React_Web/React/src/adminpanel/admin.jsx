import { useContext, useEffect, useState } from 'react'
import './admin.css'
import { DisplayContext } from '../context'
import { collection, deleteDoc, doc, getDocs,onSnapshot  } from "firebase/firestore";
import { db } from '../firebaseinit';
function Admin() {

    const [blognew, setBlognew] = useState([])

    useEffect(() => {

        async function fetchDate() {
            const snapshot = await getDocs(collection(db, "blogs"))

            const blogs = snapshot.docs.map((doc) => {
                return {
                    id: doc.id,
                    ...doc.data()
                }
            })

            setBlognew(blogs)
            console.log(blognew);



        }

        fetchDate()

        const unsub =  onSnapshot(collection(db,"blogs"), (snapShot) => {
            const blogs = snapShot.docs.map((doc) => {
                    return{
                        id: doc.id,
                        ...doc.data()
                    }
                })
                console.log(blogs);
                setBlognew(blogs);
        })

    }, [])


    async function removeData(id) {
        console.log("Delete ID:", id);

        const docRef = doc(db, "blogs", id);

        try {
            await deleteDoc(docRef);
            console.log("Document deleted successfully");
        } catch (error) {
            console.log("Delete error:", error);
        }
    }




    return (
        <>
            <div class="admin-container">

                <div class="admin-header">
                    <h1>Admin Panel</h1>
                    <p>Contact Enquiries</p>
                </div>

                <div class="admi-list">

                    {blognew.map((blog, index) => (
                        <div class="contact-cards" key={index}>

                            <div class="contact-infos">

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

                            <button class="remove-btn" onClick={() => removeData(blog.id)}>
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