import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { auth } from "../../firebase/firebase.utils";
import { ReactComponent as Logo } from "../../assets/images/crown.svg";
import "./Header.styles.scss";
import CartIcon from "../cart-icon/CartIcon.component";
import CartDropdown from "../cart-dropdown/CartDropdown.component";
import { selectCartHidden } from "../../redux/cart/cartSelectors";
import { selectCurrentUser } from "../../redux/user/userSelectors";

const Header = (props) => {
  return (
    <div className="header">
      <div>
        <Link
          className="logo-container"
          to="/"
          style={{ fontSize: "2rem", fontWeight: "bold" }}
        >
          <Logo className="logo" />
          CRWN-CLOTHING
        </Link>
      </div>
      <div className="options">
        <Link className="option" to="/shop">
          SHOP
        </Link>
        <Link className="option" to="/contact">
          contact
        </Link>
        {props.currentUser ? (
          <>
            <div
              className="option"
              style={{
                fontWeight: "bold",
                color: "red",
                textTransform: "capitalize",
              }}
            >
              Hello {props.currentUser.displayName}
            </div>
            <div className="option" onClick={() => auth.signOut()}>
              SIGN OUT
            </div>
          </>
        ) : (
          <Link className="option" to="/signin">
            SIGN IN
          </Link>
        )}
        <CartIcon />
      </div>
      {props.hidden ? null : <CartDropdown />}
    </div>
  );
};

// Option 1
// const mapStateToProps = (state) => ({
//   currentUser: state.user.currentUser,
//   hidden: state.cart.hidden,
// });

// Option 2
// const mapStateToProps = (state) => ({
//   currentUser: selectCurrentUser(state),
//   hidden: selectCartHidden(state),
// });

// Option 3
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
});

export default connect(mapStateToProps)(Header);
