import React, { useState } from "react";

function Item({ name, category }) {
  // State variable for cart status
  const [isInCart, setIsInCart] = useState(false);

  // Toggle cart status on button click
  function handleCartToggle() {
    setIsInCart(prevStatus => !prevStatus);
  }

  return (
    <li className={isInCart ? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={handleCartToggle}>
        {isInCart ? "Remove From Cart" : "Add to Cart"}
      </button>
    </li>
  );
}

export default Item;
