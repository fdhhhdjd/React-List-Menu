import React from "react";
import shoe from "../../../Image/shoe.png";
import "CartShoe.css";
const CartShoe = () => {
  return (
    <>
      <div className="card">
        <span className="like">
          <i className="bx bx-heart"></i>
        </span>
        <span className="cart">
          <i className="bx bx-cart-alt"></i>
        </span>
        <div className="card__img">
          <img src={shoe} alt="" />
        </div>
        <h2 className="card__title">Nike Zoom KD 12</h2>
        <p className="card__price">$99</p>
        <div className="card__size">
          <h3>Size:</h3>
          <span>6</span>
          <span>7</span>
          <span>8</span>
          <span>9</span>
        </div>
        <div className="card__color">
          <h3>Color:</h3>
          <span className="green"></span>
          <span className="red"></span>
          <span className="black"></span>
        </div>
        <div className="card__action">
          <button>Buy now</button>
          <button>Add cart</button>
        </div>
      </div>
    </>
  );
};

export default CartShoe;
