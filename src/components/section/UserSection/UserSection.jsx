import React from 'react'
import styles from './index.module.scss'

const UserSection = (props) => {
  const name = 'jerry'
  const email = 'test@test.com'
  const phone = '01011112222'

  return (
    <div className={styles.userSectionArea}>
      <div>
        <div className={styles.greetingAndName}>안녕하세요! {name}</div>
        <div className={styles.email}>{email}</div>
        <div className={styles.phone}>{phone}</div>
        <div className={styles.button}>정보 수정하기</div>
        <div className={styles.button}>탈퇴하기</div>
      </div>
    </div>
  )
}

export default UserSection
