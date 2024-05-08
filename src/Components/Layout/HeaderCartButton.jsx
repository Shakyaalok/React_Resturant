import React,{useContext, useEffect, useState} from "react";
import classes from './HeaderCartButton.module.css'
import CartIcon from "../Cart/CartIcon";
import cartContext from "../../store/cart-context";
// import


const HeaderCartButton = (props) => {
   const cartCtx = useContext(cartContext);
   const [quantity, setQuantity] = useState(0)
   
   useEffect(()=>{
    let qnty=0;
    cartCtx.items.map(itm => {
     console.log("itm.quantity",itm.quantity)
     qnty+=itm.quantity;
    });
    setQuantity(qnty)
   },[cartCtx.items])

  
   


  return (
    <button className={classes.button} onClick={props.OpenCart}>
      <span className={classes.icon}>
        <CartIcon/>
      </span>
      <span>Your Cart</span>
      {/* testing purpose */}
      {/* <span>{cartCtx.message}</span>  */}
      <span className={classes.badge}>{quantity}</span>
    </button>
  );
};

export default HeaderCartButton;
