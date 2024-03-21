import React,{Fragment} from 'react'
import classes from './Summary.module.css'

const Summary = () => {
  return (
   <div className={classes['summary-card']}>
      <h2>Decicious Food, Delivered To You</h2>
      <p>
        choose your favourite meal from selection of available and enjoy a delicious
        lunch of dinner at home
      </p>
      <p>
        All Our meals are cooked with high-quality ingredients just in time and of course by
        experienced chefs!
      </p>
    </div>
  )
}

export default Summary
