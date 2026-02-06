import React, { useState } from "react";

const Home = ({ data }) => {
  const [active, setActive] = useState(0);

  return (
    <div className="home">
      <div className="topbar">
        <div className="container topbarRow">
          <div className="topbarLeft">{data.topbar.left}</div>
          <div className="topbarRight">
            {data.topbar.right.map((item, index) => (
              <button className="topbarBtn" key={index}>
                {item}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="header">
        <div className="container headerRow">
          <div className="brand">{data.header.brand}</div>

          <div className="searchBox">
            <button className="catBtn">{data.header.categories} ▾</button>
            <input className="searchInput" placeholder="Search products..." />
            <button className="searchBtn">Search</button>
          </div>

          <div className="icons">
            {data.header.icons.map((item, index) => (
              <button className="iconBtn" key={index}>
                <img src={item.url} alt={item.label} />
              </button>
            ))}
          </div>
        </div>

        <div className="nav">
          {data.header.nav.map((item, index) => (
            <button
              key={index}
              className={`navLink ${active === index ? "active" : ""}`}
              onClick={() => setActive(index)}
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      <div className="hero" style={{ backgroundImage: `url(${data.hero.bg})` }}>
        <div className="container heroBox">
          <div className="heroMini">{data.hero.mini}</div>
          <div className="heroTitle">
            {data.hero.titleLines.map((item, index) => (
              <div key={index}>{item}</div>
            ))}
          </div>
          <div className="heroDesc">{data.hero.desc}</div>

          <div className="heroBullets">
            {data.hero.bullets.map((item, index) => (
              <div key={index} className="heroBullet">
                • {item}
              </div>
            ))}
          </div>

          <div className="heroBtns">
            {data.hero.buttons.map((item, index) => (
              <button key={index} className={`btn ${index === 0 ? "teal" : "ghost"}`}>
                {item}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="features">
        <div className="container strip">
          {data.strip.map((item, index) => (
            <div key={index} className={`stripItem ${item.theme}`}>
              <div className="stripIcon">{item.icon}</div>
              <div className="stripText">
                <div className="stripTitle">{item.title}</div>
                <div className="stripSub">{item.sub}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="section">
        <div className="container">
          <div className="secTop">
            <div className="secTitle">{data.flashSale.title}</div>
          </div>

          <div className="grid grid3">
            {data.flashSale.items.map((item, index) => (
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

      <div className="section light">
        <div className="container">
          <div className="secTop">
            <div className="secTitle">{data.categories.title}</div>
          </div>

          <div className="catGrid">
            {data.categories.cards.map((item, index) => (
              <div key={index} className="catCard">
                <div className="catTitle">{item.name}</div>
                <div className="catList">
                  {item.items.map((item2, index2) => (
                    <div key={index2} className="catLi">
                      {item2}
                    </div>
                  ))}
                </div>
                <div className="catLink">{item.link}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="section">
        <div className="container">
          <div className="secTop">
            <div className="secTitle">{data.newArrivals.title}</div>
          </div>

          <div className="grid grid4">
            {data.newArrivals.items.map((item, index) => (
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

      <div className="section">
        <div className="container">
          <div className="secTop">
            <div className="secTitle">{data.bestSellers.title}</div>
          </div>

          <div className="grid grid4">
            {data.bestSellers.items.map((item, index) => (
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
            <div className="footerBrand">{data.footer.brand}</div>
            <div className="footerDesc">{data.footer.desc}</div>

            <div className="footerSubRow">
              <input className="footerInput" placeholder="Your email" />
              <button className="footerBtn">Submit</button>
            </div>

            <div className="socials">
              {data.footer.socials.map((item, index) => (
                <button key={index} className="socialBtn">
                  <img src={item.url} alt={item.label} />
                </button>
              ))}
            </div>
          </div>

          <div className="footerCols">
            {data.footer.cols.map((item, index) => (
              <div key={index} className="footerCol">
                <div className="footerTitle">{item.title}</div>
                {item.links.map((item2, index2) => (
                  <a key={index2} className="footerLink" href="#">
                    {item2}
                  </a>
                ))}
              </div>
            ))}
          </div>
        </div>

        <div className="container footerBottom">
          <div className="footerCopy">{data.footer.copy}</div>
        </div>
      </div>
    </div>
  );
};

export default Home;
