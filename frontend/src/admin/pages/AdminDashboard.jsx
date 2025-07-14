import React, { useEffect, useState } from "react";
import AdminMenu from "../components/AdminMenu"; // updated import
import axios from "axios";
import { useAuth } from "../../context/AuthContext";
import "./AdminBlog.css";

const AdminDashboard = () => {
  const { auth } = useAuth();
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchUserBlogs = async () => {
      try {
        const res = await axios.get(
          `http://localhost:5000/api/blogs/user/${auth.user._id}`,
          {
            headers: {
              Authorization: `Bearer ${auth.token}`,
            },
          }
        );
        setBlogs(res.data);
      } catch (err) {
        console.error("Failed to fetch user blogs:", err);
      }
    };

    if (auth?.user?._id) {
      fetchUserBlogs();
    }
  }, [auth]);

  return (
    <div className="admin-blog-editor">
      <AdminMenu />

      <div className="content-box">
        <h2>Admin Dashboard</h2>
        <p>Manage and find your Blogs</p>

        <div className="blog-list">
          {blogs.length === 0 ? (
            <p>No blogs found.</p>
          ) : (
            blogs.map((blog) => (
              <div key={blog._id} className="admin-blog-card">
                <h4>{blog.title}</h4>
                <p>{new Date(blog.createdAt).toLocaleDateString()}</p>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
