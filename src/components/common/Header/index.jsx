import React from 'react'
import {NavLink} from 'react-router-dom'
import styles from './index.module.scss'

const Header = (props) => {
  const {isLoggedIn} = props

  return (
    <div className={styles.header}>
      <NavLink to="/" className={styles.projName}>
        Bank System
      </NavLink>
      {isLoggedIn && <div className={styles.logOut}>로그아웃</div>}
    </div>
  )
}

export default Header
