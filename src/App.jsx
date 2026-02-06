import Home from "./components/Home/Home";
import "./index.css";

export default function App() {
  const data = {
    topbar: {
      left: "Get 10% Off on Your First Order",
      right: ["Track Your Order", "Help", "USD $"],
    },

    header: {
      brand: "BESTXTORE",
      categories: "All Categories",
      nav: [
        "Home",
        "Product",
        "Hot Deals",
        "New Arrivals",
        "Special Offers",
        "Blog",
        "About Us",
        "Contact Us",
      ],
      icons: [
        {
          id: "search",
          label: "Search",
          url: "https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/googlesearchconsole.svg",
        },
        {
          id: "user",
          label: "Account",
          url: "https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/github.svg",
        },
        {
          id: "heart",
          label: "Wishlist",
          url: "https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/heart.svg",
        },
        {
          id: "cart",
          label: "Cart",
          url: "https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/shoppingcart.svg",
        },
      ],
    },

    hero: {
      mini: "Microsoft Headphone",
      title: "AirPods Pro\n2023",
      desc: "The ultimate in-ear audio experience with premium sound and noise cancellation.",
      bullets: [
        "Up to 2x more Active Noise Cancellation",
        "Adaptive Transparency",
        "Personalized Spatial Audio",
      ],
      buttons: ["Shop Now", "Video"],
      bg: "https://images.pexels.com/photos/3374204/pexels-photo-3374204.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },

    featureStrip: [
      {
        id: 1,
        title: "FREE SHIPPING",
        sub: "Orders Over $99",
        theme: "teal",
        icon: "🚚",
      },
      {
        id: 2,
        title: "CONFIRM PAYMENT",
        sub: "100% Secure Payment",
        theme: "dark",
        icon: "💳",
      },
      {
        id: 3,
        title: "TAX FREE",
        sub: "Save Up To 10%",
        theme: "teal",
        icon: "🏷️",
      },
      {
        id: 4,
        title: "FREE DISCOUNT",
        sub: "Weekly Offers",
        theme: "dark",
        icon: "🎁",
      },
    ],

    flashSale: {
      title: "Flash Sale",
      items: [
        {
          id: 1,
          tag: "Hot",
          off: "-50%",
          title: "Lenovo Laptop ThinkPad",
          price: 29.99,
          oldPrice: 59.99,
          rating: 4.9,
          img: "https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1200",
        },
        {
          id: 2,
          tag: "New",
          off: "-15%",
          title: "New Bluetooth Keyboard",
          price: 29.99,
          oldPrice: 35.99,
          rating: 4.7,
          img: "https://images.pexels.com/photos/177840/pexels-photo-177840.jpeg?auto=compress&cs=tinysrgb&w=1200",
        },
        {
          id: 3,
          tag: "Hot",
          off: "-30%",
          title: "Smart Watch Series",
          price: 49.99,
          oldPrice: 69.99,
          rating: 4.8,
          img: "https://images.pexels.com/photos/277319/pexels-photo-277319.jpeg?auto=compress&cs=tinysrgb&w=1200",
        },
      ],
    },

    categories: {
      title: "Categories",
      cards: [
        {
          id: 1,
          name: "Smartphones",
          items: ["iPhone", "Samsung", "Xiaomi", "Accessories"],
          link: "View all",
        },
        {
          id: 2,
          name: "Camera",
          items: ["DSLR", "Action Cam", "Lens", "Tripod"],
          link: "View all",
        },
        {
          id: 3,
          name: "Wearables",
          items: ["Smart Watch", "Band", "Headset", "Charger"],
          link: "View all",
        },
        {
          id: 4,
          name: "Headphones",
          items: ["AirPods", "Sony", "JBL", "Gaming"],
          link: "View all",
        },
        {
          id: 5,
          name: "Tablet",
          items: ["iPad", "Android Tab", "Pen", "Cover"],
          link: "View all",
        },
        {
          id: 6,
          name: "Laptop",
          items: ["MacBook", "Lenovo", "HP", "Dell"],
          link: "View all",
        },
      ],
    },
  };

  const { topbar, header, hero, featureStrip, flashSale, categories } = data;

  return (
    <Home
      topbar={topbar}
      header={header}
      hero={hero}
      featureStrip={featureStrip}
      flashSale={flashSale}
      categories={categories}
    />
  );
}
