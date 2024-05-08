import React, { useContext,Fragment } from 'react'
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
    const id = e.target.value
    const selectedItem = foodLists.find(item=>item.id===id);
    console.log('selectedItem',selectedItem)
    cartCtx.addItem({
        id:selectedItem.id,
        name:selectedItem.name,
        price:selectedItem.price,
        amount:1
    }); 
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
