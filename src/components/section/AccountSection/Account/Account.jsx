import React from 'react'
import {useHistory} from 'react-router-dom'
import StandardButton from '../../../button/StandardButton'
import styles from './index.module.scss'

const Account = (props) => {
  const accountNum = 123456789
  const history = useHistory()

  function tmp() {
    // return boolean
    // true => ok
    // false => no
    window.confirm('really')
  }

  function movToDetail() {
    history.push('/account/' + accountNum)
  }

  return (
    <div className={styles.account}>
      <div className={styles.info}>
        <div className={styles.accountNum}>{accountNum}</div>
        <div className={styles.balance}>1000000000 원</div>
      </div>
      <div className={styles.btn}>
        <StandardButton content={'조회'} clickFunc={movToDetail} className={'detail'} />
        <StandardButton content={'삭제'} clickFunc={tmp} className={'delete'} />
      </div>
    </div>
  )
}

export default Account
