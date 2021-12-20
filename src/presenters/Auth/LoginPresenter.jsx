import React from 'react'
import StandardButton from '../../components/button/StandardButton'
import {NavLink} from 'react-router-dom'
import styles from './index.module.scss'

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
        <div className={styles.joinArea}>
          <NavLink to="/join" className={styles.link}>
            회원 가입
          </NavLink>
        </div>
      </div>
    </div>
  )
}

export default LoginPresenter
