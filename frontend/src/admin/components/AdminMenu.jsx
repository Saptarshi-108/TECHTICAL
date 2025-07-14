import React from "react";
import { Link, useLocation } from "react-router-dom";
import "../pages/AdminBlog.css";
import "./AdminMenu.css"; // Create this new file for styles

const AdminMenu = () => {
  const { pathname } = useLocation();

  return (
    <div className="admin-menu">
      <h3 className="admin-menu-title">Admin Panel</h3>
      <ul className="admin-menu-list">
        <li className={pathname === "/admin/dashboard" ? "active" : ""}>
          <Link to="/admin/dashboard">Dashboard</Link>
        </li>
        <li className={pathname === "/admin/editor" ? "active" : ""}>
          <Link to="/admin/editor">Write Blog</Link>
        </li>
        <li className={pathname === "/admin/blogs" ? "active" : ""}>
          <Link to="/admin/blogs">My Blogs</Link>
        </li>
      </ul>
    </div>
  );
};

export default AdminMenu;
