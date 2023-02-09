import React from "react";

const Product = () => {
  return (
    <div>
      <h2>Sneaker Company</h2>
      <h1>Fall Limited Edition Sneakers</h1>
      <div className="product-Discription">
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they’ll withstand everything the
        weather can offer.
      </div>
      <div className="product-price">
        <h3>$125.00</h3>
        <div className="sale-price">50%</div>
        <div classname="orig-price">$250.00</div>
      </div>
      <div className="price-box">
        <button onClick={handleClick}> Minus </button>
        <span className="number-items">0</span>
        <button onClick={handleClick}> Plus </button>
      </div>
      to cart
    </div>
  );
};

export default Product;
