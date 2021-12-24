import React from 'react'
import styles from './index.module.scss'
import Account from './Account'

const AccountSection = (props) => {
  return (
    <div className={styles.accountSectionArea}>
      <div className={styles.sectionTitle}>계좌</div>
      <div className={styles.accounts}>
        <Account />
        <Account />
        <Account />
        <Account />
        <Account />
        <Account />
        <Account />
        <Account />
        <Account />
        <Account />
        <Account />
        <Account />
        <Account />
        <Account />
        <Account />
        <Account />
      </div>
    </div>
  )
}

export default AccountSection
