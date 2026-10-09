import './Blogsnew.css';
import { blogs } from './blgos';
import { useState } from 'react';
import { Helmet } from 'react-helmet-async';

function BlogsNews() {
const [selectedBlog, setSelectedBlog] = useState(null);

function blogsubmit(blog) {
    setSelectedBlog(blog);
    window.history.pushState(
        { blogId: blog.id },
        '',
        `/blogs/${blog.slug}`
    );
    window.scrollTo(0, 0);
}

function goBack() {
    setSelectedBlog(null);
    window.history.pushState({}, '', '/blogs');
    window.scrollTo(0, 0);
}

// Selected blog ka SEO URL
const pageUrl = selectedBlog
    ? `https://yagnik.store/blogs/${selectedBlog.slug}`
    : 'https://yagnik.store/blogs';

// Blog detail page
if (selectedBlog) {
    return (
        <>
            <Helmet>
                <title>{selectedBlog.title} | Yagnik Software &amp; Taxation</title>

                <meta
                    name="description"
                    content={selectedBlog.description}
                />

                <meta name="robots" content="index, follow" />

                <link rel="canonical" href={pageUrl} />

                <meta property="og:type" content="article" />
                <meta property="og:title" content={selectedBlog.title} />

                <meta
                    property="og:description"
                    content={selectedBlog.description}
                />

                <meta property="og:url" content={pageUrl} />

                <meta
                    property="og:image"
                    content={`https://yagnik.store${selectedBlog.image}`}
                />

                <meta name="twitter:card" content="summary_large_image" />
                <meta
                    name="twitter:title"
                    content={selectedBlog.title}
                />
                <meta
                    name="twitter:description"
                    content={selectedBlog.description}
                />
                <meta
                    name="twitter:image"
                    content={`https://yagnik.store${selectedBlog.image}`}
                />
            </Helmet>

            <section className="blog-detail">
                <button
                    type="button"
                    className="back-button"
                    onClick={goBack}
                >
                    ← Back to Blogs
                </button>

                <h1>{selectedBlog.title}</h1>

                <img
                    src={selectedBlog.image}
                    alt={selectedBlog.title}
                />

                <p className="blog-full-description">
                    {selectedBlog.description}
                </p>

                {selectedBlog.content?.map((item, index) => {
                    if (item.type === 'heading') {
                        return <h2 key={index}>{item.text}</h2>;
                    }

                    if (item.type === 'paragraph') {
                        return <p key={index}>{item.text}</p>;
                    }

                    if (item.type === 'list') {
                        return (
                            <ul key={index}>
                                {item.items.map((text, i) => (
                                    <li key={i} >
                                        {text}
                                    </li>
                                ))}
                            </ul>
                        );
                    }

                    return null;
                })}
            </section>
        </>
    );
}

// All blogs page
return (
    <>
        <Helmet>
            <title>Blogs | Yagnik Software &amp; Taxation</title>
            <meta
                name="description"
                content="Read helpful articles about website development, SEO, GST, accounting, and business solutions from Yagnik Software & Taxation."
            />
            <link
                rel="canonical"
                href="https://yagnik.store/blogs"
            />
        </Helmet>

        <section className="blog-section">
            <div className="blog-header">
                <h1>The Yagnik Software &amp; Taxation Blog</h1>
            </div>

            <div className="blog-container">
                {blogs.map((blog, index) => (
                    <div
                        className="blog-card"
                        key={blog.id ?? index}
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
                                {blog.category || 'BUSINESS'}
                            </span>

                            <h2>{blog.title}</h2>
                            <p>{blog.description}</p>

                            <div className="blog-footer">
                                <button
                                    type="button"
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        blogsubmit(blog);
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
    </>
);


}

export default BlogsNews;
