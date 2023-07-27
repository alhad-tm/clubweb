import React from 'react'
import css from "./Subscribe.module.css"
import Screen from "../../assets/HP-Elite.svg"
import Rectangle from "../../assets/sentmessage.svg"


const Subscribe = () => {
  const mobile = window.innerWidth <= 768 ? true : false;
  return (
    <div className={css.container}>
    <div className={css.divleft}>
        <span>Subscribe to our newsletter</span>
        <div className={css.leftbottom}>
            <input className={css.inp} type="text"  placeholder='Enter a Valid Email Address'/>
            {mobile? (<img className={css.rect} src={Rectangle} alt="" /> ): (
            <button className={css.subbtn}>Submit</button> )}
        </div>

    </div>


    <div className={css.divright}>
       <img src={Screen} alt="" />
    </div>
      
    </div>
  )
}

export default Subscribe
