import React,{useContext} from 'react'
import classes from './Cart.module.css'
import Modal from '../UI/Modal';
import cartContext from '../../store/cart-context';

const Cart = (props) => {
    const cartCtx = useContext(cartContext);
  
    const cartItems = <ul className={classes['cart-items']}>{cartCtx.items.map((itm)=><li>{itm.name}</li>)}</ul>;
  
    console.log('cartCtx',cartCtx)

  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <div className={classes.total}>
        <span>Total amount</span>
        <span>{cartCtx.totalAmount}</span>
      </div>
      <div className={classes.actions}>
       <button className={classes['button--alt']} onClick={props.onClose}>Close</button>
       <button className={classes.button}>Order</button>
      </div>
    </Modal>
  )
}

export default Cart
