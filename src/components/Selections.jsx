import React from "react";
import { useSelector, useDispatch } from "react-redux";

const Selections = () => {
  const dispatch = useDispatch();
  const items = useSelector((store) => store.selection.items);
  console.log("JSX / items selection=", items);
  return (
    <>
      <div style={{ marginLeft: "40rem" }}>Click to add to cart!</div>
      <div className="selection-image">
        {items &&
          items.map((item) => (
            <img
              src={item.img}
              alt=""
              // onClick={() => dispatch(addToCart())}
            ></img>
          ))}
      </div>
    </>
  );
};

export default Selections;
