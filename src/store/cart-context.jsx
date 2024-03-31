import React from "react";

const cartContext = React.createContext({
  items: [],
  totalAmount: 0,
  addItem: (item) => {},
  removeItem: (id) => {},
  // message:'this is message'// testing purpose -- no need to add in cartContext we do it in the provider
});

export default cartContext;
