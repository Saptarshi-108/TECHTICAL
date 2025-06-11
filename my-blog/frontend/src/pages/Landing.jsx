import React from "react";
import Typewriter from "typewriter-effect";
import "./Landing.css";
import About from "./About";
import { Element } from "react-scroll";

function Landing() {
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
            strings: ["Si Vis Pacem, Para Bellum"], // 27 chars
            autoStart: true,
            loop: true,
            delay: 80, // typing: 27 * 80 = 2160 ms
            deleteSpeed: 60, // deleting: 27 * 60 = 1620 ms
            pauseFor: 1200, // total: 2160 + 1200 + 1620 = 4980 ms
          }}
        />

        <i>
          <Typewriter
            className="en_parabellum"
            options={{
              strings: ["If you want peace, prepare for war"], // 36 chars
              autoStart: true,
              loop: true,
              delay: 60, // typing: 36 * 60 = 2160 ms
              deleteSpeed: 45, // deleting: 36 * 45 = 1620 ms
              pauseFor: 1200, // total: 2160 + 1200 + 1620 = 4980 ms
            }}
          />
        </i>
      </div>

      <div className="desc">
        {/* <p id="credits">
          video credits - 𝐁𝐚𝐭𝐭𝐥𝐞 𝐨𝐟 𝐁𝐚𝐤𝐡𝐦𝐮𝐭 | 𝐑𝐞𝐬𝐨𝐧𝐚𝐧𝐜𝐞 𝐱 𝐆𝐞𝐧𝐞𝐬𝐢𝐬 𝐬𝐥𝐨𝐰𝐞𝐝
        </p> */}
        <p>
          <font size="6">
            <b>A</b> website where I talk about war, geopolitics and its
            devastating consequences for humanity.
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
        <div className="blog_heading">
          <h1>Recent Blogs</h1>
        </div>
        <div className="blog-layout">
          <div className="blog-cards">
            <div className="blog-pfp"></div>
            <div className="blog-title"></div>
            <div className="blog-desc"></div>
            <div className="blog-date"></div>
          </div>
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
