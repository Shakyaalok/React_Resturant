import React, { Fragment,useState } from 'react'
import classes from './FoodLists.module.css'

const FoodLists = () => {

    let foodLists = [
        {name:'Shushi', description:'finest shushi in our area' , price:200},
        {name:'Fried Rice', description:'we cook in low fat oil' , price:60},
        {name:'Chowin', description:'one bowl is enough' , price:90}
    ]


    const [quantity,setQuantity] = useState(0);

    const quantitHadler = () =>{
        setQuantity(quantity+1);
    }


const showFoodLists = () =>{
    return foodLists.map((itm,index)=>{
        return (
            <Fragment>
            <div key={index} className={classes['food-item']}>
            <h1>{itm.name}</h1>
            <h3>{itm.description}</h3>
            <h3 className={classes['food-price']}>{itm.price}</h3>
            </div>
            <h5>{quantity}</h5>
            <button onClick={quantitHadler}>Add</button>
           
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
