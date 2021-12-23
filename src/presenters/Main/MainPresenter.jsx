import React from 'react'
import SectionLayout from '../../components/section/SectionLayout/SectionLayout'
import UserSection from '../../components/section/UserSection/UserSection'
import styles from './index.module.scss'
import AccountSection from '../../components/section/AccountSection/AccountSection'

const MainPage = (props) => {
  return (
    <div className={styles.sectionArea}>
      <div className={styles.sections}>
        <div className={styles.section}>
          <SectionLayout>
            <UserSection />
          </SectionLayout>
        </div>
        <div className={styles.section}>
          <SectionLayout>
            <AccountSection />
          </SectionLayout>
        </div>
        <div className={styles.section}>
          <SectionLayout>
            <div>계좌</div>
          </SectionLayout>
        </div>
      </div>
    </div>
  )
}

export default MainPage
