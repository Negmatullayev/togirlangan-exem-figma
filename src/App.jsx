import Home from "./Home.jsx";

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
        { label: "Search", url: "https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/googlesearchconsole.svg" },
        { label: "User", url: "https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/github.svg" },
        { label: "Heart", url: "https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/heart.svg" },
        { label: "Cart", url: "https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/shoppingcart.svg" },
      ],
    },
    hero: {
      mini: "Microsoft Headphone",
      titleLines: ["AirPods Pro", "2023"],
      desc: "The ultimate in-ear audio experience with premium sound and noise cancellation.",
      bullets: [
        "Up to 2x more Active Noise Cancellation",
        "Adaptive Transparency",
        "Personalized Spatial Audio",
      ],
      buttons: ["Shop Now", "Video"],
      bg: "https://images.pexels.com/photos/3374204/pexels-photo-3374204.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
    strip: [
      { title: "FREE SHIPPING", sub: "Orders Over $99", theme: "teal", icon: "🚚" },
      { title: "CONFIRM PAYMENT", sub: "100% Secure Payment", theme: "dark", icon: "💳" },
      { title: "TAX FREE", sub: "Save Up To 10%", theme: "teal", icon: "🏷️" },
      { title: "FREE DISCOUNT", sub: "Weekly Offers", theme: "dark", icon: "🎁" },
    ],
    flashSale: {
      title: "Flash Sale",
      items: [
        { off: "-50%", title: "Lenovo Laptop ThinkPad", price: 29.99, oldPrice: 59.99, rating: 4.9, img: "https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1200" },
        { off: "-15%", title: "New Bluetooth Keyboard", price: 29.99, oldPrice: 35.99, rating: 4.7, img: "https://images.pexels.com/photos/177840/pexels-photo-177840.jpeg?auto=compress&cs=tinysrgb&w=1200" },
        { off: "-30%", title: "Smart Watch Series", price: 49.99, oldPrice: 69.99, rating: 4.8, img: "https://images.pexels.com/photos/277319/pexels-photo-277319.jpeg?auto=compress&cs=tinysrgb&w=1200" },
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
        { off: "-20%", title: "MacBook Air M1 256GB", price: 525, oldPrice: 650, rating: 4.8, img: "https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1200" },
        { off: "-10%", title: "Apple iPhone 14 Pro", price: 799, oldPrice: 899, rating: 4.9, img: "https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=1200" },
        { off: "-15%", title: "Apple Watch Series 8", price: 259, oldPrice: 299, rating: 4.7, img: "https://images.pexels.com/photos/277319/pexels-photo-277319.jpeg?auto=compress&cs=tinysrgb&w=1200" },
        { off: "-25%", title: "Logitech MX Keyboard", price: 89, oldPrice: 119, rating: 4.6, img: "https://images.pexels.com/photos/177840/pexels-photo-177840.jpeg?auto=compress&cs=tinysrgb&w=1200" },
        { off: "-30%", title: "Sony WH Headphones", price: 199, oldPrice: 279, rating: 4.8, img: "https://images.pexels.com/photos/159853/headphones-headset-audio-equipment-sound-159853.jpeg?auto=compress&cs=tinysrgb&w=1200" },
        { off: "-18%", title: "Canon DSLR Camera", price: 399, oldPrice: 489, rating: 4.5, img: "https://images.pexels.com/photos/51383/photo-camera-subject-photographer-51383.jpeg?auto=compress&cs=tinysrgb&w=1200" },
        { off: "-22%", title: "Gaming Controller Pro", price: 45, oldPrice: 59, rating: 4.4, img: "https://images.pexels.com/photos/394565/pexels-photo-394565.jpeg?auto=compress&cs=tinysrgb&w=1200" },
        { off: "-12%", title: "JBL Portable Speaker", price: 69, oldPrice: 79, rating: 4.6, img: "https://images.pexels.com/photos/63703/pexels-photo-63703.jpeg?auto=compress&cs=tinysrgb&w=1200" },
      ],
    },
    bestSellers: {
      title: "Best Sellers",
      items: [
        { off: "-35%", title: "iPhone 14 Plus", price: 699, oldPrice: 849, rating: 4.9, img: "https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=1200" },
        { off: "-20%", title: "MacBook Air M2", price: 899, oldPrice: 1099, rating: 4.8, img: "https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1200" },
        { off: "-28%", title: "Logitech Gaming Mouse", price: 39, oldPrice: 54, rating: 4.7, img: "https://images.pexels.com/photos/394566/pexels-photo-394566.jpeg?auto=compress&cs=tinysrgb&w=1200" },
        { off: "-16%", title: "AirPods Pro 2", price: 189, oldPrice: 225, rating: 4.8, img: "https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg?auto=compress&cs=tinysrgb&w=1200" },
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
        { url: "https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/instagram.svg", label: "instagram" },
        { url: "https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/facebook.svg", label: "facebook" },
        { url: "https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/tiktok.svg", label: "tiktok" },
        { url: "https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/youtube.svg", label: "youtube" },
      ],
      copy: "© 2026 BESTXTORE. All rights reserved.",
    },
  };

  return <Home data={data} />;
}
