import React from "react";

const Header = ({ brand, categories, nav, icons, activeNav, setActiveNav }) => {
  return (
    <div className="header">
      <div className="container headerRow">
        <div className="brand">{brand}</div>

        <div className="searchBox">
          <button className="catBtn">{categories} ▾</button>
          <input className="searchInput" placeholder="Search products..." />
          <button className="searchBtn">Search</button>
        </div>

        <div className="icons">
          {icons.map((item, index) => (
            <button key={index} className="iconBtn">
              <img src={item.url} alt={item.label} />
            </button>
          ))}
        </div>
      </div>

      <div className="nav">
        {nav.map((item, index) => (
          <button
            key={index}
            className={`navLink ${activeNav === index ? "active" : ""}`}
            onClick={() => setActiveNav(index)}
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Header;
