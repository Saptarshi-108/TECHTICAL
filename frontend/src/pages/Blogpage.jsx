import React, { useEffect, useState } from "react";
import axios from "axios";
import CommentsSection from "../components/CommentsSection";
import "./Blogpage.css";

const Blogpage = () => {
  const [blogs, setBlogs] = useState([]);
  const [selectedBlog, setSelectedBlog] = useState(null);

  useEffect(() => {
    axios
      .get("https://techtical.onrender.com/api/blogs")
      .then((res) => setBlogs(res.data))
      .catch(() => setBlogs([]));
  }, []);
  const openBlog = (id) => {
    axios
      .get(`/api/blogs/${id}`)
      .then((res) => setSelectedBlog(res.data))
      .catch(console.error);
  };

  if (selectedBlog) {
    return (
      <div className="blogpage-detail">
        <button className="back-btn" onClick={() => setSelectedBlog(null)}>
          ← Back
        </button>
        <h1>{selectedBlog.title}</h1>
        {selectedBlog.coverImage && (
          <img
            src={`/uploads/${selectedBlog.coverImage}`}
            alt="Cover"
            className="cover-image"
          />
        )}
        <div dangerouslySetInnerHTML={{ __html: selectedBlog.content }} />
        <CommentsSection blogId={selectedBlog._id} />
      </div>
    );
  }

  return (
    <div className="blogpage-container">
      <h1>All Blogs</h1>
      {blogs.length === 0 ? (
        <p className="no-blogs">No blogs posted.</p>
      ) : (
        <div className="blog-cards-container">
          {blogs.map((b) => (
            <div
              className="blog-card"
              key={b._id}
              onClick={() => openBlog(b._id)}
            >
              {b.coverImage && (
                <img
                  src={`/uploads/${b.coverImage}`}
                  alt=""
                  className="blog-cover"
                />
              )}
              <div className="blog-content">
                <h2>
                  {b.title.length > 60 ? `${b.title.slice(0, 60)}…` : b.title}
                </h2>
                <p className="blog-date">
                  {new Date(b.createdAt).toLocaleDateString()}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Blogpage;
