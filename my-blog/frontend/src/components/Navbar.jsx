import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext"; // assuming you use context

import "./Navbar.css";

function Navbar() {
  const [isShrunk, setIsShrunk] = useState(false);
  const { auth, logout } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsShrunk(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <nav className={isShrunk ? "shrink" : ""}>
      {/* <div className="navbar-logo">
        <img src="/assets/logo_tactical.png" alt="TechTical Logo" />
      </div> */}
      <h1 className={isShrunk ? "shrink" : ""}>TECHTICAL</h1>

      <div className="navbar-contents">
        <Link to="/">
          <button className="grow_skew_backward">Home</button>
        </Link>
        <Link to="/blogs">
          <button className="grow_skew_backward">Blogs</button>
        </Link>
        <Link to="/about">
          <button className="grow_skew_backward">About</button>
        </Link>
      </div>

      <div className="navbar-login">
        {auth ? (
          <>
            <span className="user-name">{auth.username}</span>
            {auth.role === "admin" && (
              <Link to="/admin/dashboard">
                <button className="grow_skew_backward">Admin</button>
              </Link>
            )}
            <button className="grow_skew_backward" onClick={handleLogout}>
              Logout
            </button>
          </>
        ) : (
          <Link to="/login">
            <button className="grow_skew_backward">Login</button>
          </Link>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
