import React from "react";

const About = () => {
  return (
    <div className="about-desc">
      <h2>About This Platform</h2>
      <p>
        This platform was created to delve into the intersection of warfare,
        geopolitics, and their deep-rooted effects on societies worldwide.
      </p>
      <p>
        Here, we aim to shed light on overlooked narratives, critical analysis
        of modern strategies, and the shifting balance of power among global
        players.
      </p>
      <p>
        With each article, we hope to bring a deeper understanding of conflict —
        not just as a military phenomenon, but as a humanitarian crisis that
        affects generations.
      </p>
      <div className="about-me">
        <div className="about-pfp">
          <img src="public\assets\logo_tactical.png"></img>
        </div>
        <div className="about-me-desc">
          <p id="intro">
            <p>
              Hi! My name is Saptarshi. I am an aspiring software developer
              based in India. Warfare, Armaments, Armed Forces, Strategy,... I
              am curious about everything.
            </p>
            <p>
              My friends think I like warfare just because I watch a lot of
              action movies but that is abosolutely not the case.I do understand
              the loss and devastation that comes with it. Not that I don't
              admire a good movie now and then.
            </p>
            <p>
              I hope by peeking into our past and obtaining valuable lessons,
              may we avoid future wars.
            </p>
          </p>
          <p>
            <i>
              P.S. - I did the silhoutte by myself(left). I use AutoDesk
              SketchBook Pro, if you wish to see more of my art. You can visit
              my website here at [url]
            </i>
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
