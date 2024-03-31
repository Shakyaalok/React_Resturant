import React,{useState} from "react";
import cartContext from "./cart-context";

const CartProvider = (props) => {
  const [items,setUpdatedItems] = useState([]);
    const addItemHandler = item=>{
      // when we define this function(key in next and value in current) then we have to call it where our add button exists
      
      setUpdatedItems([...items,item])
      // cartContect.items.push(item);
    }

    const removeItemHandler = id =>{}

    const cartContect = {
        items:items,
        totalAmount:0,
        addItem:addItemHandler,
        removeItem:removeItemHandler,
        // message:"this is new" // testing purpose
    }



  return <cartContext.Provider value={cartContect}>
    {/* {console.log('cartContect',cartContect)} */}
    {props.children}
    </cartContext.Provider>;
};

export default CartProvider;
