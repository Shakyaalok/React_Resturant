import React, { useContext } from "react";
import classes from "./Cart.module.css";
import Modal from "../UI/Modal";
import cartContext from "../../store/cart-context";

const Cart = (props) => {

  const cartCtx = useContext(cartContext);
  const hasItems = cartCtx.items.length>0
  console.log('hasItems',hasItems)

  const plusCartHandler = (item) =>{
    console.log('iyem',item);
    cartCtx.addItem(item)

  }

  const minusCartHandler = (id) =>{
    console.log('iyemId',id);
    cartCtx.removeItem(id)

  }

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartCtx.items.map((itm) => (
        <li className={classes["cart-item"]}>
          <div>
            <h2>{itm.name}</h2>
            <div className={classes.summary}>
              <span className={classes.price}>{itm.price}</span>
              <span className={classes.amount}>x {itm.amount}</span>
            </div>
          </div>
          <div className={classes.actions}>
            <button onClick={()=>minusCartHandler(itm.id)}>−</button>
            <button onClick={()=>plusCartHandler(itm)}>+</button>
          </div>
        </li>
      ))}
    </ul>
  );

  console.log("cartCtx", cartCtx);

  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <div className={classes.total}>
        <span>Total amount</span>
        <span>{cartCtx.totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onClose}>
          Close
        </button>
        {hasItems && <button className={classes.button}>Order</button>}
   
      </div>
    </Modal>
  );
};

export default Cart;
