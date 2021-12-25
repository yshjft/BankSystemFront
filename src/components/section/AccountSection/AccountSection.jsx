import React from 'react'
import Account from './Account/Account'
import styles from './index.module.scss'

const AccountSection = (props) => {
  return (
    <div className={styles.accountSectionArea}>
      <div className={styles.accountSectionTitle}>계좌</div>
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
