import { useState } from "react";
import { Link } from "react-router-dom";
import "./Home.css";

export default function TopSellers({ data }) {
  const { topbar, header, bestSellers, footer } = data;
  const [activeNav, setActiveNav] = useState("Top Sellers");

  return (
    <div className="home">
      <div className="topbar">
     
   <div className="container topbarRow">
          <div className="topbarLeft">{topbar.left}</div>
          <div className="topbarRight">
            {topbar.right.map((item, index) => (
              <button key={index} className="topbarBtn">
                {item}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="header">
        <div className="container headerRow">
          <Link className="brand" to="/">
            {header.brand}
          </Link>

          <div className="searchBox">
            <button className="catBtn">{header.categories} ▾</button>
            <input className="searchInput" placeholder="Search products..." />
            <button className="searchBtn">Search</button>
          </div>

          <div className="icons">
            {header.icons.map((item, index) => (
              <button key={index} className="iconBtn">
                <img src={item.url} alt={item.label} />
              </button>
            ))}
          </div>
        </div>

        <div className="nav">
          {header.nav.map((item, index) =>
            item === "Blog" ? (
              <Link
                key={index}
                to="/blog"
                className={`navLink ${activeNav === item ? "active" : ""}`}
                onClick={() => setActiveNav(item)}
              >
                {item}
              </Link>
            ) : item === "Top Sellers" ? (
              <Link
                key={index}
                to="/top-sellers"
                className={`navLink ${activeNav === item ? "active" : ""}`}
                onClick={() => setActiveNav(item)}
              >
                {item}
              </Link>
            ) : (
              <Link
                key={index}
                to="/"
                className={`navLink ${activeNav === item ? "active" : ""}`}
                onClick={() => setActiveNav(item)}
              >
                {item}
              </Link>
            )
          )}
        </div>
      </div>

      <div className="page">
        <div className="container pageBody">
          <div className="pageTitle">{bestSellers.title}</div>

          <div className="grid grid4">
            {bestSellers.items.map((item, index) => (
              <div key={index} className="card">
                <div className="cardImg">
                  <img src={item.img} alt={item.title} />
                  <span className="tag">{item.off}</span>
                </div>
                <div className="cardTitle">{item.title}</div>
                <div className="cardRow">
                  <div className="price">
                    ${item.price} <span>${item.oldPrice}</span>
                  </div>
                  <div className="rate">⭐ {item.rating}</div>
                </div>
                <button className="btn dark">Add To Cart</button>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="footer">
        <div className="container footerRow">
          <div className="footerLeft">
            <div className="footerBrand">{footer.brand}</div>
            <div className="footerDesc">{footer.desc}</div>

            <div className="footerSubRow">
              <input className="footerInput" placeholder="Your email" />
              <button className="footerBtn">Submit</button>
            </div>

            <div className="socials">
              {footer.socials.map((item, index) => (
                <button key={index} className="socialBtn">
                  <img src={item.url} alt={item.label} />
                </button>
              ))}
            </div>
          </div>

          <div className="footerCols">
            {footer.cols.map((col, index) => (
              <div key={index} className="footerCol">
                <div className="footerTitle">{col.title}</div>
                {col.links.map((link, i) => (
                  <a key={i} className="footerLink" href="#">
                    {link}
                  </a>
                ))}
              </div>
            ))}
          </div>
        </div>

        <div className="container footerBottom">
          <div className="footerCopy">{footer.copy}</div>
        </div>
      </div>
    </div>
  );
}
