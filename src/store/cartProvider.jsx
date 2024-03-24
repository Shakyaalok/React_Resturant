import React from "react";
import cartContext from "./cart-context";

const cartProvider = (props) => {

    const addItemHandler = item=>{}
    const removeItemHandler = id =>{}

    const cartContect = {
        items:[],
        totalAmount:0,
        addItem:addItemHandler,
        removeItem:removeItemHandler
    }



  return <cartContext.Provider value={cartContect}>{props.children}</cartContext.Provider>;
};

export default cartProvider;
