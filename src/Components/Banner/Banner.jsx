import React from 'react'
import css from "./Banner.module.css"
import Mainimg from "../../assets/mainnew.png"; 
import { Link } from 'react-scroll';


const Banner = () => {
  return (
    <div className={css.container} id='banner'>

<div className={css.div1}>
        <div className={css.div1left}>
          <img className={css.mainimg} src={Mainimg} alt="" />
        </div>
        <div className={css.div1right}>
          <span>South India’s Finest Car Club</span>
          <span>Comes Back To The Future</span>
          <span>WINTER 2023</span>
          <div className={css.rbtns}>
         <Link to ="contact" spy={true} smooth={true}>  <button className={css.ctbtn}>Contact</button> </Link>  
         <Link to ="contact" spy={true} smooth={true}>     <button className={css.mdbtn}>More Details</button> </Link>  
          </div>
        </div>
 </div>



    
      
    </div>
  )
}

export default Banner
