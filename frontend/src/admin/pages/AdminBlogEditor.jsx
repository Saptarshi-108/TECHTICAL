import React, { useState, useEffect } from "react";
import axios from "axios";
import { Editor } from "@tinymce/tinymce-react";
import AdminNavbar from "../components/AdminMenu";
import "../components/AdminMenu.css";
import "./AdminBlog.css";

const AdminBlogEditor = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [coverImage, setCoverImage] = useState(null);
  const [submitting, setSubmitting] = useState(false);
  const [loadingEditor, setLoadingEditor] = useState(true); // ⬅️ local loader

  useEffect(() => {
    const timeout = setTimeout(() => setLoadingEditor(false), 1000);
    return () => clearTimeout(timeout);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!coverImage) {
      alert("Cover image is required!");
      return;
    }

    setSubmitting(true);

    try {
      const formData = new FormData();
      formData.append("title", title);
      formData.append("content", content);
      formData.append("coverImage", coverImage);

      await axios.post("http://localhost:5000/api/blogs/create", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      alert("Blog published!");
      setTitle("");
      setContent("");
      setCoverImage(null);
    } catch (err) {
      console.error(err);
      alert("Failed to publish blog");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="admin-blog-editor">
      <AdminNavbar />
      <h2>Write a New Blog</h2>

      {loadingEditor ? (
        <div className="inline-editor-loader">
          <div className="loader"></div>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Blog Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />

          <Editor
            apiKey={import.meta.env.VITE_TINY_MCE}
            value={content}
            init={{
              height: 500,
              menubar: true,
              plugins: [
                "advlist autolink lists link image charmap preview anchor",
                "searchreplace visualblocks code fullscreen",
                "insertdatetime media table paste help wordcount",
              ],
              toolbar:
                "undo redo | formatselect | bold italic | " +
                "alignleft aligncenter alignright alignjustify | " +
                "bullist numlist outdent indent | image media link | code",
            }}
            onEditorChange={(newContent) => setContent(newContent)}
          />

          <h2 className="cover-image-heading">Cover Image</h2>

          <input
            type="file"
            accept="image/*"
            onChange={(e) => setCoverImage(e.target.files[0])}
            required
          />

          <button type="submit" disabled={submitting}>
            {submitting ? "Publishing…" : "Publish Blog"}
          </button>
        </form>
      )}
    </div>
  );
};

export default AdminBlogEditor;
