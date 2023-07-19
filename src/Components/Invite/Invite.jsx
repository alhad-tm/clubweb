import React from 'react'
import  css from "./Invite.module.css"

const Invite = () => {
  return (
    <div className={css.container}>
      <div className={css.left}>
<div className={css.leftone}> <span>Invite Your Friends</span> </div>
<div className={css.lefttwo}>
    <span>Get 50 points</span>
    <button className={css.invitebutton}>Invite</button>
</div>

      </div>

     


      <div className={css.right}>
        <span>Stayup to speed!</span>
      </div>


    </div>
  )
}

export default Invite
