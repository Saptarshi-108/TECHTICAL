import React, { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import axios from "axios";
import AdminNavbar from "../components/AdminNavbar";

const AdminBlogEditor = () => {
  const { auth } = useAuth();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [coverImage, setCoverImage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post(
        "https://your-backend-url/api/blogs/create",
        { title, content, coverImage },
        {
          headers: {
            Authorization: `Bearer ${auth.token}`,
          },
        }
      );
      alert("Blog published successfully!");
    } catch (err) {
      alert("Error publishing blog");
    }
  };

  return (
    <div>
      <AdminNavbar />
      <h2>Create a New Blog</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <br />
        <textarea
          placeholder="Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <br />
        <input
          type="text"
          placeholder="Cover Image URL"
          value={coverImage}
          onChange={(e) => setCoverImage(e.target.value)}
        />
        <br />
        <button type="submit">Publish</button>
      </form>
    </div>
  );
};

export default AdminBlogEditor;
