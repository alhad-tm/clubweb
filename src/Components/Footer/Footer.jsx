import React from 'react'
import css from "./Footer.module.css"
import Phone from "../../assets/phone.svg"
import Mail from "../../assets/mail.svg"
import Logo from "../../assets/logo.svg"
import Location from "../../assets/location.svg"
import Insta from "../../assets/insta.svg"
import Twitter from "../../assets/twitter.svg"
// import Whatsapp from "../../assets/dashicons_whatsapp.svg"
import Backto from "../../assets/backto.svg"
import { Link } from "react-scroll";

const Footer = () => {
  const mobile = window.innerWidth <= 768 ? true : false;
  return (
   
    <div className={css.container} id='contact'>
      {/* <div className={css.div1}>
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
      </div> */}

      <div className={css.div2}>
        <div className={css.div2left}>
            <img src={Logo} alt="" />
        </div>
        <div className={css.div2middle}>
          <ul className={css.newli}>
            <li><Link to="banner" spy={true} smooth={true}> Home</Link></li>
            <li><Link to="benefits" spy={true} smooth={true}> Features</Link></li>
            <li><Link to="contact" spy={true} smooth={true}> Contact</Link></li>
           
          </ul>
        </div>

        <div className={css.div2right}>
        <div className={css.line2}>
                <img src={Location} alt="" />
                <span>124-H, 3rd Floor, Thendral Complex,DB Road,
RS Puram, Coimbatore - 641002</span>
            </div>
        <div className={css.line3}>
                <img src={Phone} alt="" />
               <span>+91 8877880101</span>
            </div>
        <div className={css.linenew}>
                <img src={Mail} alt="" />
              
               <a href="mailto: connect@invicious.in">  <span>connect@invicious.in</span> </a>  
            </div>

            <div className={css.line4}>


            <a href="https://www.instagram.com/batcave.in/"  target="_blank" rel="noopener noreferrer">  
              <div className={css.mediawrap}> 
              <svg width="22" height="21" viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg">
<g id="ant-design:instagram-filled">
<path id="Vector" d="M11.0001 7.76638C9.42315 7.76638 8.13624 8.9948 8.13624 10.5001C8.13624 12.0053 9.42315 13.2338 11.0001 13.2338C12.5771 13.2338 13.864 12.0053 13.864 10.5001C13.864 8.9948 12.5771 7.76638 11.0001 7.76638ZM19.5896 10.5001C19.5896 9.36804 19.6003 8.24626 19.5337 7.11628C19.4671 5.80378 19.1534 4.63894 18.148 3.67917C17.1403 2.71736 15.9222 2.41999 14.5472 2.35642C13.3612 2.29285 12.186 2.3031 11.0023 2.3031C9.81631 2.3031 8.64112 2.29285 7.45733 2.35642C6.08233 2.41999 4.86202 2.71941 3.85655 3.67917C2.84893 4.64099 2.53741 5.80378 2.47081 7.11628C2.4042 8.24831 2.41495 9.37009 2.41495 10.5001C2.41495 11.6301 2.4042 12.7539 2.47081 13.8839C2.53741 15.1964 2.85108 16.3612 3.85655 17.321C4.86416 18.2828 6.08233 18.5801 7.45733 18.6437C8.64327 18.7073 9.81846 18.697 11.0023 18.697C12.1882 18.697 13.3634 18.7073 14.5472 18.6437C15.9222 18.5801 17.1425 18.2807 18.148 17.321C19.1556 16.3592 19.4671 15.1964 19.5337 13.8839C19.6024 12.7539 19.5896 11.6321 19.5896 10.5001ZM11.0001 14.7062C8.56163 14.7062 6.59366 12.8277 6.59366 10.5001C6.59366 8.17243 8.56163 6.29392 11.0001 6.29392C13.4386 6.29392 15.4065 8.17243 15.4065 10.5001C15.4065 12.8277 13.4386 14.7062 11.0001 14.7062ZM15.587 7.10398C15.0177 7.10398 14.5579 6.66511 14.5579 6.12165C14.5579 5.5782 15.0177 5.13933 15.587 5.13933C16.1564 5.13933 16.6161 5.5782 16.6161 6.12165C16.6163 6.2507 16.5898 6.37851 16.5381 6.49776C16.4865 6.61702 16.4107 6.72537 16.3151 6.81662C16.2195 6.90787 16.106 6.98022 15.981 7.02953C15.8561 7.07884 15.7222 7.10414 15.587 7.10398Z" fill="#0279FC"/>
</g>
</svg>
  
               </div>   </a> 

            <a href="https://twitter.com/Batcave_in"  target="_blank" rel="noopener noreferrer">  
              <div className={css.mediawrap}> 
              <svg width="23" height="19" viewBox="0 0 23 19" fill="none" xmlns="http://www.w3.org/2000/svg">
<g id="003-twitter">
<path id="Path" d="M22.6191 2.37369C21.801 2.73257 20.9293 2.97044 20.0204 3.08594C20.9554 2.52769 21.669 1.65044 22.0045 0.593068C21.1328 1.11282 20.1703 1.47994 19.1445 1.68482C18.3168 0.803443 17.137 0.257568 15.85 0.257568C13.353 0.257568 11.3428 2.28432 11.3428 4.76894C11.3428 5.12644 11.373 5.47019 11.4473 5.79744C7.69764 5.61457 4.37977 3.81744 2.15089 1.07982C1.76177 1.75494 1.53352 2.52769 1.53352 3.35957C1.53352 4.92157 2.33789 6.30619 3.53689 7.10782C2.81227 7.09407 2.10139 6.88369 1.49914 6.55232C1.49914 6.56607 1.49914 6.58394 1.49914 6.60182C1.49914 8.79357 3.06252 10.6141 5.11264 11.0334C4.74552 11.1338 4.34539 11.1819 3.93014 11.1819C3.64139 11.1819 3.34989 11.1654 3.07627 11.1049C3.66064 12.8911 5.31889 14.2042 7.29064 14.2468C5.75614 15.4472 3.80777 16.1704 1.69852 16.1704C1.32864 16.1704 0.973891 16.1539 0.619141 16.1086C2.61702 17.3969 4.98477 18.1326 7.53814 18.1326C15.8376 18.1326 20.3751 11.2576 20.3751 5.29832C20.3751 5.09894 20.3683 4.90644 20.3586 4.71532C21.2538 4.08007 22.0059 3.28669 22.6191 2.37369Z" fill="#007AFF"/>
</g>
</svg>
 
               </div>   </a> 

               
            
               
             
               
                {/* <img src={Whatsapp} alt="" /> */}
            </div>
            
        </div>
      </div>
{/* <Link to="banner" spy={true} smooth={true}> <div className={css.linebtw}>
<div className={css.backtotop}>
        <img src={Backto} alt="" /> </div> 
</div>   </Link> */}
      
 {/* {mobile? ( <div className={css.lists}>
  <li>Home</li>
  <li>Home</li>
  <li>Home</li>
 </div>) :""} */}
      <div className={css.div3}>
        <span>Copyright © 2023 invicious | All Right Reserved</span>
      </div>
    </div>
  )
}

export default Footer 
