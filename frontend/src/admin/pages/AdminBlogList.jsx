import React, { useEffect, useState } from "react";
import axios from "axios";
import { useAuth } from "../../context/AuthContext";
import AdminNavbar from "../components/AdminMenu";
import "../components/AdminMenu.css";
import "../pages/AdminBlog.css";

const AdminBlogList = () => {
  const [blogs, setBlogs] = useState([]);
  const { auth } = useAuth();

  const fetchBlogs = async () => {
    try {
      const res = await axios.get(
        "http://localhost:5000/api/blogs/user/" + auth.user._id,
        {
          headers: { Authorization: `Bearer ${auth.token}` },
        }
      );
      setBlogs(res.data);
    } catch (error) {
      console.error("Error fetching blogs:", error);
    }
  };

  const deleteBlog = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/blogs/${id}`, {
        headers: { Authorization: `Bearer ${auth.token}` },
      });
      fetchBlogs();
    } catch (error) {
      console.error("Error deleting blog:", error);
    }
  };

  useEffect(() => {
    if (auth?.user?._id) {
      fetchBlogs();
    }
  }, [auth]);

  return (
    <div className="admin-blog-list-page">
      <AdminNavbar />
      <h2>All Blogs</h2>
      {blogs.length === 0 ? (
        <p>No blogs created yet.</p>
      ) : (
        blogs.map((blog) => (
          <div key={blog._id} className="admin-blog-card">
            <h4>{blog.title}</h4>
            <button onClick={() => deleteBlog(blog._id)}>Delete</button>
          </div>
        ))
      )}
    </div>
  );
};

export default AdminBlogList;
