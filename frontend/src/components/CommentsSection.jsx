import React, { useState, useEffect } from "react";
import axios from "axios";
import { useAuth } from "../context/AuthContext";
import "./CommentsSection.css";

const CommentsSection = ({ blogId }) => {
  const { auth } = useAuth();
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`/api/blogs/${blogId}/comments`)
      .then((res) => setComments(res.data))
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, [blogId]);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`/api/blogs/${blogId}/comments`, { content: newComment })
      .then((res) => {
        setComments([...comments, res.data]);
        setNewComment("");
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className="comments-section">
      <h3>Comments</h3>
      {loading ? (
        <p>Loading...</p>
      ) : comments.length === 0 ? (
        <p className="no-comments">
          No comments available. Be the first one to post.
        </p>
      ) : (
        comments.map((c) => (
          <div key={c._id} className="comment">
            <strong>{c.author.username}</strong>{" "}
            <span>{new Date(c.createdAt).toLocaleString()}</span>
            <p>{c.content}</p>
          </div>
        ))
      )}

      {auth ? (
        <form className="comment-form" onSubmit={handleSubmit}>
          <textarea
            placeholder="Write your comment here..."
            value={newComment}
            required
            onChange={(e) => setNewComment(e.target.value)}
          ></textarea>
          <button type="submit">Post Comment</button>
        </form>
      ) : (
        <p className="login-req">Please log in to post comments.</p>
      )}
    </div>
  );
};

export default CommentsSection;
