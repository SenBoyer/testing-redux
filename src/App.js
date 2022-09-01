import React from "react";
import Navbar from "./components/Navbar";
import CartContainer from "./components/CartContainer";
import { useEffect } from "react";
import { calculate, getItems } from "./features/cartSlice";
import Modal from "./components/Modal";
import { useDispatch, useSelector } from "react-redux";
import Checkout from "./components/Checkout";
import checkoutIsOpen from "./features/checkoutSlice";

function App() {
  const dispatch = useDispatch();
  const { cartItems, isLoading } = useSelector((store) => store.cart);
  const { isOpen } = useSelector((store) => store.modal);
  const { checkoutIsOpen } = useSelector((store) => store.checkout);
  useEffect(() => {
    dispatch(calculate());
  }, [cartItems]);

  useEffect(() => {
    dispatch(getItems());
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      {isOpen && <Modal />}
      {checkoutIsOpen && <Checkout />}
      <Navbar />
      <CartContainer />
    </>
  );
}
export default App;
