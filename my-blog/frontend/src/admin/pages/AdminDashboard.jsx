import React from "react";
import AdminNavbar from "../components/AdminNavbar";

const AdminDashboard = () => {
  return (
    <div>
      <AdminNavbar />
      <h2>Welcome to the Admin Dashboard</h2>
      <p>Here you can manage blogs, media, and users.</p>
    </div>
  );
};

export default AdminDashboard;
