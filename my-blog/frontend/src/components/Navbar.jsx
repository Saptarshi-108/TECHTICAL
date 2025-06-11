import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import "./Navbar.css";

function Navbar() {
  const [isShrunk, setIsShrunk] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsShrunk(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
    </nav>
  );
}

export default Navbar;
