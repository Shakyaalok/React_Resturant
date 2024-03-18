import React from 'react'
import './Header.css'
const Header = () => {
  return (
    <div className='header'>
      <div>
        <h3>ReactMeals</h3>
      </div>

      <div className='header__left'>
        <h4>cart Img</h4>
        <h3>View Cart</h3>
        <span className='header__cart'>0</span>
      </div>
    </div>
  )
}

export default Header
