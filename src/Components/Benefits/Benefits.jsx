import React from 'react' 
import css from "./Benefits.module.css"
import Circle from "../../assets/circle.svg"
import B2 from "../../assets/b2.svg"
import B3 from "../../assets/b3.svg"
import B4 from "../../assets/b4.svg"
import B5 from "../../assets/b5.svg"
import B6 from "../../assets/b6.svg"

const Benefits = () => {
  return (
    <div className={css.container} id='benefits'>
         <div className={css.div1}>
    <span>Club Features</span>
    <span>
        “Constant interaction with car owners is our main task in the process of brand development, and their Car Services” </span>
    
 </div>

 <div className={css.div2}>
    <div className={css.set}>
        <img src={Circle} alt="" />
        <span>Organized Road Trips</span>
        <div className={css.box}>
            <span>
            Constant interaction with car owners is our main task in the process of brand development, 
and their Car Services
            
</span>
        </div>
    </div>
    <div className={css.set}>
        <img src={B2} alt="" />
        <span>Exotic Car Shows</span>
        <div className={css.box}>
      
            <span>
            Car clubs provide a great venue for an interchange of people who share the same ideas, aspirations, and aims. It is an excellent place 
 </span>
        </div>
    </div>
    <div className={css.set}>
        <img src={B3} alt="" />
        <span>Local Meets</span>
        <div className={css.box}>
            
            <span>
            A car club is a great place to socialize! It allows for members from different areas of life to meet up and share a passion with other avid enthusiasts
 </span>
        </div>
    </div>
 {/* </div>
 <div className={css.div2}> */}
    <div className={css.set}>
        <img src={B4} alt="" />
        <span>Earn Reward points</span>
        <div className={css.box}>
            <span>
            This one falls in line with the joy of showing off your car but one of the added benefits of joining a club is gaining access to car shows. 
</span>
        </div>
    </div>
    <div className={css.set}>
        <img src={B5} alt="" />
        <span>Offers</span>
        <div className={css.box}>
      
            <span>
            Get exciting offers & deals for your services & enhancements
 </span>
        </div>
    </div>
    <div className={css.set}>
        <img src={B6} alt="" />
        <span>Hign Quality Networks</span>
        <div className={css.box}>
            
            <span>
            Get access to high quality networks across the neighborhood
 </span>
        </div>
    </div>
 </div>
 
      
    </div>
  )
}

export default Benefits
