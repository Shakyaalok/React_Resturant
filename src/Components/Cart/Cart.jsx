import React from 'react'
import classes from './Cart.module.css'
import Modal from '../UI/Modal';

const Cart = (props) => {
    const cartItems = <ul className={classes['cart-items']}>{[{id:'c1',name:'shshi',amount:2,price:20}].map((itm)=><li>{itm.name}</li>)}</ul>;


  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <div className={classes.total}>
        <span>Total amount</span>
        <span>40</span>
      </div>
      <div className={classes.actions}>
       <button className={classes['button--alt']} onClick={props.onClose}>Close</button>
       <button className={classes.button}>Order</button>
      </div>
    </Modal>
  )
}

export default Cart
