import React from 'react'
import styles from './index.module.scss'

const SectionLayout = (props) => {
  const {children} = props
  return <div className={styles.sectionLayout}>{children}</div>
}

export default SectionLayout
