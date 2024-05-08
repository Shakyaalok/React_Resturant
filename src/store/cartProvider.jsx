import React,{useReducer} from "react";
import cartContext from "./cart-context";



const initialState = {
  items:[],
  totalAmount:0
}

const cartReducer = (state,action)=>{
  if(action.type==='ADD'){
    console.log('ADD',state )
    const updatedItems = state.items.concat(action.item);
    const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount;
    console.log('updated',updatedTotalAmount)
    return {
      items:updatedItems,
      totalAmount:updatedTotalAmount
    }
  }
  return initialState;
}



const CartProvider = (props) => {

  const [cartState,cartDispatcherAction] = useReducer(cartReducer,initialState)

    const addItemHandler = (item)=>{
      console.log('item',item)
      cartDispatcherAction({type:'ADD',item:item})
    }


    const removeItemHandler = (id)=>{
   cartDispatcherAction({type:'REMOVE',id:id})
    }
    
   

    const cartContect = {
        items:initialState.items,
        totalAmount:cartState.totalAmount,
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
