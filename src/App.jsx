import React, { useState } from "react";
import Topbar from "./components/Topbar/Topbar";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Feature from "./components/Feature/Feature";
import Product from "./components/Product/Product";
import Productcard from "./components/Productcard/Productcard";
import Category from "./components/Category/Category";
import Blog from "./components/Blog/Blog";
import BlogSection from "./components/BlogSection/BlogSection";
import TopSellers from "./components/TopSellers/TopSellers";
import Footer from "./components/Footer/Footer";export default function App() {
  const [activeNav, setActiveNav] = useState(0);

  const topbar = {
    left: "Get 10% Off on Your First Order",
    right: ["Track Your Order", "Help", "USD $"],
  };

  const header = {
    brand: "BESTXTORE",
    categories: "All Categories",
    nav: ["Home", "New Arrivals", "Top Sellers", "Blog", "Contact Us"],
    icons: [
      { label: "Search", url: "https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/googlesearchconsole.svg" },
      { label: "User", url: "https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/github.svg" },
      { label: "Heart", url: "https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/heart.svg" },
      { label: "Cart", url: "https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/shoppingcart.svg" },
    ],
  };

  const hero = {
    mini: "Microsoft Headphone",
    titleLines: ["AirPods Pro", "2023"],
    desc: "The ultimate in-ear audio experience with premium sound and noise cancellation.",
    bullets: ["Up to 2x more Active Noise Cancellation", "Adaptive Transparency", "Personalized Spatial Audio"],
    buttons: ["Shop Now", "Video"],
    bg: "https://images.pexels.com/photos/3374204/pexels-photo-3374204.jpeg?auto=compress&cs=tinysrgb&w=1600",
  };

  const strip = [
    { title: "FREE SHIPPING", sub: "Orders Over $99", theme: "teal", icon: "🚚" },
    { title: "CONFIRM PAYMENT", sub: "100% Secure Payment", theme: "dark", icon: "💳" },
    { title: "TAX FREE", sub: "Save Up To 10%", theme: "teal", icon: "🏷️" },
    { title: "FREE DISCOUNT", sub: "Weekly Offers", theme: "dark", icon: "🎁" },
  ];

  const flashSale = {
    title: "Flash Sale",
    items: [
      { off: "-50%", title: "Lenovo Laptop ThinkPad", price: 29.99, oldPrice: 59.99, rating: 4.9, img: "https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1200" },
      { off: "-15%", title: "New Bluetooth Keyboard", price: 29.99, oldPrice: 35.99, rating: 4.7, img: "https://images.pexels.com/photos/177840/pexels-photo-177840.jpeg?auto=compress&cs=tinysrgb&w=1200" },
      { off: "-30%", title: "Smart Watch Series", price: 49.99, oldPrice: 69.99, rating: 4.8, img: "https://images.pexels.com/photos/277319/pexels-photo-277319.jpeg?auto=compress&cs=tinysrgb&w=1200" },
    ],
  };

  const categories = {
    title: "Categories",
    cards: [
      { name: "Smartphones", items: ["iPhone", "Samsung", "Xiaomi", "Accessories"], link: "View all" },
      { name: "Camera", items: ["DSLR", "Action Cam", "Lens", "Tripod"], link: "View all" },
      { name: "Wearables", items: ["Smart Watch", "Band", "Headset", "Charger"], link: "View all" },
      { name: "Headphones", items: ["AirPods", "Sony", "JBL", "Gaming"], link: "View all" },
      { name: "Tablet", items: ["iPad", "Android Tab", "Pen", "Cover"], link: "View all" },
      { name: "Laptop", items: ["MacBook", "Lenovo", "HP", "Dell"], link: "View all" },
    ],
  };

  const newArrivals = {
    title: "New Arrivals",
    items: [
      { off: "-20%", title: "MacBook Air M1 256GB", price: 525, oldPrice: 650, rating: 4.8, img: "https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1200" },
      { off: "-10%", title: "Apple iPhone 14 Pro", price: 799, oldPrice: 899, rating: 4.9, img: "https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=1200" },
      { off: "-15%", title: "Apple Watch Series 8", price: 259, oldPrice: 299, rating: 4.7, img: "https://images.pexels.com/photos/277319/pexels-photo-277319.jpeg?auto=compress&cs=tinysrgb&w=1200" },
      { off: "-25%", title: "Logitech MX Keyboard", price: 89, oldPrice: 119, rating: 4.6, img: "https://images.pexels.com/photos/177840/pexels-photo-177840.jpeg?auto=compress&cs=tinysrgb&w=1200" },
      { off: "-30%", title: "Sony WH Headphones", price: 199, oldPrice: 279, rating: 4.8, img: "https://images.pexels.com/photos/159853/headphones-headset-audio-equipment-sound-159853.jpeg?auto=compress&cs=tinysrgb&w=1200" },
      { off: "-18%", title: "Canon DSLR Camera", price: 399, oldPrice: 489, rating: 4.5, img: "https://images.pexels.com/photos/51383/photo-camera-subject-photographer-51383.jpeg?auto=compress&cs=tinysrgb&w=1200" },
      { off: "-22%", title: "Gaming Controller Pro", price: 45, oldPrice: 59, rating: 4.4, img: "https://images.pexels.com/photos/394565/pexels-photo-394565.jpeg?auto=compress&cs=tinysrgb&w=1200" },
      { off: "-12%", title: "JBL Portable Speaker", price: 69, oldPrice: 79, rating: 4.6, img: "https://images.pexels.com/photos/63703/pexels-photo-63703.jpeg?auto=compress&cs=tinysrgb&w=1200" },
    ],
  };

  const topSellers = {
    title: "Top Sellers",
    items: [
      { off: "-35%", title: "iPhone 14 Plus", price: 699, oldPrice: 849, rating: 4.9, img: "https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=1200" },
      { off: "-20%", title: "MacBook Air M2", price: 899, oldPrice: 1099, rating: 4.8, img: "https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1200" },
      { off: "-28%", title: "Logitech Gaming Mouse", price: 39, oldPrice: 54, rating: 4.7, img: "https://images.pexels.com/photos/394566/pexels-photo-394566.jpeg?auto=compress&cs=tinysrgb&w=1200" },
      { off: "-16%", title: "AirPods Pro 2", price: 189, oldPrice: 225, rating: 4.8, img: "https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg?auto=compress&cs=tinysrgb&w=1200" },
    ],
  };

  const blog = {
    title: "Blog",
    posts: [
      { title: "How to choose a smart watch", date: "2026-01-12", img: "https://images.pexels.com/photos/267394/pexels-photo-267394.jpeg?auto=compress&cs=tinysrgb&w=1200" },
      { title: "Best headphones for gaming", date: "2026-01-20", img: "https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=1200" },
      { title: "Laptop buying guide 2026", date: "2026-02-01", img: "https://images.pexels.com/photos/303383/pexels-photo-303383.jpeg?auto=compress&cs=tinysrgb&w=1200" },
    ],
  };

  const footer = {
    brand: "BESTXTORE",
    desc: "Quality products, fast delivery, easy returns.",
    cols: [
      { title: "Customer Service", links: ["Help Center", "Track Order", "Returns", "Contact Us"] },
      { title: "About", links: ["About Us", "Careers", "Press", "Affiliate"] },
      { title: "Account", links: ["My Account", "Wishlist", "Orders", "Settings"] },
    ],
    socials: [
      { label: "instagram", url: "https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/instagram.svg" },
      { label: "facebook", url: "https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/facebook.svg" },
      { label: "tiktok", url: "https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/tiktok.svg" },
      { label: "youtube", url: "https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/youtube.svg" },
    ],
    copy: "© 2026 BESTXTORE. All rights reserved.",
  };

  return (
    <div className="home">
      <Topbar left={topbar.left} right={topbar.right} />
      <Header
        brand={header.brand}
        categories={header.categories}
        nav={header.nav}
        icons={header.icons}
        activeNav={activeNav}
        setActiveNav={setActiveNav}
      />
      <Hero
        mini={hero.mini}
        titleLines={hero.titleLines}
        desc={hero.desc}
        bullets={hero.bullets}
        buttons={hero.buttons}
        bg={hero.bg}
      />
      <FeatureStrip items={strip} />
      <ProductSection title={flashSale.title} items={flashSale.items} cols={3} />
      <CategorySection title={categories.title} cards={categories.cards} />
      <ProductSection title={newArrivals.title} items={newArrivals.items} cols={4} />
      <ProductSection title={topSellers.title} items={topSellers.items} cols={4} />
      <BlogSection title={blog.title} posts={blog.posts} />
      <Footer brand={footer.brand} desc={footer.desc} cols={footer.cols} socials={footer.socials} copy={footer.copy} />
    </div>
  );
}
