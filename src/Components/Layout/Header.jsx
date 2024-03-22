import React ,{Fragment} from 'react'
import classes from './Header.module.css'
import mealsImg from '../../assets/meals.jpg'
import HeaderCartButton from './HeaderCartButton'

const Header = (props) => {

  
  return (
    <Fragment>
        <header className={classes.header}>
            <h1>ReactMeals</h1>
            <HeaderCartButton OpenCart={props.onButtonOfCart}/>
        </header>
        <div className={classes['main-image']}> 
            <img src={mealsImg} alt="image not working" />
        </div>
    </Fragment>
  )
}

export default Header
