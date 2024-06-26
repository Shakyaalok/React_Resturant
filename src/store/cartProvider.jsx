import React,{useReducer} from "react";
import cartContext from "./cart-context";



const initialState = {
  items:[],
  totalAmount:0
}

const cartReducer = (state,action)=>{
  if(action.type==='ADD'){
  

    const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount;
    const existingItemIndex = state.items.findIndex(item=> item.id === action.item.id);
    const existingCartItem = state.items[existingItemIndex];
    
    let updatedItems;

    if(existingCartItem){
      const updatedItem = {
        ...existingCartItem,
        amount:existingCartItem.amount + action.item.amount
      }

      updatedItems =[...state.items];
      updatedItems[existingItemIndex] = updatedItem;

    }else{
       updatedItems = state.items.concat(action.item);
    }
    
    return {
      items:updatedItems,
      totalAmount:updatedTotalAmount
    }
  }


  if(action.type==="REMOVE"){
    const existingItemIndex = state.items.findIndex(item=>item.id===action.id);
    const existingCartItem = state.items[existingItemIndex];
    const updatedTotalAmount = state.totalAmount - existingCartItem.price;
    let updatedItems ;
    if(existingCartItem.amount===1){
      updatedItems = state.items.filter(item=>item.id!==action.id);
    }else{
      const updatedItem = {...existingCartItem,amount:existingCartItem.amount-1};
      updatedItems = [...state.items];
      updatedItems[existingItemIndex] = updatedItem
    }


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
      cartDispatcherAction({type:'ADD',item:item})
    }


    const removeItemHandler = (id)=>{
   cartDispatcherAction({type:'REMOVE',id:id})
    }
    
   

    const cartContect = {
        items:cartState.items,
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
