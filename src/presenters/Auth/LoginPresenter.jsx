import React from 'react'
import styles from './index.module.scss'
import StandardButton from '../../components/button/StandardButton'

const LoginPresenter = () => {
  function test() {
    console.log('test')
  }

  return (
    <div className={styles.loginArea}>
      <div className={styles.layout}>
        <div className={styles.title}>로그인</div>
        <div className={styles.inputArea}>
          <div>이메일</div>
          <input type={'email'} />
        </div>
        <div className={styles.inputArea}>
          <div>비밀번호</div>
          <input type={'password'} />
        </div>
        <div className={styles.buttonArea}>
          <StandardButton content="로그인" clickFunc={test} />
        </div>
      </div>
    </div>
  )
}

export default LoginPresenter
