import React from 'react'
import css from "./Header.module.css"
import Logo from "../../assets/logo.svg"



const Header = () => {
  return (
    <div className={css.container}>
        <div className={css.left}>
            <img className={css.logo} src={Logo} alt="" />
        </div>

        <div className={css.right}>
            <ul className={css.hlist}>
            <li>Home</li>
            <li>About</li>
           <li>Service</li>
           <li>Event</li>
           <li>Conatct</li>
            </ul>
          
          
        </div>

       
     
    </div>
  )
}

export default Header
