import Header from "./Components/Layout/Header";
import Summary from "./Components/Layout/Summary";
import FoodLists from './Components/Layout/FoodLists'
import { Fragment } from "react";

function App() {
  return (
    <Fragment>
      <Header/>
      <Summary/>
      <FoodLists/>
    </Fragment>
  );
}

export default App;
