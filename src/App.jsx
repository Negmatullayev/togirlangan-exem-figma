import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import "./Home.css";

export default function App() {
  const data = {
    topbar: {
      left: "Get 10% Off on Your First Order",
      right: ["Track Your Order", "Help", "USD $"],
    },
    header: {
      brand: "BESTXTORE",
      categories: "All Categories",
      nav: ["Home", "Product", "Hot Deals", "New Arrivals", "Special Offers", "Blog", "Top Sellers", "Contact Us"],
      icons: [
        { id: "search", label: "Search", url: "https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/googlesearchconsole.svg" },
        { id: "user", label: "Account", url: "https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/github.svg" },
        { id: "heart", label: "Wishlist", url: "https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/heart.svg" },
        { id: "cart", label: "Cart", url: "https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/shoppingcart.svg" },
      ],
    },
    hero: {
      mini: "Microsoft Headphone",
      title: "AirPods Pro 2023",
      desc: "The ultimate in-ear audio experience with premium sound and noise cancellation.",
      bullets: ["Up to 2x more Active Noise Cancellation", "Adaptive Transparency", "Personalized Spatial Audio"],
      buttons: ["Shop Now", "Video"],
      bg: "https://images.pexels.com/photos/3374204/pexels-photo-3374204.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
    featureStrip: [
      { title: "FREE SHIPPING", sub: "Orders Over $99", theme: "teal", icon: "🚚" },
      { title: "CONFIRM PAYMENT", sub: "100% Secure Payment", theme: "dark", icon: "💳" },
      { title: "TAX FREE", sub: "Save Up To 10%", theme: "teal", icon: "🏷️" },
      { title: "FREE DISCOUNT", sub: "Weekly Offers", theme: "dark", icon: "🎁" },
    ],
    flashSale: {
      title: "Flash Sale",
      items: [
        { tag: "Hot", off: "-50%", title: "Lenovo Laptop ThinkPad", price: 29.99, oldPrice: 59.99, rating: 4.9, img: "https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1200" },
        { tag: "New", off: "-15%", title: "New Bluetooth Keyboard", price: 29.99, oldPrice: 35.99, rating: 4.7, img: "https://images.pexels.com/photos/177840/pexels-photo-177840.jpeg?auto=compress&cs=tinysrgb&w=1200" },
        { tag: "Hot", off: "-30%", title: "Smart Watch Series", price: 49.99, oldPrice: 69.99, rating: 4.8, img: "https://images.pexels.com/photos/277319/pexels-photo-277319.jpeg?auto=compress&cs=tinysrgb&w=1200" },
      ],
    },
    categories: {
      title: "Categories",
      cards: [
        { name: "Smartphones", items: ["iPhone", "Samsung", "Xiaomi", "Accessories"], link: "View all" },
        { name: "Camera", items: ["DSLR", "Action Cam", "Lens", "Tripod"], link: "View all" },
        { name: "Wearables", items: ["Smart Watch", "Band", "Headset", "Charger"], link: "View all" },
        { name: "Headphones", items: ["AirPods", "Sony", "JBL", "Gaming"], link: "View all" },
        { name: "Tablet", items: ["iPad", "Android Tab", "Pen", "Cover"], link: "View all" },
        { name: "Laptop", items: ["MacBook", "Lenovo", "HP", "Dell"], link: "View all" },
      ],
    },
    newArrivals: {
      title: "New Arrivals",
      items: [
        { tag: "New", off: "-20%", title: "MacBook Air M1 256GB", price: 525, oldPrice: 650, rating: 4.8, img: "https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1200" },
        { tag: "New", off: "-10%", title: "Apple iPhone 14 Pro", price: 799, oldPrice: 899, rating: 4.9, img: "https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=1200" },
        { tag: "New", off: "-15%", title: "Apple Watch Series 8", price: 259, oldPrice: 299, rating: 4.7, img: "https://images.pexels.com/photos/277319/pexels-photo-277319.jpeg?auto=compress&cs=tinysrgb&w=1200" },
        { tag: "New", off: "-25%", title: "Logitech MX Keyboard", price: 89, oldPrice: 119, rating: 4.6, img: "https://images.pexels.com/photos/177840/pexels-photo-177840.jpeg?auto=compress&cs=tinysrgb&w=1200" },
        { tag: "New", off: "-30%", title: "Sony WH Headphones", price: 199, oldPrice: 279, rating: 4.8, img: "https://images.pexels.com/photos/159853/headphones-headset-audio-equipment-sound-159853.jpeg?auto=compress&cs=tinysrgb&w=1200" },
        { tag: "New", off: "-18%", title: "Canon DSLR Camera", price: 399, oldPrice: 489, rating: 4.5, img: "https://images.pexels.com/photos/51383/photo-camera-subject-photographer-51383.jpeg?auto=compress&cs=tinysrgb&w=1200" },
        { tag: "New", off: "-22%", title: "Gaming Controller Pro", price: 45, oldPrice: 59, rating: 4.4, img: "https://images.pexels.com/photos/394565/pexels-photo-394565.jpeg?auto=compress&cs=tinysrgb&w=1200" },
        { tag: "New", off: "-12%", title: "JBL Portable Speaker", price: 69, oldPrice: 79, rating: 4.6, img: "https://images.pexels.com/photos/63703/pexels-photo-63703.jpeg?auto=compress&cs=tinysrgb&w=1200" },
      ],
    },
    bestSellers: {
      title: "Best Sellers",
      items: [
        { tag: "Top", off: "-35%", title: "iPhone 14 Plus", price: 699, oldPrice: 849, rating: 4.9, img: "https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=1200" },
        { tag: "Top", off: "-20%", title: "MacBook Air M2", price: 899, oldPrice: 1099, rating: 4.8, img: "https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1200" },
        { tag: "Top", off: "-28%", title: "Logitech Gaming Mouse", price: 39, oldPrice: 54, rating: 4.7, img: "https://images.pexels.com/photos/394566/pexels-photo-394566.jpeg?auto=compress&cs=tinysrgb&w=1200" },
        { tag: "Top", off: "-16%", title: "AirPods Pro 2", price: 189, oldPrice: 225, rating: 4.8, img: "https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg?auto=compress&cs=tinysrgb&w=1200" },
      ],
    },
    footer: {
      brand: "BESTXTORE",
      desc: "Quality products, fast delivery, easy returns.",
      cols: [
        { title: "Customer Service", links: ["Help Center", "Track Order", "Returns", "Contact Us"] },
        { title: "About", links: ["About Us", "Careers", "Blog", "Press"] },
        { title: "Account", links: ["My Account", "Wishlist", "Orders", "Settings"] },
      ],
      socials: [
        { label: "instagram", url: "https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/instagram.svg" },
        { label: "facebook", url: "https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/facebook.svg" },
        { label: "tiktok", url: "https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/tiktok.svg" },
        { label: "youtube", url: "https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/youtube.svg" },
      ],
      copy: "© 2026 BESTXTORE. All rights reserved.",
    },
  };

  const { topbar, header, hero, featureStrip, flashSale, categories, newArrivals, bestSellers, footer } = data;

  function HeaderBar() {
    return (
      <div className="headerWrap">
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
            <Link className="brand" to="/">{header.brand}</Link>

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
                  <Link key={index} className="navLink" to="/blog">
                    {item}
                  </Link>
                );
              }
              if (item === "Top Sellers") {
                return (
                  <Link key={index} className="navLink" to="/top-sellers">
                    {item}
                  </Link>
                );
              }
              return (
                <Link key={index} className="navLink" to="/">
                  {item}
                </Link>
              );
            })}
          </nav>
        </header>
      </div>
    );
  }

  function BlogPage() {
    const blogPosts = [
      { title: "How to choose a smart watch", date: "2026-01-12" },
      { title: "Best headphones for gaming", date: "2026-01-20" },
      { title: "Laptop buying guide 2026", date: "2026-02-01" },
    ];

    return (
      <div className="page">
        <HeaderBar />
        <div className="container pageBody">
          <h2 className="pageTitle">Blog</h2>
          <div className="list">
            {blogPosts.map((item, index) => (
              <div key={index} className="listItem">
                <div className="listTitle">{item.title}</div>
                <div className="listSub">{item.date}</div>
              </div>
            ))}
          </div>
        </div>
        <FooterBar />
      </div>
    );
  }

  function TopSellersPage() {
    return (
      <div className="page">
        <HeaderBar />
        <div className="container pageBody">
          <h2 className="pageTitle">{bestSellers.title}</h2>
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
        <FooterBar />
      </div>
    );
  }

  function FooterBar() {
    return (
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
      </footer>
    );
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Home
              topbar={topbar}
              header={header}
              hero={hero}
              featureStrip={featureStrip}
              flashSale={flashSale}
              categories={categories}
              newArrivals={newArrivals}
              bestSellers={bestSellers}
              footer={footer}
            />
          }
        />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/top-sellers" element={<TopSellersPage />} />
      </Routes>
    </BrowserRouter>
  );
}
