import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { openCheckout } from "../features/checkoutSlice";

const Checkout = () => {
  const dispatch = useDispatch();
  const { cartItems } = useSelector((store) => store.cart);

  return (
    <>
      <aside>
        <div className="modal-container">
          <div className="modal">
            <h4>Items to purchase:</h4>
            <div className="items-list">
              {cartItems.map((el) => {
                return <li>{el.title}</li>;
              })}
            </div>
            <button
              onClick={() => {
                dispatch(openCheckout());
              }}
            >
              CLOSE
            </button>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Checkout;
