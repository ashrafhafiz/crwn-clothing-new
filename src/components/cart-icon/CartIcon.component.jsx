import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import "./CartIcon.styles.scss";
import { ReactComponent as ShoppingIcon } from "./../../assets/images/shopping-bag.svg";
import { toggleCartHidden } from "../../redux/cart/cartActions";
import { selectItemsCount } from "../../redux/cart/cartSelectors";

const CartIcon = (props) => {
  return (
    <div className="cart-icon" onClick={props.toggleCartHidden}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{props.itemsCount}</span>
    </div>
  );
};

// const mapDispatchToProps = (dispatch) => ({
//   toggleCartHidden: () => dispatch(toggleCartHidden()),
// });

const mapDispatchToProps = { toggleCartHidden };

// const mapStateToProps = (state) => ({
//   itemsCount: selectItemsCount(state),
// });

const mapStateToProps = createStructuredSelector({
  itemsCount: selectItemsCount,
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
