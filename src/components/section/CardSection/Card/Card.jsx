import React from 'react'
import styles from './index.module.scss'
import StandardButton from '../../../button/StandardButton'
import {useHistory} from 'react-router-dom'

const Card = (props) => {
  const cardId = 1
  const cardName = 'ㅎㅎㅎㅎ 카드'
  const createdDate = '2021-12-25'
  const linkedAccount = '123456789'

  const history = useHistory()

  function tmp() {
    // return boolean
    // true => ok
    // false => no
    window.confirm('really')
  }

  function movToDetail() {
    history.push('/card/' + cardId)
  }

  return (
    <div className={styles.card}>
      <div className={styles.info}>
        <div className={styles.cardName}>{cardName}</div>
        <div className={styles.subInfo}>
          <div>발급일 {createdDate}</div>
          <div>연결된 계좌 {linkedAccount}</div>
        </div>
      </div>
      <div className={styles.btn}>
        <StandardButton content={'조회'} clickFunc={movToDetail} className={'detail'} />
        <StandardButton content={'삭제'} clickFunc={tmp} className={'delete'} />
      </div>
    </div>
  )
}

export default Card
