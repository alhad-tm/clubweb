import React from 'react'
import css from "./PageNotFound.module.css"
import Error from "../../assets/404 Error.svg"

const PageNotFound = () => {
  return (
    <div className={css.container}>
        <img src={Error} alt="" />
      
    </div>
  )
}

export default PageNotFound
