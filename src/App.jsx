import Header from "./Components/Layout/Header";
import Summary from "./Components/Layout/Summary";
import FoodLists from './Components/Layout/FoodLists'
import Cart from './Components/Cart/Cart'
import { Fragment } from "react";

function App() {
  return (
    <Fragment>
      <Cart/>
      <Header/>
      <Summary/>
      <FoodLists/>
    </Fragment>
  );
}

export default App;
