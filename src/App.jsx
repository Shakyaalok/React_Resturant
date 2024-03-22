import Header from "./Components/Layout/Header";
import Summary from "./Components/Layout/Summary";
import FoodLists from './Components/Layout/FoodLists'
import Cart from './Components/Cart/Cart'
import { Fragment } from "react";
import React,{useState} from "react";



function App() {

  const [showCart , setShowCart] = useState(false);

  const showCartHandler = ()=>{
    setShowCart(true);
  }

  const hideCartHandler = () =>{
    setShowCart(false);
  }

  const ButtonOfCartHandler = () =>{
    setShowCart(true);
  }
  


  return (
    <Fragment>
      {showCart && <Cart onClose={hideCartHandler}/>}
      <Header onButtonOfCart={ButtonOfCartHandler} />
      <Summary/>
      <FoodLists/>
    </Fragment>
  );
}

export default App;

// open button toh header button component ke ander hai
// transfer state from app to header button
// App.js(pointer) --> header(pointer)--> header ke andar hai heder Button(perfrom on button click)


// close button cart ke andar hai
// cart(pointer)