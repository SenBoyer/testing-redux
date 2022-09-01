import React from "react";
import { useSelector } from "react-redux";
import { CartIcon } from "../icons";
import { useDispatch } from "react-redux";
import { openCheckout } from "../features/checkoutSlice";

function Navbar() {
  const dispatch = useDispatch();
  const amount = useSelector((store) => store.cart.amount);
  return (
    <>
      <nav>
        <div className="nav-center">
          <h3>redux toolkit</h3>
          <div className="nav-container">
            <CartIcon />
            <div className="amount-container">
              <p
                className="total-amount"
                onClick={() => {
                  dispatch(openCheckout());
                }}
              >
                {amount}
              </p>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
