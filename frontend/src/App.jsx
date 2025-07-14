import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Loader from "./components/Loader";

import Home from "./pages/Landing";
import About from "./pages/About";
import Blog from "./pages/Blogpage";
import Login from "./pages/Login";

// Admin Routes
import AdminRoute from "./admin/routes/AdminRoutes";
import AdminDashboard from "./admin/pages/AdminDashboard";
import AdminBlogEditor from "./admin/pages/AdminBlogEditor";
import AdminBlogList from "./admin/pages/AdminBlogList";

import "./App.css";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2500); // Show loader for 2.5s
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Loader />;

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blogs" element={<Blog />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />

        <Route
          path="/admin/dashboard"
          element={
            <AdminRoute>
              <AdminDashboard />
            </AdminRoute>
          }
        />
        <Route
          path="/admin/editor"
          element={
            <AdminRoute>
              <AdminBlogEditor />
            </AdminRoute>
          }
        />
        <Route
          path="/admin/blogs"
          element={
            <AdminRoute>
              <AdminBlogList />
            </AdminRoute>
          }
        />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
