import React,{useContext} from "react";
import classes from './HeaderCartButton.module.css'
import CartIcon from "../Cart/CartIcon";
import cartContext from "../../store/cart-context";
// import


const HeaderCartButton = (props) => {
   const cartCtx = useContext(cartContext);
   
   let calculateQuantity = 0;
   cartCtx.items.forEach(itm => {
     console.log(itm)
     calculateQuantity += itm.quantity;
   });
   


  return (
    <button className={classes.button} onClick={props.OpenCart}>
      <span className={classes.icon}>
        <CartIcon/>
      </span>
      <span>Your Cart</span>
      {/* testing purpose */}
      <span>{cartCtx.message}</span> 
      <span className={classes.badge}>{calculateQuantity}</span>
      {/* <span className={classes.badge}>{numberofCartItems}</span> */}
    </button>
  );
};

export default HeaderCartButton;
