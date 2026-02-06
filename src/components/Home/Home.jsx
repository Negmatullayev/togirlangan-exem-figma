import { useState } from "react";
import { Link } from "react-router-dom";
import "./Home.css";

export default function Home({
  topbar,
  header,
  hero,
  featureStrip,
  flashSale,
  categories,
  newArrivals,
  bestSellers,
  footer,
}) {
  const [activeNav, setActiveNav] = useState("Home");

  return (
    <div className="home">
      <div className="topbar">
        <div className="container topbarRow">
          <p className="topbarLeft">{topbar.left}</p>
          <div className="topbarRight">
            {topbar.right.map((item, index) => (
              <button key={index} className="topbarBtn">{item}</button>
            ))}
          </div>
        </div>
      </div>

      <header className="header">
        <div className="container headerRow">
          <div className="brandRow">
            <div className="mark">⟂</div>
            <Link className="brand" to="/">{header.brand}</Link>
          </div>

          <div className="searchBox">
            <button className="catBtn">{header.categories} ▾</button>
            <input placeholder="Search products..." />
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

        <nav className="nav">
          {header.nav.map((item, index) => {
            if (item === "Blog") {
              return (
                <Link
                  key={index}
                  to="/blog"
                  className={`navLink ${activeNav === item ? "active" : ""}`}
                  onClick={() => setActiveNav(item)}
                >
                  {item}
                </Link>
              );
            }
            if (item === "Top Sellers") {
              return (
                <Link
                  key={index}
                  to="/top-sellers"
                  className={`navLink ${activeNav === item ? "active" : ""}`}
                  onClick={() => setActiveNav(item)}
                >
                  {item}
                </Link>
              );
            }
            return (
              <Link
                key={index}
                to="/"
                className={`navLink ${activeNav === item ? "active" : ""}`}
                onClick={() => setActiveNav(item)}
              >
                {item}
              </Link>
            );
          })}
        </nav>
      </header>

      <section className="hero" style={{ backgroundImage: `url(${hero.bg})` }}>
        <div className="container heroBody">
          <div className="heroMini">{hero.mini}</div>
          <div className="heroTitle">{hero.title}</div>
          <div className="heroDesc">{hero.desc}</div>

          <div className="heroList">
            {hero.bullets.map((item, index) => (
              <div key={index} className="heroLi">• {item}</div>
            ))}
          </div>

          <div className="heroBtns">
            {hero.buttons.map((item, index) => (
              <button key={index} className={`btn ${index === 0 ? "teal" : "ghost"}`}>
                {item}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="features">
        <div className="container strip">
          {featureStrip.map((item, index) => (
            <div key={index} className={`stripItem ${item.theme}`}>
              <div className="stripIcon">{item.icon}</div>
              <div>
                <div className="stripTitle">{item.title}</div>
                <div className="stripSub">{item.sub}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="secTop">
            <div className="secTitle">{flashSale.title}</div>
          </div>

          <div className="grid grid3">
            {flashSale.items.map((item, index) => (
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
      </section>

      <section className="section light">
        <div className="container">
          <div className="secTop">
            <div className="secTitle">{categories.title}</div>
          </div>

          <div className="catGrid">
            {categories.cards.map((item, index) => (
              <div key={index} className="catCard">
                <div className="catTitle">{item.name}</div>
                <div className="catList">
                  {item.items.map((it, i) => (
                    <div key={i} className="catLi">{it}</div>
                  ))}
                </div>
                <div className="catLink">{item.link}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="secTop">
            <div className="secTitle">{newArrivals.title}</div>
          </div>

          <div className="grid grid4">
            {newArrivals.items.map((item, index) => (
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
      </section>

      <section className="section">
        <div className="container">
          <div className="secTop">
            <div className="secTitle">{bestSellers.title}</div>
            <Link className="miniLink" to="/top-sellers">View all</Link>
          </div>

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
      </section>

      <footer className="footer">
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
                  <a key={i} className="footerLink" href="#">{link}</a>
                ))}
              </div>
            ))}
          </div>
        </div>

        <div className="container footerBottom">
          <div className="footerCopy">{footer.copy}</div>
        </div>
      </footer>
    </div>
  );
}
