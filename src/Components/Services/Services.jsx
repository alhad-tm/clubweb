import React from 'react'
import css from "./Services.module.css"
import Date from "../../assets/date.svg"
import Si from "../../assets/service-illustration.svg"
const Services = () => {
  return (
    <div className={css.container}>
        <div className={css.div1}>
            <span>Our services</span>
            <span>Affordable Price Car Services Available In Coimbatore </span>
        </div>


        <div className={css.div2}>
            <div className={css.div2left}>
                <div className={css.leftend}>
                    <div className={css.line}>
                        <img src={Date} alt="" />
                        <span>Periodic Maintanance service</span>
                    </div>
                    <div className={css.line}>
                        <img src={Date} alt="" />
                        <span>Periodic Maintanance service</span>
                    </div>
                    <div className={css.line}>
                        <img src={Date} alt="" />
                        <span>Periodic Maintanance service</span>
                    </div>
                    <div className={css.line}>
                        <img src={Date} alt="" />
                        <span>Periodic Maintanance </span>
                    </div>
                    <div className={css.line}>
                        <img src={Date} alt="" />
                        <span>Periodic Maintanance service</span>
                    </div>
                    <div className={css.line}>
                        <img src={Date} alt="" />
                        <span>Periodic Maintanance service</span>
                    </div>
                     </div>
                <div className={css.rightend}>
                    <div className={css.line}>
                        <img src={Date} alt="" />
                        <span>Periodic Maintanance service</span>
                    </div>
                    <div className={css.line}>
                        <img src={Date} alt="" />
                        <span>Periodic Maintanance service</span>
                    </div>
                    <div className={css.line}>
                        <img src={Date} alt="" />
                        <span>Periodic</span>
                    </div>
                    <div className={css.line}>
                        <img src={Date} alt="" />
                        <span>Periodic Maintanance service</span>
                    </div>
                    <div className={css.line}>
                        <img src={Date} alt="" />
                        <span>Periodic Maintanance service</span>
                    </div>
                    <div className={css.line}>
                        <img src={Date} alt="" />
                        <span>Periodic Maintanance service</span>
                    </div>
                     </div>

            </div>
            <div className={css.div2right}>
                <img src={Si} alt="" />

            </div>
        </div>
      
    </div>
  )
}

export default Services
