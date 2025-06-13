import React, { useEffect, useState } from "react";
import axios from "axios";
import { useAuth } from "../../context/AuthContext";
import AdminNavbar from "../components/AdminNavbar";

const AdminBlogList = () => {
  const [blogs, setBlogs] = useState([]);
  const { auth } = useAuth();

  const fetchBlogs = async () => {
    const res = await axios.get("https://techtical.onrender.com/api/blogs");
    setBlogs(res.data);
  };

  const deleteBlog = async (id) => {
    await axios.delete(`https://techtical.onrender.com/api/blogs/${id}`, {
      headers: { Authorization: `Bearer ${auth.token}` },
    });
    fetchBlogs();
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <div>
      <AdminNavbar />
      <h2>All Blogs</h2>
      {blogs.map((blog) => (
        <div key={blog._id}>
          <h4>{blog.title}</h4>
          <button onClick={() => deleteBlog(blog._id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default AdminBlogList;
