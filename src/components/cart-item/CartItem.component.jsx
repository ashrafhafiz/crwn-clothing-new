import React from "react";
import "./CartItem.styles.scss";

// props.item.name
const CartItem = (props) => {
  const {
    item: { name, imageUrl, price, quantity },
  } = props;
  return (
    <div className="cart-item">
      <img src={imageUrl} alt="item" />
      <div className="item-details">
        <span className="name">{name}</span>
        <span className="price">
          {quantity} x ${price}
        </span>
      </div>
    </div>
  );
};

export default CartItem;
