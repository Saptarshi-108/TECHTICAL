import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

const AdminNavbar = () => {
  const { logout } = useAuth();

  return (
    <nav>
      <Link to="/admin/dashboard">Dashboard</Link> |{" "}
      <Link to="/admin/editor">New Blog</Link> |{" "}
      <Link to="/admin/blogs">Manage Blogs</Link> |{" "}
      <button onClick={logout}>Logout</button>
    </nav>
  );
};

export default AdminNavbar;
