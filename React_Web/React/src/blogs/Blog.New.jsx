import './Blogsnew.css'
import { blogs } from './blgos'
import { useState } from 'react'

function BlogsNews() {

    const [selectedBlog, setSelectedBlog] = useState(null)

    function blogsubmit(blog) {
        setSelectedBlog(blog)
    }

    // Blog ki full description open hogi
    if (selectedBlog) {
        return (
            <section className="blog-detail">
                <button
                    className="back-button"
                    onClick={() => setSelectedBlog(null)}
                >
                    ← Back to Blogs
                </button>

                <h1>{selectedBlog.title}</h1>

                <img
                    src={selectedBlog.image}
                    alt={selectedBlog.title}
                />

                <div className="blog-full-description">
                    {selectedBlog.Description}
                </div>

                {selectedBlog.content.map((item, index) => {
                    if (item.type === "heading") {
                        return <h2 key={index}>{item.text}</h2>;
                    }

                    if (item.type === "paragraph") {
                        return <p key={index}>{item.text}</p>;
                    }

                    if (item.type === "list") {
                        return (
                            <ul key={index}>
                                {item.items.map((text, i) => (
                                    <li key={i}>{text}</li>
                                ))}
                            </ul>
                        );
                    }

                    return null;
                })}
            </section>
        )
    }

    return (
        <section className="blog-section">

            <div className="blog-header">
                <h1>The Yagnik Software & Taxation Blog</h1>
            </div>

            <div className="blog-container">

                {blogs.map((blog, index) => (
                    <div
                        className="blog-card"
                        key={blog.id || index}
                        onClick={() => blogsubmit(blog)}
                    >

                        <div className="blog-image">
                            <img
                                src={blog.image}
                                alt={blog.title}
                            />
                        </div>

                        <div className="blog-content">

                            <span className="blog-category">
                                BUSINESS
                            </span>

                            <h2>{blog.title}</h2>

                            <p>{blog.description}</p>

                            <div className="blog-footer">
                                <button
                                    type="button"
                                    onClick={(e) => {
                                        e.stopPropagation()
                                        blogsubmit(blog)
                                    }}
                                >
                                    Read More →
                                </button>

                                <span>Read Article</span>
                            </div>

                        </div>
                    </div>
                ))}

            </div>
        </section>
    )


}

export default BlogsNews
