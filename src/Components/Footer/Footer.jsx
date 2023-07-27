import React from 'react'
import css from "./Footer.module.css"
import Phone from "../../assets/phone.svg"
import Mail from "../../assets/mail.svg"
import Logo from "../../assets/logo.svg"
import Location from "../../assets/location.svg"
import Insta from "../../assets/insta.svg"
import Youtube from "../../assets/bi_youtube.svg"
import Whatsapp from "../../assets/dashicons_whatsapp.svg"
import Backto from "../../assets/backto.svg"
import { Link } from "react-scroll";

const Footer = () => {
  const mobile = window.innerWidth <= 768 ? true : false;
  return (
   
    <div className={css.container} id='contact'>
      <div className={css.div1}>
        <span>FOR ANY ENQUIRIES</span>
        <div className={css.wrap}>
            <div className={css.line}>
                <img src={Phone} alt="" />
                <span>  +12345677  </span>
            </div>
            <div className={css.line}>
                <img src={Mail} alt="" />
               <span> info@batcave.in  </span> 
            </div>
        </div>
      </div>

      <div className={css.div2}>
        <div className={css.div2left}>
            <img src={Logo} alt="" />
        </div>

        <div className={css.div2right}>
        <div className={css.line2}>
                <img src={Location} alt="" />
                <span>124-H, 3rd Floor, Thendral Complex,DB Road,
RS Puram, Coimbatore - 641002</span>
            </div>
        <div className={css.line3}>
                <img src={Phone} alt="" />
               <span>+12345677</span>
            </div>
        <div className={css.linenew}>
                <img src={Mail} alt="" />
               <span>Contact@batcave.co.in</span>
            </div>

            <div className={css.line4}>
                <img src={Insta} alt="" />
                <img src={Youtube} alt="" />
                <img src={Whatsapp} alt="" />
            </div>
            
        </div>
      </div>
<Link to="banner" spy={true} smooth={true}> <div className={css.linebtw}>
<div className={css.backtotop}>
        <img src={Backto} alt="" /> </div> 
</div>   </Link>
      
 {mobile? ( <div className={css.lists}>
  <li>Home</li>
  <li>Home</li>
  <li>Home</li>
 </div>) :""}
      <div className={css.div3}>
        <span>Copyright © 2023 invicious | All Right Reserved</span>
      </div>
    </div>
  )
}

export default Footer 
