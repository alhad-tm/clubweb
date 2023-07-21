import React from 'react'
import css from "./Banner.module.css"
import Mainimg from "../../assets/main.svg";

const Banner = () => {
  return (
    <div className={css.container} id='banner'>

<div className={css.div1}>
        <div className={css.div1left}>
          <img className={css.maining} src={Mainimg} alt="" />
        </div>
        <div className={css.div1right}>
          <span>EVENT 2023</span>
          <span>Comes Back To The Future</span>
          <div className={css.rbtns}>
            <button className={css.rbtn}>Register</button>
            <button className={css.mdbtn}>More Details</button>
          </div>
        </div>
 </div>



    
      
    </div>
  )
}

export default Banner
