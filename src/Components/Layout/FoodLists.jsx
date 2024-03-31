import React, { useContext,useState,Fragment } from 'react'
import cartContext from '../../store/cart-context'
import classes from './FoodLists.module.css'

const FoodLists = () => {

    const cartCtx = useContext(cartContext)

    let foodLists = [
        {id:'1',name:'Shushi', description:'finest shushi in our area' , price:200},
        {id:'2',name:'Fried Rice', description:'we cook in low fat oil' , price:60},
        {id:'3',name:'Chowin', description:'one bowl is enough' , price:90}
    ]

const addingItemToCartHanlder=(e)=>{
    const itemId = e.target.value;
    const selectedItem = foodLists.find(item => item.id === itemId);

    // console.log(selectedItem.id,'si');
    const itemInCartCtx = cartCtx.items.findIndex(item => item.id === itemId);
    // console.log('incart',itemInCartCtx)
    // if the added item is not present in cartCtx then i will simply just add it otherwise do some modifications
    
    if(!itemInCartCtx){
        // exists
       const items = [...cartCtx.items];
       items[itemInCartCtx].quantity++;
       items[itemInCartCtx].totalAmount += selectedItem.price;
       cartCtx.addItem(items) 
    }else{
        // not exists
        let items = {
            ...selectedItem,
            quantity:1,
            totalAmount:selectedItem.price
        }
        cartCtx.addItem(items);
    }
    

}


const showFoodLists = () =>{
    return foodLists.map((itm,index)=>{
    
        return (
            <Fragment key={itm.id}>
            <div className={classes['food-item']}>
            <h1>{itm.name}</h1>
            <h3>{itm.description}</h3>
            <h3 className={classes['food-price']} >{itm.price}</h3>
            </div>
            {/* <button  value={itm.id} >Add</button> */}
            <button onClick={addingItemToCartHanlder} value={itm.id} >Add</button>
           
            {index !== foodLists.length - 1 && <hr />} {/* Add underline except for the last item */}
          </Fragment>
            
        )
    })
}

  return (
   
      <div className={classes['food-card']}>
      {showFoodLists()}
      </div>
  );
}

export default FoodLists
