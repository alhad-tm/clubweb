import React from 'react'
import css from "./Advantage.module.css"
import Affordable from "../../assets/affordable price.svg"
import Technic from "../../assets/technicians.svg"
import Time from "../../assets/time.svg"
import Customer from "../../assets/customer.svg"
import Safety from "../../assets/safety.svg"


const Advantage = () => {
  return (
    <div className={css.container}> 
      <div className={css.box}>
        <div className={css.v1}>
         <div className={css.imgdiv}> 
         <img src={Safety} alt="" />
          </div> 
          <span>Best safety standards</span>
          
        </div>
        <div className={css.v1}> <div className={css.imgdiv}> 
         <img src={Affordable} alt="" />
          </div> 
          <span>Affordable Price</span>
          
        </div>
        <div className={css.v1}>
        <div className={css.imgdiv}> 
         <img src={Technic} alt="" />
          </div> 
          <span>Certified Technicians</span>
          
        </div>
        <div className={css.v1}>
        <div className={css.imgdiv}> 
         <img src={Time} alt="" />
          </div> 
          <span>Time for Delivery</span>
          
        </div>
        <div className={css.v1}>
        <div className={css.imgdiv}> 
         <img src={Customer} alt="" />
          </div> 
          <span>Customer Satisfaction</span>
          
        </div>
      </div>
    </div>
  )
}

export default Advantage
