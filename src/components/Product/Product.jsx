import React from "react";
import ProductCard from "./ProductCard.jsx";

const Product = ({ title, items, cols }) => {
  return (
    <div className="section">
      <div className="container">
        <div className="secTop">
          <div className="secTitle">{title}</div>
        </div>

        <div className={`grid ${cols === 3 ? "grid3" : "grid4"}`}>
          {items.map((item, index) => (
            <ProductCard key={index} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Product;
