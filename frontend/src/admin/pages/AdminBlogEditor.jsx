import React, { useState } from "react";
import axios from "axios";
import { Editor } from "@tinymce/tinymce-react";

const AdminBlogEditor = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [coverImage, setCoverImage] = useState(null);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      const formData = new FormData();
      formData.append("title", title);
      formData.append("content", content);
      if (coverImage) formData.append("coverImage", coverImage);

      await axios.post("/api/blogs/create", formData, {
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
    <div className="admin-blog-editor" style={{ padding: "2rem" }}>
      <h2>Write a New Blog</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Blog Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          style={{
            width: "100%",
            padding: "1rem",
            marginBottom: "1rem",
            fontSize: "1.2rem",
          }}
        />

        <Editor
          apiKey="no-api-key"
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
              "undo redo | formatselect | bold italic underline | " +
              "alignleft aligncenter alignright alignjustify | " +
              "bullist numlist outdent indent | image media link | code",
          }}
          onEditorChange={(newContent) => setContent(newContent)}
        />

        <input
          type="file"
          accept="image/*"
          onChange={(e) => setCoverImage(e.target.files[0])}
          style={{ marginTop: "1rem" }}
        />

        <button
          type="submit"
          disabled={submitting}
          style={{
            marginTop: "1rem",
            padding: "1rem 2rem",
            fontSize: "1rem",
            cursor: submitting ? "not-allowed" : "pointer",
          }}
        >
          {submitting ? "Publishing…" : "Publish Blog"}
        </button>
      </form>
    </div>
  );
};

export default AdminBlogEditor;
