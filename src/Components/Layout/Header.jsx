import React ,{Fragment} from 'react'
import classes from './Header.module.css'
import mealsImg from '../../assets/meals.jpg'
const Header = () => {
  return (
    <Fragment>
        <header className={classes.header}>
            <h1>ReactMeals</h1>
            <button>Cart</button>
        </header>
        <div className={classes['main-image']}> 
            <img src={mealsImg} alt="image not working" />
        </div>
    </Fragment>
  )
}

export default Header
