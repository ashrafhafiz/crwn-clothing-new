import React from "react";
import { connect } from "react-redux";
import { clearItem, addItem, removeItem } from "../../redux/cart/cartActions";
import "./CheckoutItem.styles.scss";

const CheckoutItem = ({ cartItem, clearItem, addItem, removeItem }) => {
  const { imageUrl, name, quantity, price } = cartItem;
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="item" />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={() => removeItem(cartItem)}>
          &#10094;
        </div>
        {quantity}
        <div className="arrow" onClick={() => addItem(cartItem)}>
          &#10095;
        </div>
      </span>
      <span className="price">{price}</span>
      <div className="remove-button" onClick={() => clearItem(cartItem)}>
        &#10008;
      </div>
    </div>
  );
};

const mapDispatchToProps = { clearItem, addItem, removeItem };

export default connect(null, mapDispatchToProps)(CheckoutItem);
