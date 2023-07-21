import React from 'react' 
import css from "./Benefits.module.css"
import Circle from "../../assets/circle.svg"

const Benefits = () => {
  return (
    <div className={css.container} id='benefits'>
         <div className={css.div1}>
    <span>Club benefits</span>
    <span>“Constant interaction with car owners is our main task in the process of brand development, and their Car Services” </span>
    
 </div>

 <div className={css.div2}>
    <div className={css.set}>
        <img src={Circle} alt="" />
        <span>Road services</span>
        <div className={css.box}>
            <span>Constant interaction with car owners is our main task in the process of brand development, 
and their Car Services </span>
        </div>
    </div>
    <div className={css.set}>
        <img src={Circle} alt="" />
        <span>Road services</span>
        <div className={css.box}>
      
            <span>Constant interaction with car owners is our main task in the process of brand development, 
and their Car Services </span>
        </div>
    </div>
    <div className={css.set}>
        <img src={Circle} alt="" />
        <span>Road services</span>
        <div className={css.box}>
            
            <span>Constant interaction with car owners is our main task in the process of brand development, 
and their Car Services </span>
        </div>
    </div>
 </div>
 <div className={css.div2}>
    <div className={css.set}>
        <img src={Circle} alt="" />
        <span>Road services</span>
        <div className={css.box}>
            <span>Constant interaction with car owners is our main task in the process of brand development, 
and their Car Services </span>
        </div>
    </div>
    <div className={css.set}>
        <img src={Circle} alt="" />
        <span>Road services</span>
        <div className={css.box}>
      
            <span>Constant interaction with car owners is our main task in the process of brand development, 
and their Car Services </span>
        </div>
    </div>
    <div className={css.set}>
        <img src={Circle} alt="" />
        <span>Road services</span>
        <div className={css.box}>
            
            <span>Constant interaction with car owners is our main task in the process of brand development, 
and their Car Services </span>
        </div>
    </div>
 </div>
      
    </div>
  )
}

export default Benefits
