import React from "react";
import { useDispatch } from "react-redux";
import { addToCheckout } from "../features/checkoutSlice";

const Checkout = () => {
  const dispatch = useDispatch();

  return (
    <>
      <aside>
        <div className="modal-container">
          <div className="modal">
            <h4>Items to purchase:</h4>
            <button
              onClick={() => {
                dispatch(addToCheckout());
              }}
            >
              Click State
            </button>
            <div className="items-list"></div>
            {["harry", "potter", "ron", "weasley"].map((item) => item)}
          </div>
        </div>
      </aside>
    </>
  );
};

export default Checkout;
