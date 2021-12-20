import React from 'react'
import StandardButton from '../../components/button/StandardButton'
import {NavLink} from 'react-router-dom'
import styles from './index.module.scss'

const LoginPresenter = () => {
  function test2() {
    console.log('test2')
  }

  return (
    <div className={styles.joinArea}>
      <div className={styles.layout}>
        <div className={styles.title}>회원 가입</div>
        <div className={styles.inputArea}>
          <div>이름</div>
          <input />
        </div>
        <div className={styles.inputArea}>
          <div>생년월일</div>
          <input type={'date'} />
        </div>
        <div className={styles.inputArea}>
          <div>이메일</div>
          <input type={'email'} />
        </div>
        <div className={styles.inputArea}>
          <div>비밀번호</div>
          <input type={'password'} />
        </div>
        <div className={styles.inputArea}>
          <div>전화번호</div>
          <input />
        </div>
        <div className={styles.inputArea}>
          <div>주소</div>
          <input />
        </div>
        <div className={styles.buttonArea}>
          <StandardButton content="회원가입" clickFunc={test2} />
        </div>
      </div>
    </div>
  )
}

export default LoginPresenter
