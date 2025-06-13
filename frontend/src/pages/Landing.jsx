import React, { useEffect, useState } from "react";
import Typewriter from "typewriter-effect";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Landing.css";

function Landing() {
  const [blogs, setBlogs] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await axios.get(
          "https://techtical.onrender.com/api/blogs?limit=4"
        );
        setBlogs(res.data);
      } catch (err) {
        console.error("Error fetching blogs:", err);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <div className="landing-layout">
      <video
        src="/assets/landing_video.mp4"
        loop
        autoPlay
        muted
        className="background-video"
      ></video>

      <div className="quote">
        <Typewriter
          className="parabellum"
          options={{
            strings: ["Si Vis Pacem, Para Bellum"],
            autoStart: true,
            loop: true,
            delay: 80,
            deleteSpeed: 60,
            pauseFor: 1200,
          }}
        />
        <i>
          <Typewriter
            className="en_parabellum"
            options={{
              strings: ["If you want peace, prepare for war"],
              autoStart: true,
              loop: true,
              delay: 60,
              deleteSpeed: 45,
              pauseFor: 1200,
            }}
          />
        </i>
      </div>

      <div className="desc">
        <p>
          <font size="6">
            <b>The</b> website where I talk about war, geopolitics, everything
            encompassing from the smallest riots, failed coups to major and
            brutal wars until now.
          </font>
        </p>
        <p>
          The website covers topics on war, weaponry, recent geopolitical
          events, war strategies, and the devastation recent wars caused.{" "}
          <font size="5" color="red">
            <br />
            Some of the contents might be disturbing.
            <br />
            Discretion Advised.
          </font>
        </p>
        <p>
          From analyzing frontline tactics to decoding global power plays, this
          platform aims to uncover the truth behind conflict—its motives,
          mechanics, and impact. Whether you're a history enthusiast, a
          strategist, or simply curious about how wars shape our world. Wars
          today serve a stark reminder of the price humanity pays when diplomacy
          fails.
        </p>

        {/* Recent Blogs Section */}
        <div className="blog_heading">
          <h1>Recent Blogs</h1>
        </div>

        <div className="blog-layout">
          {blogs.map((blog) => (
            <div className="blog-card" key={blog._id}>
              <img
                src={blog.coverImage}
                alt={blog.title}
                className="blog-pfp"
              />
              <h3 className="blog-title">
                {blog.title.length > 30
                  ? blog.title.substring(0, 30) + "..."
                  : blog.title}
              </h3>
              <p className="blog-date">
                {new Date(blog.createdAt).toLocaleDateString()}
              </p>
            </div>
          ))}
        </div>

        <div style={{ textAlign: "center", marginTop: "2rem" }}>
          <button
            className="subscribe-button"
            onClick={() => navigate("/blogs")}
          >
            Read All Blogs
          </button>
        </div>

        <div className="subscribe-newsletter">
          <h2>Subscribe to my newsletter for regular updates</h2>
          <input type="email" placeholder="Enter your email here" />
          <button className="subscribe-button">Subscribe</button>
        </div>
      </div>
    </div>
  );
}

export default Landing;
