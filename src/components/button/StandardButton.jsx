import React from 'react'
import styles from './index.module.scss'

const StandardButton = (props) => {
  const {content, clickFunc} = props

  return (
    <button className={styles.button} onClick={clickFunc}>
      {content}
    </button>
  )
}

export default StandardButton
