import React from 'react'
import StandardButton from '../../button/StandardButton'
import {useHistory} from 'react-router'
import styles from './index.module.scss'

const UserSection = (props) => {
  const history = useHistory()
  const id = 1
  const name = 'jerry'
  const email = 'test@test.com'
  const phone = '01011112222'
  // 상위 컴포넌트에서 보내줘야 한다.
  function tmp() {
    // return boolean
    // true => ok
    // false => no
    window.confirm('really')
  }

  function movToEdit(id) {
    history.push('/user/' + id)
  }

  return (
    <div className={styles.userSectionArea}>
      <div>
        <div className={styles.greetingAndName}>안녕하세요! {name}</div>
        <div className={styles.email}>{email}</div>
        <div className={styles.phone}>{phone}</div>
        <div className={styles.button}>
          <StandardButton content={'정보 수정하기'} clickFunc={() => movToEdit(id)} />
        </div>
        <div className={styles.button}>
          <StandardButton content={'탈퇴하기'} clickFunc={tmp} />
        </div>
      </div>
    </div>
  )
}

export default UserSection
