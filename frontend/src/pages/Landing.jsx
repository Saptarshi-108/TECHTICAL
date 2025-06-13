import React, { useEffect, useRef, useState } from "react";
import Typewriter from "typewriter-effect";
import { useNavigate } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import axios from "axios";
import "./Landing.css";

function Landing() {
  const [blogs, setBlogs] = useState([]);
  const navigate = useNavigate();
  const descRef = useRef(null);
  const [fadeIn, setFadeIn] = useState(false);

  const carouselImages = [
    "/assets/carousel/r4zxc5zj2m3f1.jpeg",
    "/assets/carousel/cibi-chakravarthi-LJOxm6ILgwg-unsplash.jpg",
    "/assets/carousel/daniel-VMXXvU1oKw8-unsplash.jpg",
    "/assets/carousel/g5f95to5ni6f1.jpeg",
    "/assets/carousel/jametlene-reskp-1PRCqwqTxn0-unsplash.jpg",
    "/assets/carousel/kevin-schmid-DIq7Bs3ga2s-unsplash.jpg",
    "/assets/carousel/specna-arms-BHtfQxJJBbE-unsplash.jpg",
    "/assets/carousel/vony-razom-OMQB3qvCTq4-unsplash.jpg",
    "/assets/carousel/xn1gkmagxh3f1.jpeg",
  ];

  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 1700,
    autoplay: true,
    autoplaySpeed: 2500,
    slidesToShow: 3,
    slidesToScroll: 1,
    cssEase: "ease-in-out",
    arrows: true,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 1 },
      },
    ],
  };

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

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setFadeIn(entry.isIntersecting);
      },
      {
        threshold: 0.1,
      }
    );

    if (descRef.current) {
      observer.observe(descRef.current);
    }

    return () => {
      if (descRef.current) observer.unobserve(descRef.current);
    };
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

      <div ref={descRef} className={`desc ${fadeIn ? "fade-in" : ""}`}>
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

        <div className="carousel-wrapper">
          <Slider {...carouselSettings}>
            {carouselImages.map((src, index) => (
              <div key={index} className="carousel-slide">
                <img
                  src={src}
                  alt={`carousel-${index}`}
                  className="carousel-image"
                />
              </div>
            ))}
          </Slider>
        </div>

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
            className="grow_skew_backward"
            id="readmore"
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
