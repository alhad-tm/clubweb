import React from 'react'
import css from "./Subscribe.module.css"
import Screen from "../../assets/HP-Elite.svg"

const Subscribe = () => {
  return (
    <div className={css.container}>
    <div className={css.divleft}>
        <span>Subscribe to our newsletter</span>
        <div className={css.leftbottom}>
            <input className={css.inp} type="text" />
            <button className={css.subbtn}>Submit</button>
        </div>

    </div>


    <div className={css.divright}>
       <img src={Screen} alt="" />
    </div>
      
    </div>
  )
}

export default Subscribe
