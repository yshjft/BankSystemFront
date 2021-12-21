import React from 'react'
import styles from './index.module.scss'

const NotFound = (props) => {
  return (
    <div className={styles.errLayout}>
      <div className={styles.errStatus}>404</div>
    </div>
  )
}

export default NotFound
