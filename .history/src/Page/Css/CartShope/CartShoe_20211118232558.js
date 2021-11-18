import React from "react";

const CartShoe = () => {
  return (
    <>
      <div class="card">
        <span class="like">
          <i class="bx bx-heart"></i>
        </span>
        <span class="cart">
          <i class="bx bx-cart-alt"></i>
        </span>
        <div class="card__img">
          <img src="Nike Zoom KD 12.png" alt="" />
        </div>
        <h2 class="card__title">Nike Zoom KD 12</h2>
        <p class="card__price">$99</p>
        <div class="card__size">
          <h3>Size:</h3>
          <span>6</span>
          <span>7</span>
          <span>8</span>
          <span>9</span>
        </div>
        <div class="card__color">
          <h3>Color:</h3>
          <span class="green"></span>
          <span class="red"></span>
          <span class="black"></span>
        </div>
        <div class="card__action">
          <button>Buy now</button>
          <button>Add cart</button>
        </div>
      </div>
    </>
  );
};

export default CartShoe;
