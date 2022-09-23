
import React, {useState} from "react";

function Item({ name, category }) {
  const [isInCart, setCart] = useState(false)
  const cartClass = isInCart ?  "in-cart" :"" ;
  function handleCart(){
    setCart(isInCart => !isInCart)
  }
    return (
      <li className={cartClass}>
        <span>{name}</span>
        <span className="category">{category}</span>
        <button className="add" onClick={handleCart}>{isInCart ? "Remove From Cart": "Add to Cart"}</button>
      </li>
    );
  }

export default Item;
