import { useState } from "react";
import "./Home.css";

export default function Home({
  topbar,
  header,
  hero,
  featureStrip,
  flashSale,
  categories,
}) {
  const [activeNav, setActiveNav] = useState(header.nav[0]);

  return (
    <div className="home">
      <div className="topbar">
        <div className="container topbarRow">
          <p className="topbarLeft">{topbar.left}</p>
          <div className="topbarRight">
            {topbar.right.map((item) => (
              <button key={item} className="topbarBtn">
                {item}
              </button>
            ))}
          </div>
        </div>
      </div>

      <header className="header">
        <div className="container headerRow">
          <div className="brand">{header.brand}</div>

          <div className="searchBox">
            <button className="catBtn">
              {header.categories} ▾
            </button>
            <input placeholder="Search products..." />
            <button className="searchBtn">Search</button>
          </div>

          <div className="icons">
            {header.icons.map((icon) => (
              <button key={icon.id} className="iconBtn">
                <img src={icon.url} alt={icon.label} />
              </button>
            ))}
          </div>
        </div>

        <nav className="nav">
          {header.nav.map((nav) => (
            <button
              key={nav}
              className={`navBtn ${activeNav === nav ? "active" : ""}`}
              onClick={() => setActiveNav(nav)}
            >
              {nav}
            </button>
          ))}
        </nav>
      </header>

      <section className="hero" style={{ backgroundImage: `url(${hero.bg})` }}>
        <div className="container heroContent">
          <span className="heroMini">{hero.mini}</span>
          <h1 className="heroTitle">{hero.title}</h1>
          <p className="heroDesc">{hero.desc}</p>

          <ul className="heroList">
            {hero.bullets.map((b) => (
              <li key={b}>{b}</li>
            ))}
          </ul>

          <div className="heroBtns">
            {hero.buttons.map((btn) => (
              <button key={btn} className="heroBtn">
                {btn}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="features">
        <div className="container featuresRow">
          {featureStrip.map((f) => (
            <div key={f.id} className={`featureCard ${f.theme}`}>
              <span className="featureIcon">{f.icon}</span>
              <div>
                <h4>{f.title}</h4>
                <p>{f.sub}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2>{flashSale.title}</h2>

          <div className="productGrid">
            {flashSale.items.map((p) => (
              <div key={p.id} className="productCard">
                <div className="productImg">
                  <img src={p.img} alt={p.title} />
                  <span className="badge">{p.off}</span>
                </div>
                <h4>{p.title}</h4>
                <div className="price">
                  ${p.price} <span>${p.oldPrice}</span>
                </div>
                <div className="rating">⭐ {p.rating}</div>
                <button className="cartBtn">Add To Cart</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section light">
        <div className="container">
          <h2>{categories.title}</h2>

          <div className="categoryGrid">
            {categories.cards.map((c) => (
              <div key={c.id} className="categoryCard">
                <h4>{c.name}</h4>
                <ul>
                  {c.items.map((it) => (
                    <li key={it}>{it}</li>
                  ))}
                </ul>
                <a>{c.link}</a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
