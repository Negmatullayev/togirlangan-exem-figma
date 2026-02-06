import React from "react";

const Hero = ({ mini, titleLines, desc, bullets, buttons, bg }) => {
  return (
    <div className="hero" style={{ backgroundImage: `url(${bg})` }}>
      <div className="container heroBox">
        <div className="heroMini">{mini}</div>

        <div className="heroTitle">
          {titleLines.map((item, index) => (
            <div key={index}>{item}</div>
          ))}
        </div>

        <div className="heroDesc">{desc}</div>

        <div className="heroBullets">
          {bullets.map((item, index) => (
            <div key={index} className="heroBullet">
              • {item}
            </div>
          ))}
        </div>

        <div className="heroBtns">
          {buttons.map((item, index) => (
            <button
              key={index}
              className={`btn ${index === 0 ? "teal" : "ghost"}`}
            >
              {item}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
