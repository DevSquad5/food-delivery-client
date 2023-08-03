import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  changeQuantity,
  decreaseQuantity,
  increaseQuantity,
} from "../../redux/state-slice/cartSlice";
import IncreaseDecreaseButton from "../IncreaseDecrease/IncreaseDecreaseButton";

const CartItem = ({ item }) => {
  const [quantity, setQuantity] = useState(item?.quantity); // [1, function
  const dispatch = useDispatch();
  const handleQuantityIncrease = () => {
    dispatch(increaseQuantity({ _id: item._id }));
  };
  const handleQuantityDecrease = () => {
    if (quantity >= 1) {
      dispatch(
        decreaseQuantity({ _id: item._id, currentQuantity: quantity - 1 })
      );
    }
  };
  const handleOnChange = (e) => {
    if (quantity >= 0) {
      setQuantity(e.target.value);
      dispatch(changeQuantity({ _id: item._id, quantity: e.target.value }));
    }
  };
  //   useEffect(() => {
  //     setQuantity(item?.quantity);
  //   }, [item?.quantity]);
  return (
    <div
      key={item._id}
      className="cart-item d-flex gap-md-3 align-items-center mb-2"
    >
      <div className="cart-item-image">
        <img className="img-fluid" src={item.ItemImage} alt="" />
      </div>
      <div className="cart-item-details">
        <h3>{item.ItemName}</h3>
        <div className="quantity-management d-flex align-items-center gap-2 mt-2">
          <p>${item.subtotal}</p>
          <IncreaseDecreaseButton
            handleQuantityIncrease={handleQuantityIncrease}
            quantity={item.quantity}
            handleQuantityDecrease={handleQuantityDecrease}
            handleOnChange={handleOnChange}
          />
        </div>
      </div>
    </div>
  );
};

export default CartItem;
