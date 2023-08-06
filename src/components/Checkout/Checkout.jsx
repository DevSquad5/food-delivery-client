import React, { useEffect, useState } from "react";
import { FaCheck, FaMapMarkerAlt } from "react-icons/fa";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getLocation } from "../../helper/SessionHelper";
import "./Checkout.css";

const Checkout = () => {
  const { cartItems, totalPrice, numOfItems } = useSelector(
    (state) => state.cart
  );
  const [location, setLocation] = useState(null);
  useEffect(() => {
    setLocation(getLocation());
  }, []);
  return (
    <div className="container-lg pb-5">
      <div className="row">
        <div className="col-md-7">
          <div className="delivery-details">
            <h3>DELIVERY DETAILS</h3>
            <div className="delivery-option">
              <h4>Delivery Option</h4>
              <div className="delivery-option-form d-flex">
                <div class="form-check">
                  <input class="" type="radio" name="del-op" checked />
                  <label class="form-check-label" for="flexRadioDefault1">
                    Home Delivery
                  </label>
                </div>
                <div class="form-check">
                  <input class="" type="radio" name="del-op" />
                  <label class="form-check-label" for="flexRadioDefault2">
                    Take Away
                  </label>
                </div>
              </div>
            </div>

            <div className="delivery-address">
              <h4>Delivery Addresses</h4>
              <div className="add-address-from">
                <div class="input-group mb-3">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Set Location   "
                    value={location?.suburb + " " + location?.city}
                  />
                  <button class="btn z  input-group-text" id="basic-addon2">
                    Add Address
                    <FaMapMarkerAlt />
                  </button>
                </div>
              </div>
              <div className="text-center">
                <Link to="/info">View Saved Address</Link>.
              </div>
              <div className="address-selection-form">
                <div class="form-check justify-content-between align-items-center">
                  <div>
                    <h5>Selected Address</h5>
                    <p>{`${location?.suburb} ${location?.city}`}</p>
                  </div>
                  <input class="float-end" type="radio" />
                </div>
              </div>
            </div>

            <div className="additional-info">
              <h4>Additional Information</h4>
              <div className="additional-info-form row">
                <div class="col-12 mb-4">
                  <input
                    type="text"
                    placeholder="Street Number"
                    class="form-control"
                  />
                </div>
                <div class="col-md-6">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="House Number"
                  />
                </div>
                <div class="col-md-6">
                  <input type="text" placeholder="Floor" class="form-control" />
                </div>
                <div class="col-12 my-4">
                  <textarea
                    class="form-control"
                    placeholder="Note"
                    style={{ height: "100px" }}
                  ></textarea>
                </div>
              </div>
            </div>
          </div>

          <div className="payment-option">
            <h3>Payment Options</h3>
            <div className="row">
              <div className="col-md-4">
                <div className="sp-option">
                  <button type="button" class="btn position-relative">
                    <img src="/images/caseon.png" alt="" />
                    <span>Cash On Delivery</span>
                    <span class="position-absolute top-0 start-100 translate-middle p-2 bg-danger border border-light rounded-circle">
                      <span class="visually-hidden">
                        <FaCheck />
                      </span>
                    </span>
                  </button>
                </div>
              </div>
              <div className="col-md-4">
                <div className="sp-option">
                  <button type="button" class="btn position-relative">
                    <img src="/images/caseon.png" alt="" />
                    <span>Digital Payment</span>
                    <span class="position-absolute top-0 start-100 translate-middle p-2 bg-danger border border-light rounded-circle">
                      <span class="visually-hidden">
                        <FaCheck />
                      </span>
                    </span>
                  </button>
                </div>
              </div>
              <div className="col-md-4">
                <div className="sp-option">
                  <button type="button" class="btn position-relative">
                    <img src="/images/caseon.png" alt="" />
                    <span>Wallet Payment</span>
                    <span class="position-absolute top-0 start-100 translate-middle p-2 bg-danger border border-light rounded-circle">
                      <span class="visually-hidden">
                        <FaCheck />
                      </span>
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-5">
          <div className="order-summary">
            <h3>Order Summary</h3>
            <div className="checkout-item">
              {cartItems.map((item) => (
                <div className="cart-item d-flex gap-md-3 align-items-center mb-2">
                  <div className="cart-item-image">
                    <img className="img-fluid" src={item.ItemImage} alt="" />
                  </div>
                  <div className="cart-item-details">
                    <h3>{item.ItemName}</h3>
                    <span>Qty: {item.quantity}</span>
                    <div className="quantity-management d-flex align-items-center gap-2 mt-2">
                      <p>${item.subtotal}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="amount">
              <div className="amount-item d-flex justify-content-between">
                <p>Subtotal</p>
                <h4>${totalPrice}</h4>
              </div>
              <div className="amount-item d-flex justify-content-between">
                <p>Discount</p>
                <h4>$235</h4>
              </div>
              <div className="amount-item d-flex justify-content-between">
                <p>VAT/TAX (15% Excluded)</p>
                <h4>$235</h4>
              </div>
              <div className="amount-item d-flex justify-content-between">
                <p>Delivery Fee</p>
                <h4>Free</h4>
              </div>
              <div className="total">
                <div className="amount-item d-flex justify-content-between">
                  <p>Total</p>
                  <h4>${totalPrice}</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="place-order-area text-center">
              <div class="form-check d-flex justify-content-center align-items-center  text-center">
                <input class="form-check-input" type="checkbox" value="" />
                <label class="form-check-label" for="flexCheckDefault">
                  I agree that placing the order places me under{" "}
                  <Link to="/terms-and-condition">Terms and Conditions</Link> &{" "}
                  <Link to="/privacy-policy">Privacy Policy</Link>
                </label>
              </div>
              <button className="btn">Place Order</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
