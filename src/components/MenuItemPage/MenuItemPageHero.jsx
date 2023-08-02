import React from "react";
import { FaStar, FaStarHalf } from "react-icons/fa";
import IncreaseDecreaseButton from "../IncreaseDecrease/IncreaseDecreaseButton";
import "./MenuItemPageHero.css";
const MenuItemPageHero = () => {
  return (
    <div className="item-page-hero">
      <div className="container-lg">
        <div className="row">
          <div className="col-md-6">
            <div className="item-hero-img">
              <img src="/images/item-hero-d.png" alt="" />
            </div>
          </div>
          <div className="col-md-6">
            <div className="menu-item-content d-flex flex-column row-gap-2">
              <h3>Chicken Pizza</h3>
              <h3 className="price">
                <span className="actual-price me-2">4.55</span>
                3.99
              </h3>

              <p>Tomato sauce, mozzarella, chicken,pineapple*& bbq sauce.</p>
              <div className="customer-review d-flex">
                <div className="rating">
                  <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStarHalf />
                </div>
                <p className="customer-num">(1Customer review)</p>
              </div>
              <div className="add-to-cart d-flex column-gap-3">
                <IncreaseDecreaseButton />
                <button className="btn">Add to cart</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuItemPageHero;
