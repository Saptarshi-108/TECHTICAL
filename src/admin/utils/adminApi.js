import axios from "axios";

const API = axios.create({
  baseURL: "https://techtical.onrender.com/api",
});

export const fetchAllBlogs = () => API.get("/blogs");
export const createBlog = (data, token) =>
  API.post("/blogs/create", data, {
    headers: { Authorization: `Bearer ${token}` },
  });
export const deleteBlog = (id, token) =>
  API.delete(`/blogs/${id}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
