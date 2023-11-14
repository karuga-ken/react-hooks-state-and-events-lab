import React, { useState } from "react";

function Item({ name, category }) {
 const [cart, setCart] = useState([]);

 const addToCart = (item) => {
    setCart([...cart, item]);
 };

 return (
    <li className="">
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={() => addToCart({ name, category })}>
        Add to Cart
      </button>
    </li>
 );
}

export default Item;