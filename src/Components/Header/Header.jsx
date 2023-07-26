import React, { useState } from 'react'
import css from "./Header.module.css"
import Logo from "../../assets/logo.svg"
import { Link } from "react-scroll";
import Bars from "../../assets/bars.svg"




const Header = () => {
  const mobile = window.innerWidth <= 768 ? true : false;
  const [menuOpened, setMenuOpened] = useState(false); 

  return (
    <div className={css.container} >
        <div className={css.left}>
            <img className={css.logo} src={Logo} alt="" />
        </div>

        <div className={css.right}>
          
      {menuOpened === false && mobile === true ? (
        <div onClick={() => setMenuOpened(true)}>
          <img className={css.bars}
            src={Bars}
            alt=""
           
          />
        </div>
      ) : (
            <ul className={css.hlist}>
            <li>
          <Link to="banner" spy={true} smooth={true}>
            Home
          </Link>
        </li>
            <li>
          <Link to="benefits" spy={true} smooth={true}>
            Features
          </Link>
        </li>
            {/* <li>
          <Link to="service" spy={true} smooth={true}>
            Service
          </Link>
        </li> */}
        <li>
          <Link to="contact" spy={true} smooth={true}>
            Contact
          </Link>
        </li>
           
          
            </ul> )}
          
          
        </div>

       
     
    </div>
  )
}

export default Header
