import React from 'react'
import styles from './index.module.scss'

const MainPage = (props) => {
  return (
    <div className={styles.sectionArea}>
      <div className={styles.sections}>
        <div className={styles.section}>
          <div>이름</div>
          <div>이메일</div>
          <div>전화번호</div>
          <div>개인정보수정</div>
        </div>
        <div className={styles.section}>
          <div>계좌</div>
        </div>
        <div className={styles.section}>
          <div>카드</div>
        </div>
      </div>
    </div>
  )
}

export default MainPage
