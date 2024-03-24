import React,{useContext} from "react";
import classes from './HeaderCartButton.module.css'
import CartIcon from "../Cart/CartIcon";
import cartContext from "../../store/cart-context";
// import


const HeaderCartButton = (props) => {
   const cartCtx = useContext(cartContext);
   const numberofCartItems = cartCtx.items.reduce((curNumber, item)=>{
    return curNumber+item
   },0)

  return (
    <button className={classes.button} onClick={props.OpenCart}>
      <span className={classes.icon}>
        <CartIcon/>
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberofCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;
