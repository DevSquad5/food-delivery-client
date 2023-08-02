import React, { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";

const IncreaseDecreaseButton = () => {
  const [quantity, setQuantity] = useState(1); // [1, function
  const handleQuantityIncrease = () => {
    setQuantity(quantity + 1);
  };
  const handleQuantityDecrease = () => {
    setQuantity(quantity - 1);
  };
  const handleOnChange = (e) => {
    setQuantity(e.target.value);
  };
  return (
    <div className="increase-decrease d-flex">
      <button className="btn decrease" onClick={handleQuantityDecrease}>
        <FaMinus />
      </button>
      <input type="number" value={quantity} onChange={handleOnChange} />
      <button className="btn increase" onClick={handleQuantityIncrease}>
        <FaPlus />
      </button>
    </div>
  );
};

export default IncreaseDecreaseButton;
