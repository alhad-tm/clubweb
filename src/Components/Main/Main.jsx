import React from 'react'
import css from "./Main.module.css"
import Mainimg from "../../assets/main.svg"

const Main = () => {
  return (
    <div className={css.container}>
      <div className={css.div1}>
        <div className={css.div1left}>
            <img src={Mainimg} alt="" />
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

      <div className={css.div2}>
        <h1>div2</h1>
      </div>
    </div>
  )
}

export default Main
